import React, { useState } from 'react';
import { ProductRow } from './ProductRow';
import { ProductCategoryRow } from './ProductCategoryRow';

export const ProductTable = ({ products, filterText, inStockOnly }) => {
  const [sort, setSort] = useState('');

  const rows = products
    .filter((product) => {
      if (
        filterText &&
        !product.name.toLowerCase().includes(filterText.toLowerCase())
      ) {
        return false;
      }
      if (inStockOnly && !product.stocked) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (!sort) {
        return 0;
      }
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return sort === 'asc' ? -1 : 1;
      }
      if (nameA > nameB) {
        return sort === 'asc' ? 1 : -1;
      }
      return 0;
    })
    .reduce((acc, product, index, originalProducts) => {
      const categoryRow = (
        <ProductCategoryRow
          key={product.category}
          category={product.category}
        />
      );
      const row = <ProductRow key={product.name} product={product} />;
      const newCategory =
        !sort && (index === 0 || product.category !== originalProducts[index - 1].category);
      if (newCategory) {
        return [...acc, categoryRow, row];
      }

      return [...acc, row];
    }, []);

  function onSort () {
    setSort(!sort ? 'asc' : (sort === 'asc' ? 'desc' : ''));
  }

  return (
    <table className="min-w-full divide-y divide-gray-300">
      <thead className="bg-gray-50 dark:bg-slate-800">
        <tr>
          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-700 dark:text-white" onClick={onSort}>Name {sort ? `(${sort})` : ''}</th>
          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-700 dark:text-white">Price</th>
        </tr>
      </thead>
      <tbody className="py-6 px-2 bg-white dark:bg-slate-800">{rows}</tbody>
    </table>
  );
};
