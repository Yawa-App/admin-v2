import { Home, Users, Shield, MapPin, Building2, Radio, Users2, AirplayIcon as Broadcast, Settings } from 'lucide-react'
import Link from "next/link"
import { cn } from "../lib/utils"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12 min-h-screen w-60 border-r bg-white", className || "")}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <Link href="/" className="flex items-center">
            <h2 className="text-4xl font-bold text-gray-700">YAWA</h2>
          </Link>
        </div>
        <div className="px-3 py-2">
          <div className="space-y-3">
            <Link
              href="/"
              className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900"
            >
              <Home className="h-4 w-4" />
              <span className="text-md font-medium">Dashboard</span>
            </Link>
            <Link
              href="/users"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
            >
              <Users className="h-4 w-4" />
              <span className="text-md font-medium">User</span>
            </Link>
            <Link
              href="/safety-circles"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
            >
              <Shield className="h-4 w-4" />
              <span className="text-md font-medium">Circles</span>
            </Link>
            <Link
              href="/states"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
            >
              <MapPin className="h-4 w-4" />
              <span className="text-md font-medium">States</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
            >
              <Building2 className="h-4 w-4" />
              <span className="text-md font-medium">Agency</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
            >
              <Radio className="h-4 w-4" />
              <span className="text-md font-medium">First Responders</span>
            </Link>
            <Link
              href="/admins"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
            >
              <Users2 className="h-4 w-4" />
              <span className="text-md font-medium">Administrators</span>
            </Link>
            {/* <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
            >
              <Broadcast className="h-4 w-4" />
              <span className="text-md font-medium">Broadcast</span>
            </Link> */}
            <Link
              href="/settings"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
            >
              <Settings className="h-4 w-4" />
              <span className="text-md font-medium">Settings</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

