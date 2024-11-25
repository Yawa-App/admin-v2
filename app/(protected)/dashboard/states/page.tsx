"use client"

import Image from "next/image"
import React from 'react'
import { Sidebar } from "@/components/sidebar"
// import { useToast } from "@/components/ui/use-toast"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useDispatch } from 'react-redux'
import { useCreatestateMutation, useGetAllStatesQuery } from '@/components/features/app/stateApi'
import { useState } from 'react'
import { useToast } from "@/hooks/use-toast"
import profile from '../../../../public/coatofarm.jpg'
import { Pagination, PaginationLink, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { useRouter } from 'next/navigation';

function States() {
  const { toast } = useToast()
  const [currentPage, setCurrentPage] = useState(1)
  const router = useRouter();
  const {
    data,
    // isLoading,
    // isError,
  } = useGetAllStatesQuery({})

  const usersPerPage = 20
  const totalPages = Math.ceil(data?.data?.totalStates / usersPerPage)
  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage

  // Update currentUsers to use the fetched data
  const currentUsers = data?.states.slice(0, usersPerPage) || []

  const dispatch = useDispatch()
  const [createState, { isLoading, isError }] = useCreatestateMutation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleInvite = async () => {
    try {
      await createState({ name, email }).unwrap()
      toast({
        title: "Invite sent!",
        description: "State invited successfully", 
        style: {
          background: '#000',
          color: '#fff',
      }
      })
      setName('')
      setEmail('')
    } catch (error) {
      console.log('Failed to invite state:', error)
    }
  }

  function paginate(pageNumber: number): void {
    setCurrentPage(pageNumber)
  }

  return (
    <>
      {/* <Sidebar /> */}
      <div className="flex-1 space-y-8 p-8 pt-6">
        <div className="flex items-center justify-between ">
          <div className="flex items-start justify-start flex-col gap-4">
            <h2 className="text-3xl font-bold tracking-tight text-gray-700">States</h2>
            <p className="text-md text-gray-500">Manage states on Yawa here</p>
          </div>

          <>
            <Dialog>
              <DialogTrigger asChild>
                <button className="bg-[#03BDE9] text-white px-4 py-2 rounded-md">Invite a State</button>
              </DialogTrigger>

              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="text-lg font-bold text-gray-700">Invite a State</DialogTitle>
                  <DialogDescription className="text-sm/6 text-gray-500">
                    Make changes to your profile here. Click save when you&apos;re done.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4 py-4">
                  <div className="flex justify-start items-center flex-col gap-4 text-left">
                    <label className="text-sm font-medium text-gray-700 self-start">
                      Name
                    </label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="col-span-3 text-sm/6 text-gray-500"
                    />
                  </div>
                  <div className="flex justify-start items-center flex-col gap-4 text-left">
                    <label htmlFor="email" className="text-right text-sm/6 font-medium text-gray-700 self-start">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="col-span-3 text-sm/6 text-gray-500"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <button type="button" onClick={handleInvite} className="bg-[#03BDE9] text-white px-4 py-2 rounded-md" disabled={isLoading}>
                    {isLoading ? 'Inviting...' : 'Invite'}
                  </button>
                  {isError && <p className="text-red-500">Failed to invite state. Please try again.</p>}
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/8 text-left text-md font-bold text-gray-700">Profile</TableHead>
                <TableHead className="w-1/8 text-left text-md font-bold text-gray-700">State Name</TableHead>
                <TableHead className="w-1/8 text-left text-md font-bold text-gray-700">Email</TableHead>
                <TableHead className="w-1/8 text-left text-md font-bold text-gray-700">Created At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentUsers.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center text-gray-500">
                    No states found.
                  </TableCell>
                </TableRow>
              ) : (
                currentUsers.map((user: {
                _id: string;
                image: string;
                name: string;
                email: string;
                createdAt: string;
              }) => (
                <TableRow key={user._id} role='link' 
                className='cursor-pointer'
                onClick={() => router.push(`/dashboard/states/q?state=${user._id}`)}>
                  <TableCell>
                    <Image src={user?.image || profile } alt={`${user.name}'s profile`} className="rounded-full" width={50} height={50} />
                  </TableCell>
                  <TableCell className="text-sm text-gray-500 capitalize">{user.name}</TableCell>
                  <TableCell className="text-sm text-gray-500">{user.email}</TableCell>
                  <TableCell className="text-sm text-gray-500">
                    {new Date(user.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </TableCell>
                </TableRow>
              )))}
            </TableBody>
          </Table>
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious className='text-gray-800 px-2 py-1 mx-2 cursor-pointer' onClick={() => paginate(Math.max(1, currentPage - 1))} size={undefined} />
            </PaginationItem>
            {[(totalPages)].map((_, index) => (
              <PaginationItem key={index} className=' text-gray-800 px-2 py-1 rounded-md mx-2'>
                <PaginationLink onClick={() => paginate(index + 1)} isActive={currentPage === index + 1} size={undefined}>
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext className='text-gray-800 px-2 py-1 mx-2 cursor-pointer' onClick={() => paginate(Math.min(totalPages, currentPage + 1))} size={undefined} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  )
}

export default States
