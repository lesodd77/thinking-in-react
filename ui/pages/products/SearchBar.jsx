import React from 'react';

export const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) => {
  return (
    <div className="relative flex justify-center max-w-2xl mx-auto">
              <div className="relative z-20 bg-white/60 dark:bg-slate-800/30 rounded-lg shadow-md py-6 px-4">
                <form
                  action=""
                  className="space-x-6"
                >
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={({ target: { value } }) => onFilterTextChange(value)}
         className="shadow-md bg-white/70 dark:bg-slate-800/80 dark:text-white dark:hover:ring-tertiaryOne ring-1 focus:outline-0 text-gray-700 ring-primary/20 dark:ring-primary/50 hover:ring-primary px-4 rounded-lg text-sm"
      />
      <label>
        <input
          type="checkbox"
          value={inStockOnly}
          onChange={({ target: { checked } }) => onInStockOnlyChange(checked)}
        />{' '}
        Only show products in stock
      </label>
    </form>
    </div>
    </div>
  );
};
