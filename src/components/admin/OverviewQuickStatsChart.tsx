
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const stats = [
  { label: "Products", value: 24 },
  { label: "Orders", value: 41 },
  { label: "Users", value: 17 },
  { label: "Farmers", value: 7 },
];

const chartData = [
  { name: "Products", count: 24 },
  { name: "Orders", count: 41 },
  { name: "Users", count: 17 },
  { name: "Farmers", count: 7 },
];

export default function OverviewQuickStatsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Stats</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={120}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="count" fill="#4ade80" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
