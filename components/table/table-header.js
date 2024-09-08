import React from 'react'

const TableHeader = () => {
  return (
    <thead className='bg-thbg text-white'>
              <tr>
        <th className='py-3 px-4 rounded-tl-xl border-b border-gray-700 text-center'>Name</th>
        <th className='py-3 px-4 border-b border-gray-700 text-center'>Purchased</th>
        <th className='py-3 px-4 border-b border-gray-700 text-center'>Price</th>
        <th className='py-3 px-4 rounded-tr-xl border-b border-gray-700 text-center'>Actions</th>
      </tr>        
    </thead>
  )
}

export default TableHeader