import { Card, CardContent } from "@/components/ui/card"

interface StatCardProps {
  icon: React.ReactNode
  value: string | number
  label: string
}

export function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <Card className="shadow">
      <CardContent className="flex justify-start items-center gap-4 pt-[1.25rem]">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
          {icon}
        </div>
        <div>
          <div className="text-3xl font-bold text-gray-700">{value}</div>
          <div className="text-sm text-gray-500">{label}</div>
        </div>
      </CardContent>
    </Card>
  )
}

