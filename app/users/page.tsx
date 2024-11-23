'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Sidebar } from '@/components/sidebar'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { useGetUsersQuery } from '@/components/features/app/userSlide'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'

// This is mock data. In a real application, you'd fetch this from an API.

function Users () {
  const [currentPage, setCurrentPage] = useState(1)
  const {
    data
    // isLoading,
    // isSuccess,
    // isError,
    // error,
  } = useGetUsersQuery({})
  const usersPerPage = 10
  const totalPages = Math.ceil(data?.data?.totalUsers / usersPerPage)

  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  const currentUsers = data?.data?.users.slice(
    indexOfFirstUser,
    indexOfLastUser
  )

  // const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  console.log(data)

  function paginate(pageNumber: number): void {
    setCurrentPage(pageNumber)
  }

  return (
    <div className='flex min-h-screen'>
      <Sidebar />
      <div className='flex-1 space-y-8 p-8 pt-6'>
        <div className='flex items-start justify-start flex-col gap-4'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-700'>
            Users
          </h2>
          <p className='text-md text-gray-500'>Manage users on Yawa here</p>
        </div>

        <div className='rounded-md border'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='w-1/8 text-left text-md font-bold text-gray-700'>
                  Profile
                </TableHead>
                <TableHead className='w-1/8 text-left text-md font-bold text-gray-700'>
                  Full Name
                </TableHead>
                <TableHead className='w-1/8 text-left text-md font-bold text-gray-700'>
                  Email
                </TableHead>
                <TableHead className='w-1/8 text-left text-md font-bold text-gray-700'>
                  Phone Number
                </TableHead>
                <TableHead className='w-1/8 text-left text-md font-bold text-gray-700'>
                  State
                </TableHead>
                <TableHead className='w-1/8 text-left text-md font-bold text-gray-700'>
                  LGA
                </TableHead>
                <TableHead className='w-1/8 text-left text-md font-bold text-gray-700'>
                  Safety Circle
                </TableHead>
                <TableHead className='w-1/8 text-left text-md font-bold text-gray-700'>
                  Created At
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentUsers?.map((user: any, index: number) => (
                <TableRow key={user.id || index}>
                  <TableCell>
                    <Image
                      src={user?.picture || '/path/to/placeholder/image.png'}
                      alt={`${user?.name}'s profile`}
                      className='rounded-full w-10 h-10'
                      width={30}
                      height={30}
                    />
                  </TableCell>
                  <TableCell className='text-sm text-gray-500 capitalize'>
                    {user?.name}
                  </TableCell>
                  <TableCell className='text-sm text-gray-500'>
                    {user?.email}
                  </TableCell>
                  <TableCell className='text-sm text-gray-500'>
                    {user?.phoneNumber}
                  </TableCell>
                  <TableCell className='text-sm text-gray-500'>
                    {user?.state}
                  </TableCell>
                  <TableCell className='text-sm text-gray-500'>
                    {user?.lga}
                  </TableCell>
                  <TableCell className='text-sm text-gray-500'>
                    {user?.safetyCircle}
                  </TableCell>
                  <TableCell className='text-sm text-gray-500'>
                    {new Date(user.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={() => paginate(Math.max(1, currentPage - 1))} size={undefined} />
            </PaginationItem>
            {[(totalPages)].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink onClick={() => paginate(index + 1)} isActive={currentPage === index + 1} size={undefined}>
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext onClick={() => paginate(Math.min(totalPages, currentPage + 1))} size={undefined} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}

export default Users
