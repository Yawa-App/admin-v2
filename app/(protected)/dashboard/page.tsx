'use client'

import {
  Users,
  Shield,
  Users2,
  AlertTriangle,
  Bell,
  Building,
  LifeBuoy,
  MapPinHouse
} from 'lucide-react'
import { StatCard } from '@/components/stat-card'
import {
  RegisteredStatesChart,
  SituationalReportChart,
  TopReportsChart,
  TopRespondersChart,
  TransactionHistoryChart
} from '@/components/charts'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export default function Dashboard () {
  return (
    <>
      {/* <Sidebar /> */}
      <div className='flex-1 space-y-8 p-8 pt-6'>
        <div className='flex items-center justify-between'>
          <div>
            <h2 className='text-3xl font-bold tracking-tight text-gray-700'>
              Welcome Edward 👋
            </h2>
            <p className='text-gray-700 capitalize'>Super admin</p>
          </div>

          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-gray-400 p-2'>
              <Bell className='h-5 w-5' />
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className='h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center'>
                  <p className='text-white text-sm font-bold'>ET</p>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='text-gray-700 mr-4 bg-white'>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Sign Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className='grid gap-4 md:grid-cols-3 '>
          <StatCard
            icon={<Users className='h-6 w-6 text-blue-500' />}
            value='10'
            label='Registered Users'
          />
          <StatCard
            icon={<Shield className='h-6 w-6 text-blue-500' />}
            value='2'
            label='Safety Circles'
          />
          <StatCard
            icon={<Users2 className='h-6 w-6 text-blue-500' />}
            value='12'
            label='Sub Admins'
          />
          <StatCard
            icon={<AlertTriangle className='h-6 w-6 text-blue-500' />}
            value='943.25k'
            label='Situational Reports'
          />
          <StatCard
            icon={<Bell className='h-6 w-6 text-blue-500' />}
            value='1.25k'
            label='SOS Prompts'
          />
          <StatCard
            icon={<Building className='h-6 w-6 text-blue-500' />}
            value='5'
            label='States'
          />
          <StatCard
            icon={<MapPinHouse className="h-6 w-6 text-blue-500" />}
            value="25"
            label="LGAs"
          />
          <StatCard
            icon={<Building className='h-6 w-6 text-blue-500' />}
            value='73'
            label='Agencies'
          />
          <StatCard
            icon={<LifeBuoy className="h-6 w-6 text-blue-500" />}
            value="104"
            label="Responders"
          />
        </div>
        <div className='grid gap-4 md:grid-cols-3'>
          <SituationalReportChart />
          <TransactionHistoryChart />
        </div>
        <div className='grid gap-4 md:grid-cols-2'>
          <TopReportsChart />
          <RegisteredStatesChart />
        </div>
        <div className='grid gap-4 md:grid-cols-2'>
          <TopRespondersChart />
        </div>
      </div>
    </>
  )
}
