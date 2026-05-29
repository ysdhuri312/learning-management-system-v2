/** @format */

import SearchBar from '@/components/ui/SearchBar';
import Link from 'next/link';
import { dummyCourses } from '../../../../public/assets';
import CourseCard from '@/components/ui/CourseCard';

export default function page() {
  return (
    <>
      <div className='relative md:px-36 px-8 pt-20 text-left'>
        <div className='flex md:flex-row flex-col gap-6 items-start justify-between w-full'>
          <div>
            <h1 className='text-4xl font-semibold text-gray-800'>
              Course List
            </h1>
            <p className='text-gray-500'>
              <Link href='/' className='text-blue-600 cursor-pointer'>
                Home
              </Link>{' '}
              / <span>Course List</span>
            </p>
          </div>
          <SearchBar />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0'>
          {dummyCourses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </>
  );
}
