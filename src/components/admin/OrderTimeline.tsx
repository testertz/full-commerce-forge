
import React from "react";
import { Clock } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const orderEvents = [
  { id: 1, event: "ORD-003 completed", time: "Today 14:31" },
  { id: 2, event: "ORD-002 processing", time: "Yesterday 12:20" },
  { id: 3, event: "ORD-001 pending", time: "Yesterday 10:13" }
];

export default function OrderTimeline() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" /> Order Timeline
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm">
          {orderEvents.map((o) => (
            <li key={o.id} className="flex justify-between items-center">
              <span>{o.event}</span>
              <span className="text-xs text-muted-foreground">{o.time}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
