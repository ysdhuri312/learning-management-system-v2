/** @format */
'use client';

import { useState } from 'react';
import { assets } from '../../../public/assets';
import Image from 'next/image';

export default function SearchBar() {
  const [input, setInput] = useState('');

  return (
    <form className='max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-500/20 rounded'>
      <Image
        className='md:w-auto w-10 px-3'
        src={assets.search_icon}
        alt='search_icon'
      />
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type='text'
        className='w-full h-full outline-none text-gray-500/80'
        placeholder='Search for courses'
      />
      <button
        type='submit'
        className='bg-blue-600 rounded text-white md:px-10 px-7 md:py-3 py-2 mx-1'
      >
        Search
      </button>
    </form>
  );
}
