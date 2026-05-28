/** @format */

import Companies from '@/components/home/Companies';
import Hero from '@/components/home/Hero';

export default function Home() {
  return (
    <main className='flex flex-col items-center space-y-7 text-center'>
      <Hero />
      <Companies />
    </main>
  );
}
