import FormInput from '@/components/form/form-input';
import FormSelect from '@/components/form/form-select';
import FormTextarea from '@/components/form/form-textarea';
import FormUi from '@/components/form/form-ui';
import PageText from '@/components/page-text';
import PageWrapper from '@/components/page-wrapper';
import { updateWishItem } from '@/lib/action';
import { getItemById } from '@/lib/data';
import React from 'react'

const EditItemPage = async ({ params }) => {
    let item = null;

    if (params.id) {
      item = await getItemById(params.id);
    }
  
  return (
    <PageWrapper>
    <PageText
      text={'Edit Your Wishlist Item'}
      />
      <FormUi
      action={updateWishItem}
      >
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <input hidden id='id' name='id' defaultValue={item.id} />
      <FormInput
        item={item.itemName}
        name="itemName"
        type="text"
        placeholder={item.itemName}
        required
        label="Item Name"
        />
        <FormTextarea
       id="description"
       name="description"
       placeholder={item.description}
       rows="4"
       label="Description"
        />
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <FormInput
          id="price"
          name="price"
          type="number"
          placeholder={item.price}
          item={item.price}
          label="Price"
        /> 
          <FormInput
          id="purchaseUrl"
          name="purchaseUrl"
          type="text"
          item={item.purchaseUrl}
          placeholder={item.purchaseUrl}
          label="Purchase URL"
        />               
        </div>
        <FormSelect
          id="purchased"
          name="purchased"
          defaultValue={item?.purchased}
          item={item?.purchased}
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
        Update Item
      </button>
      </FormUi>
      </PageWrapper>
  )
}

export default EditItemPage