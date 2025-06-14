import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { ShoppingBag, Package, Users, DollarSign, TrendingUp, Clock, CreditCard, Heart, Settings, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from '@/components/ui/sidebar';
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import DashboardFooter from "@/components/dashboard/DashboardFooter";

const Dashboard = () => {
  const { user } = useAuth();
  const { itemCount, total } = useCart();
  const [activeSection, setActiveSection] = useState('overview');

  const sidebarItems = [
    { id: 'overview', title: 'Overview', icon: TrendingUp },
    { id: 'orders', title: 'My Orders', icon: Package },
    { id: 'payments', title: 'Payments', icon: CreditCard },
    { id: 'wishlist', title: 'Wishlist', icon: Heart },
    { id: 'profile', title: 'Profile', icon: User },
    { id: 'settings', title: 'Settings', icon: Settings },
  ];

  const stats = [
    {
      title: 'Cart Items',
      value: itemCount,
      icon: ShoppingBag,
      color: 'bg-blue-500',
      change: '+12%'
    },
    {
      title: 'Cart Value',
      value: `TSh ${total.toLocaleString()}`,
      icon: DollarSign,
      color: 'bg-green-500',
      change: '+8%'
    },
    {
      title: 'Orders',
      value: '3',
      icon: Package,
      color: 'bg-orange-500',
      change: '+2'
    },
    {
      title: 'Wishlist',
      value: '5',
      icon: Users,
      color: 'bg-purple-500',
      change: '+1'
    }
  ];

  const recentOrders = [
    {
      id: '001',
      items: 3,
      total: 45000,
      status: 'Delivered',
      statusColor: 'bg-green-100 text-green-800',
      date: '2024-01-15'
    },
    {
      id: '002',
      items: 2,
      total: 28000,
      status: 'Shipped',
      statusColor: 'bg-blue-100 text-blue-800',
      date: '2024-01-14'
    },
    {
      id: '003',
      items: 1,
      total: 18300,
      status: 'Processing',
      statusColor: 'bg-yellow-100 text-yellow-800',
      date: '2024-01-13'
    }
  ];

  const quickActions = [
    { icon: Package, label: 'View Orders', color: 'hover:border-blue-500' },
    { icon: ShoppingBag, label: 'Browse Products', color: 'hover:border-green-500' },
    { icon: Users, label: 'Profile Settings', color: 'hover:border-purple-500' },
    { icon: DollarSign, label: 'Payment Methods', color: 'hover:border-orange-500' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-gray-600 text-sm">{stat.title}</p>
                            <p className="text-2xl font-bold">{stat.value}</p>
                            <div className="flex items-center mt-1">
                              <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                              <span className="text-xs text-green-500">{stat.change}</span>
                            </div>
                          </div>
                          <div className={`${stat.color} p-3 rounded-lg`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Recent Orders */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Recent Orders
                  </CardTitle>
                  <CardDescription>Your latest order activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order, index) => (
                      <motion.div
                        key={order.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow"
                      >
                        <div>
                          <p className="font-medium">Order #{order.id}</p>
                          <p className="text-sm text-gray-600">
                            {order.items} items • TSh {order.total.toLocaleString()}
                          </p>
                          <p className="text-xs text-gray-500">{order.date}</p>
                        </div>
                        <span className={`px-3 py-1 ${order.statusColor} rounded-full text-sm font-medium`}>
                          {order.status}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Frequently used features</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {quickActions.map((action, index) => {
                      const Icon = action.icon;
                      return (
                        <motion.button
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`p-4 border-2 border-dashed border-gray-300 rounded-lg transition-all duration-300 ${action.color}`}
                        >
                          <Icon className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                          <p className="text-sm font-medium">{action.label}</p>
                        </motion.button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Activity Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your account activity timeline</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Order #003 delivered successfully</p>
                      <p className="text-sm text-gray-600">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Added 3 items to cart</p>
                      <p className="text-sm text-gray-600">5 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Profile updated</p>
                      <p className="text-sm text-gray-600">1 day ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      
      default:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="capitalize">{activeSection}</CardTitle>
              <CardDescription>Manage your {activeSection}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">Content for {activeSection} section coming soon...</p>
            </CardContent>
          </Card>
        );
    }
  };

  return (
    <SidebarProvider>
      <>
        <DashboardNavbar sectionTitle={activeSection} />
        <div className="min-h-screen flex w-full flex-col">
          <div className="flex flex-1">
            <Sidebar>
              <SidebarHeader className="p-4">
                <div>
                  <h2 className="text-lg font-semibold">My Dashboard</h2>
                  <p className="text-sm text-gray-600">Welcome back, {user?.name}!</p>
                </div>
              </SidebarHeader>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Account</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {sidebarItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <SidebarMenuItem key={item.id}>
                            <SidebarMenuButton 
                              onClick={() => setActiveSection(item.id)}
                              isActive={activeSection === item.id}
                            >
                              <Icon className="w-4 h-4" />
                              <span>{item.title}</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        );
                      })}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
            </Sidebar>
            <SidebarInset>
              <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                <SidebarTrigger className="-ml-1" />
                <div className="ml-auto">
                  <h1 className="text-lg font-semibold capitalize">{activeSection}</h1>
                </div>
              </header>
              <div className="flex flex-1 flex-col gap-4 p-4">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderContent()}
                </motion.div>
              </div>
            </SidebarInset>
          </div>
          <DashboardFooter />
        </div>
      </>
    </SidebarProvider>
  );
};

export default Dashboard;
