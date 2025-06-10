
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from '@/components/ui/sidebar';
import { mockProducts } from '@/data/mockData';
import { Product } from '@/types';
import StatsOverview from '@/components/admin/StatsOverview';
import ProductManagement from '@/components/admin/ProductManagement';
import ManagementSection from '@/components/admin/ManagementSection';
import AdminSidebar from '@/components/admin/AdminSidebar';

const AdminDashboard = () => {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [activeSection, setActiveSection] = useState('overview');

  const handleAddProduct = (productData: any) => {
    const newProduct: Product = {
      id: `product-${Date.now()}`,
      sellerId: 'admin',
      ...productData,
    };
    
    setProducts([...products, newProduct]);
  };

  const handleEditProduct = (productId: string, productData: any) => {
    const updatedProducts = products.map(product =>
      product.id === productId
        ? { ...product, ...productData }
        : product
    );
    
    setProducts(updatedProducts);
  };

  const handleDeleteProduct = (productId: string) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-6">
            <StatsOverview productCount={products.length} />
          </div>
        );
      
      case 'products':
        return (
          <ProductManagement
            products={products}
            onAddProduct={handleAddProduct}
            onEditProduct={handleEditProduct}
            onDeleteProduct={handleDeleteProduct}
          />
        );
      
      case 'orders':
        return <ManagementSection title="Orders" description="Manage all orders in your system" />;
      
      case 'users':
        return <ManagementSection title="Users" description="Manage all users in your system" />;
      
      case 'farmers':
        return <ManagementSection title="Farmers" description="Manage all farmers in your system" />;
      
      case 'payments':
        return <ManagementSection title="Payments" description="Manage all payments in your system" />;
      
      case 'reports':
        return <ManagementSection title="Reports" description="View and generate reports" />;
      
      default:
        return <ManagementSection title={activeSection} description={`Manage ${activeSection} in your system`} />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AdminSidebar 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />

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
    </SidebarProvider>
  );
};

export default AdminDashboard;
