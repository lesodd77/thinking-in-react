import React from 'react';
import { FilterableProductTable } from './FilterableProductTable';

const API_RESPONSE = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
];
export const Product = () => {
  return (
    <div
      className="mt-16 bg-gray-100/10 dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-2xl min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8"
    >
      <div
      className="bg-primary dark:bg-primary rounded-lg ring-1 ring-slate-900/5 shadow-xl sm:px-6 md:grid md:place-items-center px-4 py-4"
    >
      <FilterableProductTable products={API_RESPONSE} />
    </div>
    </div>
  );
};
