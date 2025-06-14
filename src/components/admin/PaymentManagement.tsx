
import React, { useState } from 'react';
import { DollarSign, CreditCard, CheckCircle, XCircle, Clock } from 'lucide-react';
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

interface Payment {
  id: string;
  orderId: string;
  customerName: string;
  amount: number;
  method: 'mobile_money' | 'bank_transfer' | 'cash';
  status: 'completed' | 'pending' | 'failed';
  date: string;
  transactionId: string;
}

const PaymentManagement = () => {
  const [payments] = useState<Payment[]>([
    {
      id: 'pay-1',
      orderId: 'ORD-001',
      customerName: 'John Doe',
      amount: 2500,
      method: 'mobile_money',
      status: 'completed',
      date: '2024-06-14',
      transactionId: 'TXN-12345'
    },
    {
      id: 'pay-2',
      orderId: 'ORD-002',
      customerName: 'Jane Smith',
      amount: 5000,
      method: 'bank_transfer',
      status: 'pending',
      date: '2024-06-13',
      transactionId: 'TXN-12346'
    },
    {
      id: 'pay-3',
      orderId: 'ORD-003',
      customerName: 'Mike Johnson',
      amount: 3200,
      method: 'mobile_money',
      status: 'completed',
      date: '2024-06-12',
      transactionId: 'TXN-12347'
    },
    {
      id: 'pay-4',
      orderId: 'ORD-004',
      customerName: 'Sarah Wilson',
      amount: 1800,
      method: 'cash',
      status: 'failed',
      date: '2024-06-11',
      transactionId: 'TXN-12348'
    }
  ]);

  const getStatusBadge = (status: string) => {
    const variants = {
      completed: 'outline',
      pending: 'secondary',
      failed: 'destructive'
    };
    return <Badge variant={variants[status as keyof typeof variants] as any}>{status}</Badge>;
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'pending': return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'failed': return <XCircle className="w-4 h-4 text-red-500" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const getMethodBadge = (method: string) => {
    const methodLabels = {
      mobile_money: 'Mobile Money',
      bank_transfer: 'Bank Transfer',
      cash: 'Cash'
    };
    return <Badge variant="outline">{methodLabels[method as keyof typeof methodLabels]}</Badge>;
  };

  const totalRevenue = payments.filter(p => p.status === 'completed').reduce((acc, p) => acc + p.amount, 0);
  const pendingPayments = payments.filter(p => p.status === 'pending');
  const completedPayments = payments.filter(p => p.status === 'completed');
  const failedPayments = payments.filter(p => p.status === 'failed');

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">TSh {totalRevenue.toLocaleString()}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedPayments.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingPayments.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Failed</CardTitle>
            <XCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{failedPayments.length}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Payment Management</CardTitle>
          <CardDescription>Track and manage all payments in your system</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Payment ID</TableHead>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden md:table-cell">Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payments.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell className="font-medium">{payment.id}</TableCell>
                    <TableCell>{payment.orderId}</TableCell>
                    <TableCell>{payment.customerName}</TableCell>
                    <TableCell>TSh {payment.amount.toLocaleString()}</TableCell>
                    <TableCell>{getMethodBadge(payment.method)}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(payment.status)}
                        {getStatusBadge(payment.status)}
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{payment.date}</TableCell>
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

export default PaymentManagement;
