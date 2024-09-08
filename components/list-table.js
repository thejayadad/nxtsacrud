import { deleteWishItem } from '@/lib/action';
import Link from 'next/link';
import React from 'react';
import { FiTrash } from 'react-icons/fi';

const ListTable = ({ wishlist }) => {
  if (!wishlist || wishlist.length === 0) {
    return <p className="text-center text-gray-500 mt-4">Post your first item</p>;
  }

  return (
    <div className=" bg-bg">
      <table className="w-[90vw] mx-auto text-sm text-left text-gray-500 border rounded-lg border-gray-200 shadow-sm hover:shadow-md">
        <thead className="text-xs font-semibold text-gray-700 uppercase p-8 bg-gray-100">
          <tr>
            <th className="py-3 px-6">Name</th>
            <th className="py-3 px-6">Price</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {wishlist.map((item, index) => (
            <tr key={index} className="transition duration-300 ease-in-out hover:bg-gray-50">
              <td className="py-3 px-6 border-b border-gray-200">{item.itemName}</td>
              <td className="py-3 px-6 border-b border-gray-200">{item.price}</td>
              <td className="py-3 px-6 border-b flex items-center justify-center border-gray-200 text-center">
                <Link
                href={`/edit/${item.id}`}
                  className="text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 text-sm"
                >
                  Edit
                </Link>
                  <form
                  action={deleteWishItem}
                  >
                    <input hidden name='id' value={item.id} />
                    <button                
                      className="text-red-600 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 rounded px-2 py-1 text-sm ml-2"
                    >
                      <FiTrash className='h-4 w-4' />
                    </button>
                  </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTable;
