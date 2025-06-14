
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const registrations = [
  { id: 1, name: "Sarah K.", registered: "2m ago" },
  { id: 2, name: "Peter Buyer", registered: "10m ago" },
  { id: 3, name: "Mary Farm", registered: "27m ago" }
];

export default function UsersRegistrationFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>New Registrations</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="text-sm">
          {registrations.map(u => (
            <li key={u.id} className="flex justify-between">
              <span>{u.name}</span>
              <span className="text-xs text-muted-foreground">{u.registered}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
