
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", reports: 2 },
  { month: "Feb", reports: 3 },
  { month: "Mar", reports: 1 },
  { month: "Apr", reports: 4 },
  { month: "May", reports: 2 },
  { month: "Jun", reports: 3 }
];

export default function ReportsPerMonthChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Reports Per Month</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={100}>
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="reports" fill="#e879f9" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
