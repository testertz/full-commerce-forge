import React, { useState } from 'react';
import { Users, UserPlus, Edit, Trash2, Shield, ShieldCheck } from 'lucide-react';
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
import UsersRegistrationFeed from './UsersRegistrationFeed';
import RolesPieChart from './RolesPieChart';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'farmer' | 'buyer';
  status: 'active' | 'inactive';
  joinDate: string;
  lastActive: string;
}

const UserManagement = () => {
  const [users] = useState<User[]>([
    {
      id: 'user-1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'buyer',
      status: 'active',
      joinDate: '2024-01-15',
      lastActive: '2024-06-14'
    },
    {
      id: 'user-2',
      name: 'Mary Farm',
      email: 'mary@farm.com',
      role: 'farmer',
      status: 'active',
      joinDate: '2024-02-20',
      lastActive: '2024-06-13'
    },
    {
      id: 'user-3',
      name: 'Admin User',
      email: 'admin@e-soko.com',
      role: 'admin',
      status: 'active',
      joinDate: '2024-01-01',
      lastActive: '2024-06-14'
    },
    {
      id: 'user-4',
      name: 'Peter Buyer',
      email: 'peter@example.com',
      role: 'buyer',
      status: 'inactive',
      joinDate: '2024-03-10',
      lastActive: '2024-05-20'
    }
  ]);

  const getRoleBadge = (role: string) => {
    const variants = {
      admin: 'destructive',
      farmer: 'default',
      buyer: 'secondary'
    };
    return <Badge variant={variants[role as keyof typeof variants] as any}>{role}</Badge>;
  };

  const getStatusBadge = (status: string) => {
    return (
      <Badge variant={status === 'active' ? 'outline' : 'secondary'}>
        {status}
      </Badge>
    );
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'admin': return <ShieldCheck className="w-4 h-4" />;
      case 'farmer': return <Users className="w-4 h-4" />;
      case 'buyer': return <Users className="w-4 h-4" />;
      default: return <Users className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <UsersRegistrationFeed />
        <RolesPieChart />
      </div>
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle>Users Management</CardTitle>
              <CardDescription>Manage all users in your system</CardDescription>
            </div>
            <Button className="flex items-center gap-2">
              <UserPlus className="w-4 h-4" />
              Add User
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden md:table-cell">Join Date</TableHead>
                  <TableHead className="hidden lg:table-cell">Last Active</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={`https://avatar.vercel.sh/${user.email}`} />
                          <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-muted-foreground hidden sm:block">{user.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getRoleIcon(user.role)}
                        {getRoleBadge(user.role)}
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(user.status)}</TableCell>
                    <TableCell className="hidden md:table-cell">{user.joinDate}</TableCell>
                    <TableCell className="hidden lg:table-cell">{user.lastActive}</TableCell>
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

export default UserManagement;
