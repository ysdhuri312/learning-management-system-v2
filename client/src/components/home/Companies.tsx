/** @format */

import Image from 'next/image';
import { assets } from '../../../public/assets';

export default function Companies() {
  return (
    <div className='pt-16'>
      <p className='text-base text-gray-500'>Trusted by learners from</p>
      <div className='flex flex-wrap items-center justify-center gap-6 md:gap-16 md:mt-8 mt-5'>
        <Image
          className='w-auto h-auto'
          src={assets.microsoft_logo}
          alt='Microsoft'
        />
        <Image
          className='w-auto h-auto'
          src={assets.walmart_logo}
          alt='Walmart'
        />
        <Image
          className='w-auto h-auto'
          src={assets.accenture_logo}
          alt='Accenture'
        />
        <Image className='w-auto h-auto' src={assets.adobe_logo} alt='Adobe' />
        <Image
          className='w-auto h-auto'
          src={assets.paypal_logo}
          alt='Paypal'
        />
      </div>
    </div>
  );
}
