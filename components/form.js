import { CreateWishList } from '@/lib/action';
import React from 'react';
import FormUi from './form/form-ui';
import FormInput from './form/form-input';
import FormTextarea from './form/form-textarea';
import FormSelect from './form/form-select';

const Form = () => {
  return (
   
    <FormUi
    action={CreateWishList}
    >
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
      <FormInput
        name="itemName"
        type="text"
        placeholder="Name"
        required
        label="Item Name"
        />
        <FormTextarea
       id="description"
       name="description"
       placeholder="Description"
       rows="4"
       label="Description"
        />
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
      <FormInput
          id="price"
          name="price"
          type="number"
          placeholder="Price"
          label="Price"
        />
        <FormInput
          id="purchaseUrl"
          name="purchaseUrl"
          type="text"
          placeholder="Purchase URL"
          label="Purchase URL"
        />        
      </div>

      <FormSelect
              id="purchased"
              name="purchased"
              options={[
                { value: '', label: 'Select' },
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
              label="Purchased"
            />
                 <button
        type="submit"
        className="w-full px-4 py-2 border border-transparent text-blue-400 shadow-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-thbg p-2 rounded-lg hover:bg-slate-900 transition-colors hover:text-white cursor-pointer"
      >
        Add Item
      </button>
    </FormUi>
  );
};

export default Form;
