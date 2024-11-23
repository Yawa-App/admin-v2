"use client"

import React, { useState } from 'react'
import { Sidebar } from "@/components/sidebar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { agencies } from '@/data/data'
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

function Agency() {
  // const [currentPage, setCurrentPage] = useState(1)
  const usersPerPage = 5

  // const indexOfLastUser = currentPage * usersPerPage
  // const indexOfFirstUser = indexOfLastUser - usersPerPage
  const currentUsers = agencies.slice(0, usersPerPage)


  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 space-y-8 p-8 pt-6">

      <div className="flex items-center justify-between ">
        <div className="flex items-start justify-start flex-col gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-700">Agencies</h2>
          <p className="text-md text-gray-500">Manage agencies on Yawa here</p>
        </div>

        <>
            <Dialog>
                <DialogTrigger asChild>
                <button className="bg-[#03BDE9] text-white px-4 py-2 rounded-md">Invite an Agency</button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-lg font-bold text-gray-700">Invite an Agency</DialogTitle>
                    <DialogDescription className="text-sm/6 text-gray-500">
                    Make changes to your profile here. Click save when you&apos;re done.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4 py-4">
                    <div className="flex justify-start items-center flex-col gap-4 text-left">
                    <p className="text-sm font-medium text-gray-700">
                        Name
                    </p>
                    <Input
                        id="name"
                        className="col-span-3 text-sm/6 text-gray-500"
                    />
                    </div>
                    <div className="flex justify-start items-center flex-col gap-4 text-left">
                    <label htmlFor="email" className="text-right text-sm/6 font-medium text-gray-700">
                        Email Address
                    </label>
                    <Input
                        id="email"
                        type="email"
                        className="col-span-3 text-sm/6 text-gray-500"
                    />
                    </div>
                </div>
                <DialogFooter>
                    <button type="submit" className="bg-[#03BDE9] text-white px-4 py-2 rounded-md">Invite</button>
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
                    <img src={user.image} alt={`${user.name}'s profile`} className="h-10 w-10 rounded-full" />
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

      </div>
    </div>
  )
}

export default Agency
