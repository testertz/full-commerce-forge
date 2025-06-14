
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const customers = [
  { name: "John Doe", amount: 5000 },
  { name: "Jane Smith", amount: 4300 },
  { name: "Mike Johnson", amount: 3900 }
];

export default function TopPayingCustomers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Paying Customers</CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="list-decimal ml-4 text-sm space-y-1">
          {customers.map((c, idx) => (
            <li key={c.name} className="flex justify-between">
              <span>{c.name}</span>
              <span className="ml-2 font-medium">TSh {c.amount.toLocaleString()}</span>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}
