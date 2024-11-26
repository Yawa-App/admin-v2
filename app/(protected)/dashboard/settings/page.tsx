"use client"

import { useState } from 'react'
// import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfileSettings() {
  const [user, setUser] = useState({
    name: "Edmund Bassey",
    email: "edmund@example.com",
    phone: "+1234567890",
    bio: "Super admin with a passion for safety and security.",
    notifications: {
      email: true,
      push: false,
      sms: true,
    },
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }))
  }

  const handleNotificationChange = (type: 'email' | 'push' | 'sms') => {
    setUser(prevUser => ({
      ...prevUser,
      notifications: {
        ...prevUser.notifications,
        [type]: !prevUser.notifications[type],
      },
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the updated user data to your backend
    console.log('Updated user data:', user)
    // Show a success message to the user
    alert('Profile updated successfully!')
  }

  return (
    <>
      {/* <Sidebar /> */}
      <div className="flex-1 space-y-8 p-8 pt-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-700">Profile Settings</h2>
          <p className="text-gray-500">Manage your account settings and set email preferences.</p>
        </div>
        <Tabs defaultValue="general" className="space-y-4">
          <TabsList className=" text-gray-700">
            <TabsTrigger value="general ">General</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>

          {/* General */}
          <TabsContent value="general">
            <Card className="shadow">
              <form onSubmit={handleSubmit}>
                <CardHeader>
                  <CardTitle className="text-gray-700">General Information</CardTitle>
                  <CardDescription className="text-gray-500">Update your personal information here.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-gray-700">Full Name</label>
                    <Input
                      id="name"
                      name="name"
                      className="text-gray-500"
                      value={user.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-gray-700">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      className="text-gray-500"
                      value={user.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-gray-700">Phone Number</label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="text-gray-500"
                      value={user.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="bio" className="text-gray-700">Bio</label>
                    <Textarea
                      id="bio"
                      name="bio"
                      value={user.bio}
                      onChange={handleInputChange}
                      className="text-gray-500"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <button type="submit" className="bg-[#03BDE9] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500">Save Changes</button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>

          {/* Password */}
          <TabsContent value="password">
            <Card>
              <form onSubmit={(e) => { e.preventDefault(); alert('Password updated!'); }}>
                <CardHeader>
                  <CardTitle className="text-gray-700">Change Password</CardTitle>
                  <CardDescription className="text-gray-500">Update your password here. We recommend using a strong, unique password.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="current-password" className="text-gray-500">Current Password</label>
                    <Input id="current-password" className="text-gray-500" type="password" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="new-password" className="text-gray-500">New Password</label>
                    <Input id="new-password" className="text-gray-500" type="password" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="confirm-password" className="text-gray-500">Confirm New Password</label>
                    <Input id="confirm-password" className="text-gray-500" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <button type="submit" className="bg-[#03BDE9] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500">Update Password</button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>

          {/* Notifications */}
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle className="text-gray-700">Notification Preferences</CardTitle>
                <CardDescription className="text-gray-500">Manage how you receive notifications.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-gray-700">
                  <label className="text-gray-500" htmlFor="email-notifications">Email Notifications</label>
                  <Switch
                    className="bg-[#03BDE9]"
                    id="email-notifications"
                    
                    checked={user.notifications.email}
                    onCheckedChange={() => handleNotificationChange('email')}
                  />
                </div>
                <div className="flex items-center justify-between text-gray-700">
                  <label className="text-gray-500" htmlFor="push-notifications">Push Notifications</label>
                  <Switch
                    id="push-notifications"
                    className="bg-[#03BDE9]"
                    checked={user.notifications.push}
                    onCheckedChange={() => handleNotificationChange('push')}
                  />
                </div>
                <div className="flex items-center justify-between text-gray-700">
                  <label className="text-gray-500" htmlFor="sms-notifications">SMS Notifications</label>
                  <Switch
                    className="bg-[#03BDE9]"
                    id="sms-notifications"
                    checked={user.notifications.sms}
                    onCheckedChange={() => handleNotificationChange('sms')}
                  />
                </div>
              </CardContent>
              <CardFooter>
              <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#03BDE9] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save Preferences
                </button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

