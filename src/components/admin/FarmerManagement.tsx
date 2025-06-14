import React from 'react';
import { Users, UserPlus, Edit, Trash2, Sprout, MapPin } from 'lucide-react';
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
import FarmerLeaderboard from './FarmerLeaderboard';
import FarmLocationsSummary from './FarmLocationsSummary';

interface Farmer {
  id: string;
  name: string;
  email: string;
  location: string;
  joinDate: string;
  lastActive: string;
  products: number;
  rating: number;
}

const FarmerManagement = () => {
  const [farmers] = React.useState<Farmer[]>([
    {
      id: 'farmer-1',
      name: 'Mary Farm',
      email: 'mary@farm.com',
      location: 'Kilimanjaro',
      joinDate: '2024-02-20',
      lastActive: '2024-06-13',
      products: 12,
      rating: 4.5
    },
    {
      id: 'farmer-2',
      name: 'John Farmer',
      email: 'john@farmer.net',
      location: 'Arusha',
      joinDate: '2024-03-01',
      lastActive: '2024-06-10',
      products: 8,
      rating: 4.2
    },
    {
      id: 'farmer-3',
      name: 'Lucie Field',
      email: 'lucie@field.org',
      location: 'Mbeya',
      joinDate: '2024-04-15',
      lastActive: '2024-06-05',
      products: 15,
      rating: 4.8
    }
  ]);

  const getStatusBadge = (date: string) => {
    const lastActive = new Date(date);
    const now = new Date();
    const diff = now.getTime() - lastActive.getTime();
    const days = Math.ceil(diff / (1000 * 3600 * 24));

    let status = 'active';
    if (days > 30) status = 'inactive';

    return (
      <Badge variant={status === 'active' ? 'outline' : 'secondary'}>
        {status}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FarmerLeaderboard />
        <FarmLocationsSummary />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Farmers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{farmers.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Farmers</CardTitle>
            <Sprout className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{farmers.filter(f => {
              const lastActive = new Date(f.lastActive);
              const now = new Date();
              const diff = now.getTime() - lastActive.getTime();
              const days = Math.ceil(diff / (1000 * 3600 * 24));
              return days <= 30;
            }).length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Products</CardTitle>
            <Sprout className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {farmers.reduce((acc, farmer) => acc + farmer.products, 0) / farmers.length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Rating</CardTitle>
            <Sprout className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {farmers.reduce((acc, farmer) => acc + farmer.rating, 0) / farmers.length}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle>Farmers Management</CardTitle>
              <CardDescription>Manage all farmers in your system</CardDescription>
            </div>
            <Button className="flex items-center gap-2">
              <UserPlus className="w-4 h-4" />
              Add Farmer
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Farmer</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Products</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden md:table-cell">Join Date</TableHead>
                  <TableHead className="hidden lg:table-cell">Last Active</TableHead>
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
                          <div className="text-sm text-muted-foreground hidden sm:block">{farmer.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {farmer.location}
                      </div>
                    </TableCell>
                    <TableCell>{farmer.products}</TableCell>
                    <TableCell>{farmer.rating}</TableCell>
                    <TableCell>{getStatusBadge(farmer.lastActive)}</TableCell>
                    <TableCell className="hidden md:table-cell">{farmer.joinDate}</TableCell>
                    <TableCell className="hidden lg:table-cell">{farmer.lastActive}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                          <span className="hidden sm:inline ml-1">Edit</span>
                        </Button>
                        <Button variant="destructive" size="sm">
                          <Trash2 className="w-4 h-4" />
                          <span className="hidden sm:inline ml-1">Delete</span>
                        </Button>
                      </div>
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
