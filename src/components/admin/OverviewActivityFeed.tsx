
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const events = [
  { id: 1, type: "order", content: "Order ORD-003 completed", time: "2m ago" },
  { id: 2, type: "product", content: "Added 'Fresh Corn' to Products", time: "12m ago" },
  { id: 3, type: "user", content: "New user: Sarah K.", time: "44m ago" },
  { id: 4, type: "payment", content: "Payment TXN-12347 completed", time: "1h ago" },
];

const typeColors: Record<
  string,
  "secondary" | "outline" | "default" | "destructive"
> = {
  order: "secondary",
  product: "outline",
  user: "default",
  payment: "destructive",
};

export default function OverviewActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {events.map(e => (
            <li key={e.id} className="flex items-center gap-2 text-sm">
              <Badge variant={typeColors[e.type]}>{e.type}</Badge>
              <span>{e.content}</span>
              <span className="ml-auto text-muted-foreground text-xs">{e.time}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
