/** @format */

import Companies from '@/components/home/Companies';
import Hero from '@/components/home/Hero';
import Testimonials from '@/components/home/Testimonials';

export default function Home() {
  return (
    <main className='flex flex-col items-center space-y-7 text-center'>
      <Hero />
      <Companies />
      <Testimonials />
    </main>
  );
}
