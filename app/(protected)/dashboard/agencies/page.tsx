"use client"

import React, { useState } from 'react'
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
  import profile from '../../../../public/coatofarm.jpg'
  import { Input } from "@/components/ui/input"
  import { useCreateagencyMutation, useGetAllAgencyQuery } from '@/components/features/app/agencyApi'
import { useToast } from '@/hooks/use-toast'
import { useGetcategoriesQuery } from '@/components/features/app/authSlide';
import { Pagination, PaginationPrevious, PaginationLink, PaginationNext, PaginationContent, PaginationItem } from '@/components/ui/pagination';
import { useRouter } from 'next/navigation';
import Image from 'next/image'


const MultiSelect = ({ 
  options, 
  selectedValues, 
  onChange 
}: {
  options: Array<{ _id: string, name: string }>,
  selectedValues: string[],
  onChange: (values: string[]) => void
}) => {
  const handleChange = (value: string) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter((id: string) => id !== value)); // Remove value if already selected
    } else {
      onChange([...selectedValues, value]); // Add value if not selected
    }
  };

  return (
    <div className="relative">
      <div className="flex gap-2 flex-wrap">
        {options.map((option) => (
          <label key={option._id} className="flex items-center p-2 text-gray-800">
            <input
              type="checkbox"
              value={option._id}
              checked={selectedValues.includes(option._id)}
              onChange={() => handleChange(option._id)}
              className="mr-2 text-gray-800"
            />
            {option.name}
          </label>
        ))}
      </div>
    </div>
  );
};

function Agency() {
  const [currentPage, setCurrentPage] = useState(1)
  const { toast } = useToast()
  const router = useRouter();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [createAgency, { isLoading }] = useCreateagencyMutation()
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<string[]>([]);


  const {
    data
    // isLoading,
    // isSuccess,
    // isError,
    // error,
  } = useGetcategoriesQuery({})
  const {
    data: agencyData
    // isLoading,
    // isSuccess,
    // isError,
    // error,
  } = useGetAllAgencyQuery({})

  const usersPerPage = 10
  // const currentUsers = agencies.slice(0, usersPerPage)
  const currentAgency = agencyData?.agencies.slice(0, usersPerPage) || []
  const totalPages = Math.ceil(agencyData?.agencies?.totalAgencies / usersPerPage)
  const indexOfLastUser = currentPage * usersPerPage
  // const indexOfFirstUser = indexOfLastUser - usersPerPage

  function paginate(pageNumber: number): void {
    setCurrentPage(pageNumber)
  }
  const handleInvite = async () => {
    try {
      await createAgency({ name, email, category: selectedCategoryIds }).unwrap(); // Include categoryIds
      toast({
        title: "Agency Invited",
        description: "Agency invited successfully",
      });
      setName('');
      setEmail('');
      setSelectedCategoryIds([]); // Reset selected categories
    } catch (error) {
      toast({
        title: `${error}`,
        description: "Failed to invite state.",
      })
      console.log('Failed to invite state:', error);
    }
  };


  return (
    <>
      {/* <Sidebar /> */}
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
              <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                  <DialogTitle className="text-lg font-bold text-gray-700">Invite an Agency</DialogTitle>
                  <DialogDescription className="text-sm/6 text-gray-500">
                  Make sure you select a category when sending an invite. Click send when you&apos;re done.
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
                  <div className="flex justify-start items-center flex-col gap-4 text-left">
                  <label htmlFor="email" className="text-right text-sm/6 font-medium text-gray-700 self-start">
                        Categories
                    </label>
                  <MultiSelect
                    options={data?.data || []}
                    selectedValues={selectedCategoryIds}
                    onChange={setSelectedCategoryIds}
                  />
                  </div>
              </div>
              <DialogFooter>
                  <button type="submit" onClick={handleInvite} className="bg-[#03BDE9] text-white px-4 py-2 rounded-md" disabled={isLoading}>{isLoading ? 'Inviting...' : 'Send Invite'}</button>
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
                {/* <TableHead className="w-1/8 text-left text-md font-bold text-gray-700">Phone Number</TableHead> */}
                <TableHead className="w-1/8 text-left text-md font-bold text-gray-700">State</TableHead>
                <TableHead className="w-1/8 text-left text-md font-bold text-gray-700">LGA</TableHead>
                <TableHead className="w-1/8 text-left text-md font-bold text-gray-700">Created At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentAgency.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center text-gray-500">
                    No agencies found.
                  </TableCell>
                </TableRow>
              ) : (
                currentAgency.map((agency: any, index: number) => (
                  <TableRow key={agency._id || index}
                  role='link'
                  className='cursor-pointer'
                  onClick={() => router.push(`/dashboard/agencies/q?agency=${agency?._id}`)}
                  >
                    <TableCell>
                      <Image src={profile} alt={`${agency.name}'s profile`} className="h-10 w-10 rounded-full" />
                    </TableCell>
                    <TableCell className="text-sm text-gray-500 capitalize">{agency.name}</TableCell>
                    <TableCell className="text-sm text-gray-500">{agency.email}</TableCell>
                    {/* <TableCell className="text-sm text-gray-500">{agency.phone}</TableCell> */}
                    <TableCell className="text-sm text-gray-500">{agency.state}</TableCell>
                    <TableCell className="text-sm text-gray-500">{agency.lga}</TableCell>
                    <TableCell className="text-sm text-gray-500">
                      {new Date(agency.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </TableCell>
                  </TableRow>
                ))
              )}
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

export default Agency
