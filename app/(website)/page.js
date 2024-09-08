import React from 'react';
import { getWishlist } from '@/lib/data';
import Link from 'next/link';
import TitleSection from '@/components/title-text';
import SearchBar from '@/components/searchbar';
import {  FiPlusCircle } from 'react-icons/fi';
import Background from '@/components/background';
import ItemTable from '@/components/table/item-table';
import TableHeader from '@/components/table/table-header';
import TableBody from '@/components/table/table-body';
import PageWrapper from '@/components/page-wrapper';


const HomePage = async ({searchParams}) => {
  const query = searchParams?.query || ""

  const wishlist = await getWishlist(query);

  return (
    <PageWrapper>
      <div className='flex flex-col gap-6'>
      <TitleSection
          title="WishList Haven" 
          subtitle="Your personal wishlist tracker" 
          titleClassName="text-center"
          subtitleClassName="text-center"
        />
        <Background
        className='flex items-center justify-between gap-8 p-4 bg-thbg rounded-xl w-full'
        >
         <SearchBar />
          <Link
          className='flex text-thbg hover:text-gray-600 cursor-pointer'
          href={'/create'}>
            <FiPlusCircle size={32} />

          </Link>
        </Background>
        <Background
        className='p-6 shadow-lg'

        >
          <ItemTable>
            <TableHeader />
            <TableBody wishlist={wishlist} query={query} />
          </ItemTable>
         </Background>
       </div>
       </PageWrapper>
  );
};

export default HomePage;
