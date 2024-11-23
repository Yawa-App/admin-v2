// This layout will be used for protected pages
import { Sidebar } from '@/components/sidebar'
import { redirect } from 'next/navigation'

export default function ProtectedLayout({
  children
}: {
  children: React.ReactNode
}) {
  // You can add additional client-side protection here if needed
  return (
    <div className='flex min-h-screen'>
      <Sidebar />
      {children}
    </div>
  )
}