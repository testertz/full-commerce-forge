
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const farmers = [
  { id: 1, name: "Mary Farm", sales: 91 },
  { id: 2, name: "John Farmer", sales: 76 },
  { id: 3, name: "Lucie Field", sales: 58 }
];

export default function FarmerLeaderboard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <span className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-yellow-500" /> Farmer Leaderboard
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="list-decimal ml-4 text-sm space-y-1">
          {farmers.map((f, idx) => (
            <li key={f.id} className="flex justify-between items-center">
              <span>{f.name}</span>
              <span className="ml-2 font-medium">{f.sales} sales</span>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}
