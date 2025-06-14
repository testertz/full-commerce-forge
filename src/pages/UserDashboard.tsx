
import React, { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { LogOut, User, ShoppingBag, Heart, Package, CreditCard, TrendingUp, Settings, Users, Menu } from "lucide-react";
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const sidebarLinks = [
  { id: "overview", title: "Dashboard", icon: TrendingUp },
  { id: "orders", title: "My Orders", icon: Package },
  { id: "payments", title: "Payments", icon: CreditCard },
  { id: "wishlist", title: "Wishlist", icon: Heart },
  { id: "settings", title: "Settings", icon: Settings },
];

const stats = [
  {
    title: "Orders",
    value: "15",
    icon: Package,
    color: "bg-blue-500",
    change: "+2%",
  },
  {
    title: "Wishlist",
    value: "8",
    icon: Heart,
    color: "bg-pink-500",
    change: "+1",
  },
  {
    title: "Cart Items",
    value: 4,
    icon: ShoppingBag,
    color: "bg-green-500",
    change: "+3",
  },
  {
    title: "Account Age",
    value: "2y",
    icon: User,
    color: "bg-purple-500",
    change: "",
  },
];

const recentOrders = [
  {
    id: "001",
    total: 45000,
    status: "Delivered",
    date: "2024-01-15",
    items: 2,
    statusColor: "bg-green-100 text-green-700",
  },
  {
    id: "002",
    total: 18000,
    status: "Processing",
    date: "2024-03-01",
    items: 1,
    statusColor: "bg-yellow-100 text-yellow-700",
  },
];

const activityTimeline = [
  {
    icon: ShoppingBag,
    color: "bg-blue-500",
    content: "Ordered Bluetooth Headphones",
    time: "2 hours ago",
  },
  {
    icon: Package,
    color: "bg-green-500",
    content: "Order #001 delivered",
    time: "1 day ago",
  },
  {
    icon: Heart,
    color: "bg-pink-500",
    content: "Added Smartwatch to Wishlist",
    time: "3 days ago",
  },
];

const quickActions = [
  {
    icon: ShoppingBag,
    title: "Browse Products",
    color: "hover:border-green-500",
    onClick: () => window.location.href = "/products",
  },
  {
    icon: Package,
    title: "View Orders",
    color: "hover:border-blue-500",
    onClick: () => window.location.href = "/dashboard?tab=orders",
  },
  {
    icon: Heart,
    title: "Go to Wishlist",
    color: "hover:border-pink-500",
    onClick: () => window.location.href = "/dashboard?tab=wishlist",
  },
  {
    icon: CreditCard,
    title: "Payment Methods",
    color: "hover:border-orange-500",
    onClick: () => window.location.href = "/dashboard?tab=payments",
  },
];

const UserDashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const [active, setActive] = useState("overview");

  return (
    <SidebarProvider>
      <div className="min-h-screen w-full flex bg-background">
        <Sidebar>
          <SidebarHeader className="p-4 border-b">
            <span className="font-bold text-2xl text-primary flex items-center gap-2">
              <span className="hidden md:inline">e-Soko</span>
              <span className="md:hidden">eS</span>
            </span>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Menu</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarLinks.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton
                        isActive={active === item.id}
                        onClick={() => setActive(item.id)}
                        className="flex items-center"
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        {/* Main dashboard area */}
        <SidebarInset className="flex-1 flex flex-col min-h-screen">
          {/* Header/Navbar */}
          <header className="sticky top-0 z-30 w-full flex items-center justify-between gap-2 bg-background/80 backdrop-blur px-4 py-3 border-b">
            <div className="flex items-center gap-2">
              <SidebarTrigger asChild>
                <Button size="icon" variant="ghost" className="md:hidden">
                  <Menu />
                </Button>
              </SidebarTrigger>
              <h1 className="text-lg font-bold capitalize">{sidebarLinks.find(x => x.id === active)?.title || "Dashboard"}</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2 text-sm">
                <User className="w-6 h-6 text-primary" />
                <span className="font-medium">{user?.name || "User"}</span>
              </span>
              <Button onClick={logout} size="icon" variant="outline" title="Logout">
                <LogOut className="w-5 h-5" />
                <span className="sr-only">Logout</span>
              </Button>
            </div>
          </header>

          <main className="flex-1 py-6 px-2 md:px-6 max-w-full">
            {/* Overview dashboard */}
            {active === "overview" && (
              <>
                {/* Stats Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {stats.map((stat, i) => (
                    <Card key={i} className="shadow-sm">
                      <CardContent className="flex items-center gap-4 p-4">
                        <div className={`rounded-lg p-3 ${stat.color}`}>
                          <stat.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">{stat.title}</p>
                          <div className="font-bold text-xl">{stat.value}</div>
                          {stat.change &&
                            <span className="text-xs text-green-500">{stat.change}</span>
                          }
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Responsive grid for orders and actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Recent Orders */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Package className="w-5 h-5" /> Recent Orders
                      </CardTitle>
                      <CardDescription>Latest purchases</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="divide-y">
                        {recentOrders.map((order) => (
                          <div key={order.id} className="flex items-center justify-between py-3">
                            <div>
                              <div className="font-medium">Order #{order.id}</div>
                              <div className="text-xs text-muted-foreground">
                                {order.items} item(s) • TSh {order.total.toLocaleString()}
                              </div>
                              <div className="text-xs text-gray-400">{order.date}</div>
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${order.statusColor}`}>
                              {order.status}
                            </span>
                          </div>
                        ))}
                        {recentOrders.length === 0 && (
                          <div className="text-gray-400 text-center py-4">No recent orders</div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                  {/* Quick Actions */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Actions</CardTitle>
                      <CardDescription>Access features easily</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        {quickActions.map((a, i) => (
                          <button
                            key={i}
                            className={`p-4 border-2 border-dashed border-gray-200 rounded-lg flex flex-col items-center transition-all duration-200 ${a.color}`}
                            onClick={a.onClick}
                          >
                            <a.icon className="w-8 h-8 mb-2 text-gray-400" />
                            <span className="text-sm font-medium">{a.title}</span>
                          </button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Activity Timeline */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your account events</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-5">
                      {activityTimeline.map((a, i) => (
                        <div key={i} className="flex gap-3 items-start">
                          <div className={`rounded-full ${a.color} w-7 h-7 flex items-center justify-center`}>
                            <a.icon className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="font-medium">{a.content}</div>
                            <div className="text-xs text-gray-400">{a.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </>
            )}

            {/* Placeholder for other navigation sections */}
            {active !== "overview" && (
              <Card>
                <CardHeader>
                  <CardTitle>{sidebarLinks.find(x => x.id === active)?.title}</CardTitle>
                  <CardDescription>
                    Manage your {sidebarLinks.find(x => x.id === active)?.title?.toLowerCase()} here.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-muted-foreground">
                    <span className="block py-10 text-center">
                      Content coming soon 🚧
                    </span>
                  </div>
                </CardContent>
              </Card>
            )}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default UserDashboard;
