
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const history = [
  { id: 1, report: "Sales Report", date: "2024-06-01", user: "Admin" },
  { id: 2, report: "Product Performance", date: "2024-05-27", user: "Admin" },
  { id: 3, report: "Farmer Performance", date: "2024-05-08", user: "Analyst" }
];

export default function ReportsHistoryLog() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Reports History</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="text-sm">
          {history.map(h => (
            <li key={h.id} className="flex justify-between">
              <span>{h.report}</span>
              <span className="text-xs text-muted-foreground">{h.date} by {h.user}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
