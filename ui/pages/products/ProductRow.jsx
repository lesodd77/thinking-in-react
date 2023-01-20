import React from 'react';

export const ProductRow = ({ product }) => (
  <tr style={{ color: product.stocked ? 'text-gray-700 dark:text-white' : 'red' }}>
    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 dark:text-white">{product.name}</td>
    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 dark:text-white">{product.price}</td>
  </tr>
);
