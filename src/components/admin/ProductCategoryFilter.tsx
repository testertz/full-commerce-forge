
import React from "react";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

const categories = [
  { id: "", label: "All" },
  { id: "crops", label: "Crops" },
  { id: "vegetables", label: "Vegetables" },
  { id: "fruits", label: "Fruits" },
];

interface Props {
  value: string;
  onChange: (cat: string) => void;
}

export default function ProductCategoryFilter({ value, onChange }: Props) {
  return (
    <div className="mb-4 w-44">
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder="Filter Category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((cat) => (
            <SelectItem value={cat.id} key={cat.id}>{cat.label}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
