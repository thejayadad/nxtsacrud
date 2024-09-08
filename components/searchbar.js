'use client'
import React from 'react'
import {FiSearch} from "react-icons/fi"
import { useSearchParams, usePathname, useRouter} from "next/navigation"
import { useDebouncedCallback } from 'use-debounce'
import Box from './box'
import Background from './background'

const SearchBar = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const {replace} = useRouter()

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", "1")
    if(term){
      params.set("query", term)
    } else {
      params.delete("query")
    }
    replace(`${pathname}?${params.toString()}`)
  }, 300)
  return (
    <div className='flex items-center w-full justify-center'>
      <Background
      className='relative w-full mx-auto'

      >
        <input
          type='text'
          placeholder='Search...'
          className='w-full  py-2 px-1 rounded-lg bg-transparent text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get("query")?.toString()}
        />
        <div className='absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400'>
          <FiSearch size={20} />
        </div>
      </Background>
    </div>
  );
};

export default SearchBar;
