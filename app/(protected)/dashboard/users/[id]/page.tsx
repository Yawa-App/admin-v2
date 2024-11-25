
'use client'

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useGetUserQuery } from '@/components/features/app/userSlide';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Header, SubHeader } from '@/components/typography';

function SingleUser() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [userId, setUserId] = useState<string | null>(null); // State to hold userId
  
    useEffect(() => {
      const id = searchParams.get('user'); // Get user ID from search params
      if (id) {
        setUserId(id); // Set userId state if available
      }
    }, [searchParams]); // Run effect when searchParams change
  
    const {
      data: userData,
      isLoading,
      isError,
      error,
    } = useGetUserQuery(userId, { skip: !userId }); // Skip query if userId is not available

    console.log(userId, userData)
  
    if (!userId) return <div>No user ID provided.</div>; // Handle case where userId is null
    if (isLoading) return <div>Loading...</div>;
    // if (isError) return <div>Error: {error.data.message}</div>;
  

  const user = userData?.data;

  return (
    <div className="flex-1 space-y-8 p-8 pt-6 text-gray-800">
        <div className='flex justify-start items-center gap-4 flex-row mt-4'>
            <ArrowLeft onClick={() => router.back()} className='cursor-pointer' />
            <Header title='User Details' />
        </div>
      <div className="flex items-center border-gray-300 border-[1px] rounded-lg p-4 ">
        {user?.picture ? (
          <img src={user?.picture} alt={user?.name} className="w-16 h-16 rounded-full" />
        ) : (
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
            <span>{user?.state?.name.charAt(0)}</span>
          </div>
        )}
        <div className="ml-4">
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p>{user?.email}</p>
          <p>{user?.phoneNumber}</p>
        </div>
      </div>

      <div className='text-gray-800 border-gray-300 border-[1px] rounded-lg p-4'>
        <SubHeader text='Safety Circle' />
        <ul>
          {user.safetyCircles.map((circle: string) => (
            <li key={circle}>{circle}</li>
          ))}
        </ul>
      </div>

      <div className='border-gray-300 border-[1px] rounded-lg p-4 '>
        <SubHeader text='Emergency Contacts' />
        <ul>
          {user.emergencyContacts.map((contact: any) => (
            <li key={contact._id}>{contact.phoneNumber}</li>
          ))}
        </ul>
      </div>

      {/* ====== post ======== */}
      <div className='border-gray-300 border-[1px] rounded-lg p-4'>
        <SubHeader text='Reports' />
        {/* {user.posts.length > 0 ? (
          user.posts.map(post => (
            <div key={post._id} className="border p-4 mb-4">
              <p>{post.content}</p>
              {post.media && <img src={post.media} alt="Post media" />}
              <p>{post.location.state}, {post.location.localGovernment}</p>
            </div>
          ))
        ) : (
          <p>No posts available.</p>
        )} */}
      </div>
    </div>
  );
}

export default SingleUser;