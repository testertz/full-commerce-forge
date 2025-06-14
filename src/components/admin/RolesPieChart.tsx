
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const roles = [
  { name: "Admin", value: 2 },
  { name: "Farmer", value: 4 },
  { name: "Buyer", value: 11 }
];

const COLORS = ["#6366f1", "#22c55e", "#facc15"];

export default function RolesPieChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Roles</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={150}>
          <PieChart>
            <Pie dataKey="value" data={roles} label>
              {roles.map((entry, idx) => (
                <Cell key={entry.name} fill={COLORS[idx % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
