import React from 'react';

const FormInput = ({ id, name, type, label, placeholder, required, item}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-blue-400">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        defaultValue={item}
        className={`mt-1 block w-full rounded-lg shadow-sm focus:border-thbg/5 focus:ring-thbg/5 sm:text-sm p-3 bg-thbg/90 outline-none`}
      />
    </div>
  );
};

export default FormInput;
