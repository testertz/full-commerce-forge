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
import OrderManagement from '@/components/admin/OrderManagement';
import UserManagement from '@/components/admin/UserManagement';
import FarmerManagement from '@/components/admin/FarmerManagement';
import PaymentManagement from '@/components/admin/PaymentManagement';
import ReportsManagement from '@/components/admin/ReportsManagement';
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
        return <OrderManagement />;
      
      case 'users':
        return <UserManagement />;
      
      case 'farmers':
        return <FarmerManagement />;
      
      case 'payments':
        return <PaymentManagement />;
      
      case 'reports':
        return <ReportsManagement />;
      
      default:
        return <StatsOverview productCount={products.length} />;
    }
  };

  return (
    <SidebarProvider>
      <>
        <div className="min-h-screen flex w-full flex-col">
          <div className="flex flex-1">
            <AdminSidebar 
              activeSection={activeSection} 
              onSectionChange={setActiveSection} 
            />
            <SidebarInset className="flex-1">
              <header className="sticky top-0 z-40 flex h-14 md:h-16 shrink-0 items-center gap-2 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
                <SidebarTrigger className="-ml-1" />
                <div className="ml-auto flex items-center gap-4">
                  <h1 className="text-lg font-semibold capitalize hidden sm:block">{activeSection}</h1>
                  <h1 className="text-base font-semibold capitalize sm:hidden">
                    {activeSection.length > 8 ? activeSection.substring(0, 8) + '...' : activeSection}
                  </h1>
                </div>
              </header>
              
              <div className="flex flex-1 flex-col gap-4 p-2 sm:p-4 lg:p-6 max-w-full overflow-hidden">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  {renderContent()}
                </motion.div>
              </div>
            </SidebarInset>
          </div>
        </div>
      </>
    </SidebarProvider>
  );
};

export default AdminDashboard;
