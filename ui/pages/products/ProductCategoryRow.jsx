import React from 'react';

export const ProductCategoryRow = ({ category }) => (
  <tr className="whitespace-nowrap px-3 py-4 text-sm dark:text-sky-400 text-primary">
    <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-sky-400 text-primary" colSpan={2}>{category}</td>
  </tr>
);
