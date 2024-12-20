"use client"

import Image from "next/image"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import profile from '../../../../public/coatofarm.jpg'
import { useLocals } from "../../../../components/hooks/useLocals";
import React, { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import { useGetAllLocalGovernmentQuery } from "@/components/features/app/lgaApi"
import { useDispatch } from "react-redux"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import states from '@/data/states.json'


function Responders() {
  const [currentPage, setCurrentPage] = useState(1)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [state, setState] = useState('')
  const usersPerPage = 20
  const [lgas, setLgas] = useState<string[]>([]);
  
  const {
    data,  
    isLoading,
  } = useGetAllLocalGovernmentQuery({});
  
  const totalPages = Math.ceil(data?.data?.locals / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  console.log(data)
  const currentUsers = data?.locals?.slice(0, usersPerPage)
  // const { toast } = useToast()
  // const dispatch = useDispatch()

  const { handleInviteLga } = useLocals();
  // const [createLocalGovernment, { isLoading, isError }] = useCreateLocalGovernmentMutation()

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const handleInvite = async (event: React.FormEvent) =>{
    event.preventDefault()
    await handleInviteLga(name, email, state)
    setName('')
    setState('')
    setEmail('')
  }


  const handleStateChange = async (selectedState: string) => {
    setState(selectedState);
    const selectedStateData = states.find(state => state.name === selectedState);
    if (selectedStateData) {
        setLgas(selectedStateData.local_governments);
    } else {
        setLgas([]);
    }
  };


  
  return (
    <>
      {/* <Sidebar /> */}
      <div className="flex-1 space-y-8 p-8 pt-6">

        <div className="flex items-center justify-between ">
          <div className="flex items-start justify-start flex-col gap-4">
            <h2 className="text-3xl font-bold tracking-tight text-gray-700">Local Governments</h2>
            <p className="text-md text-gray-500">Manage local governments on Yawa here</p>
          </div>

          <>
            <Dialog>
                <DialogTrigger asChild>
                <button className="bg-[#03BDE9] text-white px-4 py-2 rounded-none">Invite a LGA</button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                    <DialogTitle className="text-lg font-bold text-gray-700">Invite a LGA</DialogTitle>
                    <DialogDescription className="text-sm/6 text-gray-500">
                    Make sure you input all details before sending an invite. Click send when you&apos;re done.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4 py-4">

                  <div className="flex justify-start items-center flex-col gap-4 text-left">
                    <label className="text-sm font-medium text-gray-700 self-start">
                        State
                    </label>
                    <select
                      id="state"
                      value={state}
                      onChange={(e) => handleStateChange(e.target.value)} // Updated to call handleStateChange
                      className="col-span-3 text-sm/6 text-gray-500 p-3 w-[100%] self-start border-gray-300 border rounded"
                    >
                      <option value="">Select a state</option>
                      {states.map((state, index) => (
                        <option key={index} value={state.name}>
                          {state.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex justify-start items-center flex-col gap-4 text-left">
                    <label className="text-sm font-medium text-gray-700 self-start">
                        Local Government Area
                    </label>
                    <select
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="col-span-3 text-sm/6 text-gray-500 p-3 w-[100%] self-start border-gray-300 border rounded"
                    >
                      <option value="">Select an LGA</option>
                      {lgas.map((lga, index) => (
                        <option key={index} value={lga}>
                          {lga}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex justify-start items-center flex-col gap-4 text-left">
                    <label htmlFor="email" className="text-right text-sm/6 font-medium text-gray-700 self-start">
                        Email Address
                    </label>
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        placeholder="example@gov.ng"
                        onChange={(e) => setEmail(e.target.value)}
                        className="col-span-3 text-sm/6 text-gray-500"
                    />
                  </div>
                </div>
                <DialogFooter>
                    <button type="submit" onClick={handleInvite} className="bg-[#03BDE9] text-white px-4 py-2 rounded-none" disabled={isLoading}>{isLoading ? 'Inviting...' : 'Send Invite'}</button>
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
                <TableHead className="w-1/8 text-left text-md font-bold text-gray-700">Name</TableHead>
                <TableHead className="w-1/8 text-left text-md font-bold text-gray-700">Email</TableHead>
                <TableHead className="w-1/8 text-left text-md font-bold text-gray-700">State</TableHead>
                <TableHead className="w-1/8 text-left text-md font-bold text-gray-700">Created At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentUsers?.map((user: {
                _id: string;
                image: string;
                name: string;
                email: string;
                createdAt: string;
                state: string;
              }) => (
                <TableRow key={user?._id}>
                  <TableCell>
                    <Image src={user?.image || profile} alt={`${user.name}'s profile`} className="h-10 w-10 rounded-full" width={50} height={50} />
                  </TableCell>
                  <TableCell className="text-sm text-gray-500 capitalize">{user?.name}</TableCell>
                  <TableCell className="text-sm text-gray-500">{user?.email}</TableCell>

                  <TableCell className="text-sm text-gray-500">{user?.state}</TableCell>
                  <TableCell className="text-sm text-gray-500">{new Date(user.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}</TableCell>
                </TableRow>
              ))}
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

export default Responders
