"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Label } from '@/components/ui/label'

// Mock data for support queries
const mockQueries = [
  { id: 1, user: "John Doe", email: "john@example.com", subject: "Login Issues", status: "Open", message: "I'm having trouble logging into my account. Can you please help?", date: "2023-06-01" },
  { id: 2, user: "Jane Smith", email: "jane@example.com", subject: "Feature Request", status: "In Progress", message: "I would like to suggest a new feature for the app. Is there a way to add custom safety circles?", date: "2023-06-02" },
  { id: 3, user: "Alice Johnson", email: "alice@example.com", subject: "Bug Report", status: "Closed", message: "I found a bug in the latest update. The notification sound is not working properly.", date: "2023-06-03" },
  { id: 4, user: "Bob Williams", email: "bob@example.com", subject: "Account Deletion", status: "Open", message: "I want to delete my account. What's the process for this?", date: "2023-06-04" },
  { id: 5, user: "Charlie Brown", email: "charlie@example.com", subject: "Payment Issue", status: "In Progress", message: "My last payment didn't go through, but I was still charged. Can you look into this?", date: "2023-06-05" },
]

export default function Support() {
  const [selectedQuery, setSelectedQuery] = useState(mockQueries[0])
  const [response, setResponse] = useState("")

  const handleQuerySelect = (query: typeof mockQueries[0]) => {
    setSelectedQuery(query)
    setResponse("") // Clear previous response when selecting a new query
  }

  const handleResponseSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the response to your backend
    console.log('Response submitted:', response)
    // Update the query status (in a real app, this would be done after successful API call)
    setSelectedQuery(prev => ({ ...prev, status: "Closed" }))
    // Show a success message to the admin
    alert('Response sent successfully!')
    setResponse("") // Clear the response field after submission
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-yellow-500"
      case "In Progress":
        return "bg-blue-500"
      case "Closed":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <>
      {/* <Sidebar /> */}
      <div className="flex-1 space-y-8 p-8 pt-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-800">Support Queries</h2>
          <p className="text-gray-500">Manage and respond to user support requests.</p>
        </div>

        <div className="flex space-x-8">
          <Card className="w-1/3 text-gray-800">
            <CardHeader>
              <CardTitle className=''>Query List</CardTitle>
              <CardDescription>Select a query to respond</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px] pr-4">
                {mockQueries.map((query) => (
                  <div
                    key={query.id}
                    className={`mb-4 cursor-pointer rounded-lg border p-4 transition-colors hover:bg-gray-100 ${
                      selectedQuery.id === query.id ? 'border-blue-500' : ''
                    }`}
                    onClick={() => handleQuerySelect(query)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{query.subject}</h3>
                      <Badge className={getStatusColor(query.status)}>{query.status}</Badge>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">{query.user}</p>
                    <p className="mt-1 text-xs text-gray-400">{query.date}</p>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
          <Card className="w-2/3 text-gray-800">
            <CardHeader>
              <CardTitle>Query Details</CardTitle>
              <CardDescription>View and respond to the selected query</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h3 className="font-semibold">{selectedQuery.subject}</h3>
                <p className="text-sm text-gray-600">{selectedQuery.user} ({selectedQuery.email})</p>
                <p className="text-sm text-gray-400">{selectedQuery.date}</p>
                <Badge className={`mt-2 ${getStatusColor(selectedQuery.status)} text-white`}>{selectedQuery.status}</Badge>
              </div>
              <div className="mb-4 rounded-lg bg-gray-100 p-4">
                <p>{selectedQuery.message}</p>
              </div>
              <form onSubmit={handleResponseSubmit}>
                <div className="mb-4 space-y-2">
                  <Label htmlFor="response">Your Response</Label>
                  <Textarea
                    id="response"
                    placeholder="Type your response here..."
                    value={response}
                    onChange={(e) => setResponse(e.target.value)}
                    className="min-h-[150px]"
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <Select defaultValue={selectedQuery.status}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Update status" />
                    </SelectTrigger>
                    <SelectContent className='py-3 px-2 text-gray-800'>
                      <SelectItem value="Open">Open</SelectItem>
                      <SelectItem value="In Progress">In Progress</SelectItem>
                      <SelectItem value="Closed">Closed</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button type="submit" className='bg-[#03BDE9] text-white'>Send Response</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}

