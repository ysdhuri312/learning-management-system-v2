/** @format */

import Link from 'next/link';
import { assets } from '../../../public/assets';
import Image from 'next/image';

export default function Navbar() {
  const user: boolean = false;
  const isEducator: boolean = false;
  const isCoursesListPage: boolean = false;

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${isCoursesListPage ? 'bg-white' : 'bg-cyan-100/70'}`}
    >
      <Link href='/'>
        <Image
          src={assets.logo}
          loading='eager'
          alt='Logo'
          className='w-28 lg:w-32 cursor-pointer'
        />
      </Link>
      <div className='md:flex hidden items-center gap-5 text-gray-500'>
        <div className='flex items-center gap-5'>
          {user && (
            <>
              <button>
                {isEducator ? 'Educator Dashboard' : 'Become Educator'}
              </button>
              | <Link href='/my-enrollments'>My Enrollments</Link>
            </>
          )}
        </div>
        {user ? (
          <button>YD</button>
        ) : (
          <button className='bg-blue-600 text-white px-5 py-2 rounded-full'>
            Create Account
          </button>
        )}
      </div>
      {/* For Phone Screens */}
      <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
        <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs'>
          <button>
            {isEducator ? 'Educator Dashboard' : 'Become Educator'}
          </button>
          | {user && <Link href='/my-enrollments'>My Enrollments</Link>}
        </div>
        {user ? (
          <button>YD</button>
        ) : (
          <button>
            <Image src={assets.user_icon} alt='' />
          </button>
        )}
      </div>
    </div>
  );
}
