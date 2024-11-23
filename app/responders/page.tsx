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
import { Sidebar } from '@/components/sidebar'


function Responders() {
  // const [currentPage, setCurrentPage] = useState(1)
  const usersPerPage = 5
  // const totalPages = Math.ceil(responders.length / usersPerPage)

      // const indexOfLastUser = currentPage * usersPerPage
  // const indexOfFirstUser = indexOfLastUser - usersPerPage
  const currentUsers = responders.slice(0, usersPerPage)

  // const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
  
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 space-y-8 p-8 pt-6">

      <div className="flex items-center justify-between ">
        <div className="flex items-start justify-start flex-col gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-700">First Responders</h2>
          <p className="text-md text-gray-500">Manage responders on Yawa here</p>
        </div>

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

      </div>
    </div>
  )
}

export default Responders