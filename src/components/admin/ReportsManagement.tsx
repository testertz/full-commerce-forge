
import React from 'react';
import { FileText, Download, TrendingUp, Calendar, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ReportsManagement = () => {
  const reports = [
    {
      id: 'rep-1',
      title: 'Sales Report',
      description: 'Monthly sales performance and trends',
      type: 'sales',
      period: 'June 2024',
      status: 'ready',
      icon: TrendingUp
    },
    {
      id: 'rep-2',
      title: 'Product Performance',
      description: 'Best selling products and categories',
      type: 'products',
      period: 'June 2024',
      status: 'ready',
      icon: BarChart3
    },
    {
      id: 'rep-3',
      title: 'User Analytics',
      description: 'User engagement and registration trends',
      type: 'users',
      period: 'June 2024',
      status: 'generating',
      icon: TrendingUp
    },
    {
      id: 'rep-4',
      title: 'Farmer Performance',
      description: 'Farmer productivity and ratings analysis',
      type: 'farmers',
      period: 'June 2024',
      status: 'ready',
      icon: BarChart3
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      ready: 'outline',
      generating: 'secondary',
      error: 'destructive'
    };
    return <Badge variant={variants[status as keyof typeof variants] as any}>{status}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Reports</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{reports.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ready</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{reports.filter(r => r.status === 'ready').length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Generating</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{reports.filter(r => r.status === 'generating').length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{reports.filter(r => r.period.includes('June')).length}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle>Reports Management</CardTitle>
              <CardDescription>Generate and download system reports</CardDescription>
            </div>
            <Button className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Generate Report
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {reports.map((report) => {
              const IconComponent = report.icon;
              return (
                <Card key={report.id} className="border-2">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{report.title}</CardTitle>
                          <CardDescription className="text-sm mt-1">
                            {report.description}
                          </CardDescription>
                        </div>
                      </div>
                      {getStatusBadge(report.status)}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                      <div className="text-sm text-muted-foreground">
                        Period: {report.period}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" disabled={report.status !== 'ready'}>
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportsManagement;
