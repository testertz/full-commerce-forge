
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const payments = [
  { date: "Mon", amount: 2000 },
  { date: "Tue", amount: 4000 },
  { date: "Wed", amount: 3500 },
  { date: "Thu", amount: 2600 },
  { date: "Fri", amount: 4200 }
];

export default function PaymentTrendsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={120}>
          <LineChart data={payments}>
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Line type="monotone" dataKey="amount" stroke="#84cc16" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
