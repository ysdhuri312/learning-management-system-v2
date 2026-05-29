/** @format */
'use client';

import Link from 'next/link';

export default function CourseCard({ course }: { course: any }) {
  return (
    <Link
      onClick={() => scrollTo(0, 0)}
      href={'/courses/' + course.courseTitle}
      className='border border-gray-500/30 pb-6 overflow-hidden rounded-lg'
    >
      <img className='w-full' src={course.courseThumbnail} alt='' />
      <div className='p-3 text-left'>
        <h3 className='text-base font-semibold'>{course.courseTitle}</h3>
        <p className='text-gray-500'>{course.educator.name}</p>
        <div className='flex items-center space-x-2'>
          <p>5</p>
          <div className='flex'>⭐⭐⭐⭐⭐</div>
          <p className='text-gray-500'>({course.courseRatings.length})</p>
        </div>
        <p className='text-base font-semibold text-gray-800'>
          $
          {(
            course.coursePrice -
            (course.discount * course.coursePrice) / 100
          ).toFixed(2)}
        </p>
      </div>
    </Link>
  );
}
