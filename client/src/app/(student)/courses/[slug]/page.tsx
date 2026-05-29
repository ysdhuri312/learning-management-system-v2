/** @format */
'use client';

import { useParams } from 'next/navigation';

export default function page() {
  const { slug } = useParams<{ slug: string }>();

  return <div>Course Detail page - {slug}</div>;
}
