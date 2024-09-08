// components/table/TableBody.jsx
import React from 'react';
import { FiEdit2, FiTrash } from 'react-icons/fi';
import Link from 'next/link';
import { deleteWishItem } from '@/lib/action';

const TableBody = ({ wishlist }) => {
  return (
    <tbody>
      {wishlist.length === 0 ? (
        <tr>
          <td colSpan="4" className='py-4 text-center text-gray-400'>No items in your wishlist</td>
        </tr>
      ) : (
        wishlist.map((item, index) => (
          <tr key={index} className='hover:bg-gray-700'>
            <td className='py-3 px-4 border-b border-gray-700 text-center'>{item.itemName}</td>
            <td className='py-3 px-4 border-b border-gray-700 text-center'>{item.purchased}</td>
            <td className='py-3 px-4 border-b border-gray-700 text-center'>{item.price}</td>
            <td className='py-3 px-4 border-b flex items-center justify-center border-gray-700 text-center'>
              <Link href={`/edit/${item.id}`} className='text-blue-500 hover:text-blue-700'>
                <FiEdit2 className='w-4 h-4' />
              </Link>
              <form action={deleteWishItem} method="POST" className='inline ml-2'>
                <input type="hidden" name="id" value={item.id} />
                <button type="submit" className='text-red-500 hover:text-red-700'>
                  <FiTrash className='w-4 h-4' />
                </button>
              </form>
            </td>
          </tr>
        ))
      )}
    </tbody>
  );
};

export default TableBody;
