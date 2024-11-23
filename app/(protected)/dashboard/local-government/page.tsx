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
import { responders } from '@/data/data'
import React from 'react'
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"
import { useCreatestateMutation } from "@/components/features/app/stateApi"
import { useDispatch } from "react-redux"
import { Pagination } from "@/components/ui/pagination"

function Responders() {
  const [currentPage, setCurrentPage] = useState(1)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const usersPerPage = 5
  const totalPages = Math.ceil(responders.length / usersPerPage)

      // const indexOfLastUser = currentPage * usersPerPage
  // const indexOfFirstUser = indexOfLastUser - usersPerPage
  const currentUsers = responders.slice(0, usersPerPage)
  const { toast } = useToast()
  const dispatch = useDispatch()
  const [createState, { isLoading, isError }] = useCreatestateMutation()

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const handleInvite = async () => {
    try {
      // await createState({ name, email }).unwrap()
      // toast({
      //   title: "State Invited",
      //   description: "State invited successfully",
      // })
      setName('')
      setEmail('')
    } catch (error) {
      console.log('Failed to invite state:', error)
    }
  }

  
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
              <button className="bg-[#03BDE9] text-white px-4 py-2 rounded-md">Invite a LGA</button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                  <DialogTitle className="text-lg font-bold text-gray-700">Invite a LGA</DialogTitle>
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
                      type='text'
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
                  <button type="submit" onClick={handleInvite} className="bg-[#03BDE9] text-white px-4 py-2 rounded-md" disabled={isLoading}>{isLoading ? 'Inviting...' : 'Invite'}</button>
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
                <TableHead className="w-1/8 text-left text-md font-bold text-gray-700">Full Name</TableHead>
                <TableHead className="w-1/8 text-left text-md font-bold text-gray-700">Email</TableHead>
                <TableHead className="w-1/8 text-left text-md font-bold text-gray-700">Phone Number</TableHead>
                <TableHead className="w-1/8 text-left text-md font-bold text-gray-700">State</TableHead>
                <TableHead className="w-1/8 text-left text-md font-bold text-gray-700">LGA</TableHead>
                <TableHead className="w-1/8 text-left text-md font-bold text-gray-700">Safety Circle</TableHead>
                <TableHead className="w-1/8 text-left text-md font-bold text-gray-700">Created At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <Image src={user.image} alt={`${user.name}'s profile`} className="h-10 w-10 rounded-full" width={50} height={50} />
                  </TableCell>
                  <TableCell className="text-sm text-gray-500">{user.name}</TableCell>
                  <TableCell className="text-sm text-gray-500">{user.email}</TableCell>
                  <TableCell className="text-sm text-gray-500">{user.phone}</TableCell>
                  <TableCell className="text-sm text-gray-500">{user.state}</TableCell>
                  <TableCell className="text-sm text-gray-500">{user.lga}</TableCell>
                  <TableCell className="text-sm text-gray-500">{user.safetyCircle}</TableCell>
                  <TableCell className="text-sm text-gray-500">{user.createdAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <Pagination>
          {Array.from({ length: totalPages }, (_, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>{index + 1}</button>
          ))}
        </Pagination>
      </div>
    </>
  )
}

export default Responders