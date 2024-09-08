import React from 'react';

const FormSelect = ({ id, name, options, label, defaultValue, item }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-blue-400">
        {label}
      </label>
      <select
        id={id}
        name={name}
        defaultValue={defaultValue}
        item={item}
        className="mt-1 block w-full border-gray-300 text-blue-400 rounded-lg shadow-sm focus:border-thbg/5 focus:ring-thbg/5 sm:text-sm p-3 bg-thbg/90 outline-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
