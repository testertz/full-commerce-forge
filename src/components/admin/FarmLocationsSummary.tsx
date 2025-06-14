
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const locations = [
  { name: "Kilimanjaro", farms: 7 },
  { name: "Arusha", farms: 4 },
  { name: "Mbeya", farms: 2 }
];

export default function FarmLocationsSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Farm Locations</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="text-sm">
          {locations.map(l => (
            <li key={l.name} className="flex justify-between">
              <span>{l.name}</span>
              <span className="ml-2 font-medium">{l.farms}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
