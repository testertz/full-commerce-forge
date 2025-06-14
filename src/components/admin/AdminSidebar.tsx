
import React from 'react';
import { Users, Package, ShoppingCart, DollarSign, FileText, Sprout, LayoutDashboard } from 'lucide-react';
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
} from '@/components/ui/sidebar';

interface AdminSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const AdminSidebar = ({ activeSection, onSectionChange }: AdminSidebarProps) => {
  const sidebarItems = [
    { id: 'overview', title: 'Overview', icon: LayoutDashboard },
    { id: 'products', title: 'Products', icon: Package },
    { id: 'orders', title: 'Orders', icon: ShoppingCart },
    { id: 'users', title: 'Users', icon: Users },
    { id: 'farmers', title: 'Farmers', icon: Sprout },
    { id: 'payments', title: 'Payments', icon: DollarSign },
    { id: 'reports', title: 'Reports', icon: FileText },
  ];

  return (
    <Sidebar className="border-r">
      <SidebarHeader className="p-4 border-b">
        <h2 className="text-lg font-semibold text-foreground">Admin Dashboard</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Management
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton 
                      onClick={() => onSectionChange(item.id)}
                      isActive={activeSection === item.id}
                      className="w-full justify-start gap-3 px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground data-[active=true]:bg-accent data-[active=true]:text-accent-foreground"
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span className="truncate">{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AdminSidebar;
