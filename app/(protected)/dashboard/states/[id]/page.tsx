"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/typography";
import { useGetStateQuery } from "@/components/features/app/stateApi";
import Image from "next/image";

function SingleState() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [stateId, setStateId] = useState<string | null>(null); // State to hold userId

  useEffect(() => {
    const id = searchParams.get("state"); // Get user ID from search params
    if (id) {
      setStateId(id); // Set userId state if available
    }
  }, [searchParams]); // Run effect when searchParams change

  const {
    data: userData,
    isLoading,
    //   isError,
    //   error,
  } = useGetStateQuery(stateId, { skip: !stateId }); // Skip query if userId is not available

  console.log(stateId, userData);

  const user = userData?.state;

  if (!stateId) return <div>No user ID provided.</div>; // Handle case where userId is null
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <div className="flex-1 space-y-8 p-8 pt-6 text-gray-800">
        <div className="flex justify-start items-center gap-4 flex-row mt-4">
          <ArrowLeft onClick={() => router.back()} className="cursor-pointer" />
          <Header title="State Details" />
        </div>

        <div className="flex items-center border-gray-300 border-[1px] rounded-lg p-4 text-gray-800">
          {user?.picture ? (
            <Image
              src={user?.picture}
              alt={user.name}
              className="w-16 h-16 rounded-full"
            />
          ) : (
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="capitalize">{user?.name.charAt(0)}</span>
            </div>
          )}
          <div className="ml-4">
            <h2 className="text-xl font-bold text-gray-800 capitalize">
              {user?.name}
            </h2>
            <p className="text-gray-800">{user?.email}</p>
            <p className="text-gray-800">{user?.phoneNumber}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleState;
