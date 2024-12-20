"use client"

import Image from "next/image"
import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Pagination, PaginationLink, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"

// This is mock data. In a real application, you'd fetch this from an API.
const users = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "+1234567890", safetyCircle: "Family", image: "/profile.png?height=40&width=40", createdAt: "2024-01-01", state: "Lagos", lga: "Ikeja" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "+1987654321", safetyCircle: "Friends", image: "/profile.png?height=40&width=40", createdAt: "2024-01-02", state: "Lagos", lga: "Ikeja" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", phone: "+1122334455", safetyCircle: "Work", image: "/profile.png?height=40&width=40", createdAt: "2024-01-03", state: "Lagos", lga: "Ikeja" },
  { id: 4, name: "Bob Williams", email: "bob@example.com", phone: "+1555666777", safetyCircle: "Neighbors", image: "/profile.png?height=40&width=40", createdAt: "2024-01-04", state: "Lagos", lga: "Ikeja" },
  { id: 5, name: "Charlie Brown", email: "charlie@example.com", phone: "+1999888777", safetyCircle: "School", image: "/profile.png?height=40&width=40", createdAt: "2024-01-05", state: "Lagos", lga: "Ikeja" },
  { id: 6, name: "Diana Prince", email: "diana@example.com", phone: "+1777888999", safetyCircle: "Family", image: "/profile.png?height=40&width=40", createdAt: "2024-01-06", state: "Lagos", lga: "Ikeja" },
  { id: 7, name: "Ethan Hunt", email: "ethan@example.com", phone: "+1444555666", safetyCircle: "Work", image: "/profile.png?height=40&width=40", createdAt: "2024-01-07", state: "Lagos", lga: "Ikeja" },
  { id: 8, name: "Fiona Apple", email: "fiona@example.com", phone: "+1333222111", safetyCircle: "Friends", image: "/profile.png?height=40&width=40", createdAt: "2024-01-08", state: "Lagos", lga: "Ikeja" },
  { id: 9, name: "George Lucas", email: "george@example.com", phone: "+1111222333", safetyCircle: "Work", image: "/profile.png?height=40&width=40", createdAt: "2024-01-09", state: "Lagos", lga: "Ikeja" },
  { id: 10, name: "Hannah Montana", email: "hannah@example.com", phone: "+1888999000", safetyCircle: "School", image: "/profile.png?height=40&width=40", createdAt: "2024-01-10", state: "Lagos", lga: "Ikeja" },
  // Add more users as needed...
]



function Circles() {
  const [currentPage, setCurrentPage] = useState(1)
  const usersPerPage = 10
  const totalPages = Math.ceil(users.length / usersPerPage)

  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <>
      {/* <Sidebar /> */}
      <div className="flex-1 space-y-8 p-8 pt-6">
        <div className="flex items-start justify-start flex-col gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-700">Circles</h2>
          <p className="text-md text-gray-500">Manage circles on Yawa here</p>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/8 text-left text-md font-bold text-gray-700">Profile</TableHead>
                <TableHead className="w-1/8 text-left text-md font-bold text-gray-700">Circle Name</TableHead>
                <TableHead className="w-1/8 text-left text-md font-bold text-gray-700">Admin</TableHead>
                <TableHead className="w-1/8 text-left text-md font-bold text-gray-700">No of Members</TableHead>
                <TableHead className="w-1/8 text-left text-md font-bold text-gray-700">Created At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <Image src={user.image} alt={`${user.name}'s profile`} width={30} height={30} className="h-10 w-10 rounded-full" />
                  </TableCell>
                  <TableCell className="text-sm text-gray-500">{user.name}</TableCell>
                  <TableCell className="text-sm text-gray-500">{user.email}</TableCell>
                  <TableCell className="text-sm text-gray-500">{user.phone}</TableCell>
                  <TableCell className="text-sm text-gray-500">{user.createdAt}</TableCell>
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

export default Circles
