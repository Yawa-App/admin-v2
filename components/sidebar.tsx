"use client";
import {
  Home,
  Users,
  Shield,
  MapPin,
  Building2,
  Radio,
  Users2,
  AirplayIcon as Broadcast,
  Settings,
  LogOut,
  BadgeInfo,
  Blocks,
} from "lucide-react";
import Link from "next/link";
import { cn } from "../lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

export function Sidebar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const pathname = usePathname();
  const router = useRouter();
  const isActive = (path: string) => pathname === path;

  const handleLogout = useCallback(() => {
    // Remove the auth token
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    router.push("/auth/login");
  }, [router]);

  return (
    <div
      className={cn(
        "pb-12 min-h-screen w-60 border-r bg-white",
        className || ""
      )}
    >
      <div className="space-y-6 py-4">
        {/* Logo */}
        <div className="px-4 py-2">
          <Link href="/" className="flex items-center">
            <h2 className="text-4xl font-bold text-gray-700">YAWA</h2>
          </Link>
        </div>

        {/* Dashboard */}
        <div className="px-3 py-2">
          <div className="space-y-3">
            <Link
              href="/dashboard"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-none
                  ${
                    isActive("/dashboard")
                      ? "bg-[#03bde914] text-[#03BDE9]"
                      : "text-gray-500"
                  } 
                  hover:text-gray-900`}
            >
              <Home className="h-4 w-4" />
              <span className="text-md font-medium">Overview</span>
            </Link>
            <Link
              href="/dashboard/users"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-none 
                  ${
                    isActive("/dashboard/users")
                      ? "bg-[#03bde914] text-[#03BDE9]"
                      : "text-gray-500"
                  } 
                  hover:text-gray-900`}
            >
              <Users className="h-4 w-4" />
              <span className="text-md font-medium">Users</span>
            </Link>
            <Link
              href="/dashboard/safety-circles"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-none 
                  ${
                    isActive("/dashboard/safety-circles")
                      ? "bg-[#03bde914] text-[#03BDE9]"
                      : "text-gray-500"
                  } 
                  hover:text-gray-900`}
            >
              <Shield className="h-4 w-4" />
              <span className="text-md font-medium">Circles</span>
            </Link>
            <Link
              href="/dashboard/states"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-none 
                  ${
                    isActive("/dashboard/states")
                      ? "bg-[#03bde914] text-[#03BDE9]"
                      : "text-gray-500"
                  } 
                  hover:text-gray-900`}
            >
              <MapPin className="h-4 w-4" />
              <span className="text-md font-medium">States</span>
            </Link>
            <Link
              href="/dashboard/agencies"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-none 
                  ${
                    isActive("/dashboard/agencies")
                      ? "bg-[#03bde914] text-[#03BDE9]"
                      : "text-gray-500"
                  } 
                  hover:text-gray-900`}
            >
              <Building2 className="h-4 w-4" />
              <span className="text-md font-medium">Agency</span>
            </Link>
            <Link
              href="/dashboard/local-government"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-none 
                  ${
                    isActive("/dashboard/local-government")
                      ? "bg-[#03bde914] text-[#03BDE9]"
                      : "text-gray-500"
                  } 
                  hover:text-gray-900`}
            >
              <Radio className="h-4 w-4" />
              <span className="text-md font-medium">LGAs</span>
            </Link>
            <Link
              href="/dashboard/admins"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-none 
                  ${
                    isActive("/dashboard/admins")
                      ? "bg-[#03bde914] text-[#03BDE9]"
                      : "text-gray-500"
                  } 
                  hover:text-gray-900`}
            >
              <Users2 className="h-4 w-4" />
              <span className="text-md font-medium">Administrators</span>
            </Link>
            {/* <Link
              href="#"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-none 
                  ${
                    isActive("#")
                      ? "bg-[#03bde914] text-[#03BDE9]"
                      : "text-gray-500"
                  } 
                  hover:text-gray-900`}
            >
              <Broadcast className="h-4 w-4" />
              <span className="text-md font-medium">Broadcast</span>
            </Link> */}
            <Link
              href="/dashboard/customise"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-none 
                  ${
                    isActive("/dashboard/customise")
                      ? "bg-[#03bde914] text-[#03BDE9]"
                      : "text-gray-500"
                  } 
                  hover:text-gray-900`}
            >
              <Blocks className="h-4 w-4" />
              <span className="text-md font-medium">Customise</span>
            </Link>
            <Link
              href="/dashboard/support"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-none 
                  ${
                    isActive("/dashboard/support")
                      ? "bg-[#03bde914] text-[#03BDE9]"
                      : "text-gray-500"
                  } 
                  hover:text-gray-900`}
            >
              <BadgeInfo className="h-4 w-4" />
              <span className="text-md font-medium">Support</span>
            </Link>
            <Link
              href="/dashboard/settings"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-none 
                  ${
                    isActive("/dashboard/settings")
                      ? "bg-[#03bde914] text-[#03BDE9]"
                      : "text-gray-500"
                  } 
                  hover:text-gray-900`}
            >
              <Settings className="h-4 w-4" />
              <span className="text-md font-medium">Settings</span>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="px-3 py-2">
          <div className="space-y-3">
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-red-500 transition-none hover:text-red-900"
            >
              <LogOut className="h-4 w-4" />
              <span className="text-md font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
