import React from 'react';

const FormTextarea = ({ id, name, label, placeholder, rows, item }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-blue-400">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        rows={rows}
        defaultValue={item}
        className={`mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-thbg/5 focus:ring-thbg/5 sm:text-sm p-3 bg-thbg/90 outline-none`}
     
      />
    </div>
  );
};

export default FormTextarea;
