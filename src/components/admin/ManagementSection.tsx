
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ManagementSectionProps {
  title: string;
  description: string;
}

const ManagementSection = ({ title, description }: ManagementSectionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="capitalize">{title} Management</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-500">Content for {title} section coming soon...</p>
      </CardContent>
    </Card>
  );
};

export default ManagementSection;
