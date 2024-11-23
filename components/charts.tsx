"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, RadarChart, PolarRadiusAxis, Radar, PolarAngleAxis, PolarGrid, AreaChart, Area } from "recharts"

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

const data = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300
  }
]

const respondersData = [
  {
    "subject": "Math",
    "A": 120,
    "B": 110,
    "fullMark": 150
  },
  {
    "subject": "Chinese",
    "A": 98,
    "B": 130,
    "fullMark": 150
  },
  {
    "subject": "English",
    "A": 86,
    "B": 130,
    "fullMark": 150
  },
  {
    "subject": "Geography",
    "A": 99,
    "B": 100,
    "fullMark": 150
  },
  {
    "subject": "Physics",
    "A": 85,
    "B": 90,
    "fullMark": 150
  },
  {
    "subject": "History",
    "A": 65,
    "B": 85,
    "fullMark": 150
  }
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
        <CardTitle className="text-gray-700 text-3xl">Registered Users</CardTitle>
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

export function TopReportsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-gray-700 text-3xl">Top Reports</CardTitle>
      </CardHeader>
      <CardContent>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
      </CardContent>
    </Card>
  )
}

export function TopRespondersChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-gray-700 text-3xl">Top Responders</CardTitle>
      </CardHeader>
      <CardContent>
        <RadarChart outerRadius={90} width={730} height={250} data={respondersData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          <Legend />
        </RadarChart>
      </CardContent>
    </Card>
  )
}

export function RegisteredStatesChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-gray-700 text-3xl">Registered States</CardTitle>
      </CardHeader>
      <CardContent>
        <AreaChart width={730} height={250} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
          </AreaChart>
      </CardContent>
    </Card>
  )
}