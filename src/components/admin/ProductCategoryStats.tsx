
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const categories = [
  { name: "Crops", value: 10 },
  { name: "Vegetables", value: 8 },
  { name: "Fruits", value: 6 },
];

const COLORS = ["#fde68a", "#a7f3d0", "#86efac"];

export default function ProductCategoryStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Categories</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={150}>
          <PieChart>
            <Pie dataKey="value" data={categories} label>
              {categories.map((entry, idx) => (
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
