
import React, { useState } from 'react';
import { Sprout, MapPin, Phone, Mail, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Farmer {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  farmSize: string;
  specialization: string[];
  rating: number;
  productsCount: number;
  status: 'verified' | 'pending' | 'rejected';
}

const FarmerManagement = () => {
  const [farmers] = useState<Farmer[]>([
    {
      id: 'farmer-1',
      name: 'Mary Mkulima',
      email: 'mary@farm.com',
      phone: '+255 123 456 789',
      location: 'Arusha',
      farmSize: '5 acres',
      specialization: ['Vegetables', 'Fruits'],
      rating: 4.8,
      productsCount: 12,
      status: 'verified'
    },
    {
      id: 'farmer-2',
      name: 'John Farmer',
      email: 'john@farm.co.tz',
      phone: '+255 987 654 321',
      location: 'Mbeya',
      farmSize: '10 acres',
      specialization: ['Crops', 'Vegetables'],
      rating: 4.5,
      productsCount: 8,
      status: 'verified'
    },
    {
      id: 'farmer-3',
      name: 'Peter Kilimo',
      email: 'peter@kilimo.com',
      phone: '+255 555 123 456',
      location: 'Dodoma',
      farmSize: '3 acres',
      specialization: ['Fruits'],
      rating: 4.2,
      productsCount: 5,
      status: 'pending'
    }
  ]);

  const getStatusBadge = (status: string) => {
    const variants = {
      verified: 'outline',
      pending: 'secondary',
      rejected: 'destructive'
    };
    return <Badge variant={variants[status as keyof typeof variants] as any}>{status}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Farmers</CardTitle>
            <Sprout className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{farmers.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Verified</CardTitle>
            <Sprout className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{farmers.filter(f => f.status === 'verified').length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Sprout className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{farmers.filter(f => f.status === 'pending').length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Rating</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {(farmers.reduce((acc, f) => acc + f.rating, 0) / farmers.length).toFixed(1)}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Farmers Management</CardTitle>
          <CardDescription>Manage all farmers in your platform</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Farmer</TableHead>
                  <TableHead className="hidden md:table-cell">Contact</TableHead>
                  <TableHead className="hidden lg:table-cell">Farm Info</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Products</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {farmers.map((farmer) => (
                  <TableRow key={farmer.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={`https://avatar.vercel.sh/${farmer.email}`} />
                          <AvatarFallback>{farmer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{farmer.name}</div>
                          <div className="text-sm text-muted-foreground flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {farmer.location}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div className="space-y-1">
                        <div className="text-sm flex items-center gap-1">
                          <Mail className="w-3 h-3" />
                          {farmer.email}
                        </div>
                        <div className="text-sm flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          {farmer.phone}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">
                      <div className="space-y-1">
                        <div className="text-sm">{farmer.farmSize}</div>
                        <div className="text-xs text-muted-foreground">
                          {farmer.specialization.join(', ')}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        {farmer.rating}
                      </div>
                    </TableCell>
                    <TableCell>{farmer.productsCount}</TableCell>
                    <TableCell>{getStatusBadge(farmer.status)}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FarmerManagement;
