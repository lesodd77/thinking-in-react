import React, { useState } from 'react';
import { SearchBar } from './SearchBar';
import { ProductTable } from './ProductTable';

export const FilterableProductTable = ({ products }) => {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <div className="bg-gray-100 text-slate-700 dark:text-slate-300 dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl min-h-full px-4 py-12 sm:px-6 sm:py-16 md:grid md:place-items-center lg:px-8">
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
};
