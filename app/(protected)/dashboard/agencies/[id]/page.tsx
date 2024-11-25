'use client'

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Header, SubHeader } from '@/components/typography';
import { useGetAgencyQuery } from '@/components/features/app/agencyApi';

function SingleAgency() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [agencyId, setAgencyId] = useState<string | null>(null); // State to hold userId
  
    useEffect(() => {
      const id = searchParams.get('agency'); // Get user ID from search params
      if (id) {
        setAgencyId(id); // Set userId state if available
      }
    }, [searchParams]); // Run effect when searchParams change
  
    const {
      data: userData,
      isLoading,
      isError,
      error,
    } = useGetAgencyQuery(agencyId, { skip: !agencyId}); // Skip query if userId is not available

    console.log(agencyId, userData)

    const user = userData?.agency;
    const responder = userData?.subAgencies;
  
    if (!agencyId) return <div>No user ID provided.</div>; // Handle case where userId is null
    if (isLoading) return <div>Loading...</div>;
    return (
        <>
            <div className="flex-1 space-y-8 p-8 pt-6 text-gray-800">
                <div className='flex justify-start items-center gap-4 flex-row mt-4'>
                    <ArrowLeft onClick={() => router.back()} className='cursor-pointer' />
                    <Header title='Agency Details' />
                </div>

                <div className="flex items-center justify-between border-gray-300 border-[1px] rounded-lg p-4 text-gray-800">
                    <div className='flex items-center'>
                        {user?.picture ? (
                        <img src={user?.picture} alt={user.name} className="w-16 h-16 rounded-full" />
                        ) : (
                        <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                            <span className='capitalize'>{user?.name.charAt(0)}</span>
                        </div>
                        )}
                        <div className="ml-4">
                        <h2 className="text-xl font-bold text-gray-800 capitalize">{user?.name}</h2>
                            <p className='text-gray-800'>{user?.email}</p>
                            <p className='text-gray-800'>{user?.phoneNumber}</p>
                        </div>
                    </div>
                    <div>
                        <p>Joined: {new Date(user?.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        })}</p>

                    </div>
                </div>

                <div>

                </div>
            </div>
        </>
    )
}

export default SingleAgency;