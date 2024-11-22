"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

const lineData = [
  { name: "Jan", "Team A": 30, "Team B": 40, "Team C": 35 },
  { name: "Feb", "Team A": 45, "Team B": 55, "Team C": 40 },
  { name: "Mar", "Team A": 35, "Team B": 65, "Team C": 45 },
  { name: "Apr", "Team A": 50, "Team B": 45, "Team C": 55 },
  { name: "May", "Team A": 45, "Team B": 50, "Team C": 60 },
  { name: "Jun", "Team A": 60, "Team B": 45, "Team C": 50 },
  { name: "Jul", "Team A": 60, "Team B": 45, "Team C": 50 },
  { name: "Aug", "Team A": 60, "Team B": 45, "Team C": 90 },
  { name: "Sep", "Team A": 60, "Team B": 50, "Team C": 80 },
  { name: "Oct", "Team A": 60, "Team B": 75, "Team C": 70 },
  { name: "Nov", "Team A": 60, "Team B": 35, "Team C": 60 },
  { name: "Dec", "Team A": 60, "Team B": 15, "Team C": 50 },
]

const pieData = [
  { name: "Team A", value: 34.3 },
  { name: "Team B", value: 30.6 },
  { name: "Team C", value: 35.1 },
]

const COLORS = ["#38BDF8", "#818CF8", "#FB7185"]

export function SituationalReportChart() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="text-gray-700 text-3xl">Statistical Chart - Situational Report</CardTitle>
        <p className="text-sm text-gray-500">(+43%) than last year</p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Team A" stroke="#38BDF8" />
            <Line type="monotone" dataKey="Team B" stroke="#818CF8" />
            <Line type="monotone" dataKey="Team C" stroke="#FB7185" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export function TransactionHistoryChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-gray-700 text-3xl">Transaction History</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

