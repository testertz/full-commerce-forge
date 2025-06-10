
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { ShoppingBag, Package, Users, DollarSign } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();
  const { itemCount, total } = useCart();

  const stats = [
    {
      title: 'Cart Items',
      value: itemCount,
      icon: ShoppingBag,
      color: 'bg-blue-500'
    },
    {
      title: 'Cart Value',
      value: `TSh ${total.toLocaleString()}`,
      icon: DollarSign,
      color: 'bg-green-500'
    },
    {
      title: 'Orders',
      value: '3',
      icon: Package,
      color: 'bg-orange-500'
    },
    {
      title: 'Wishlist',
      value: '5',
      icon: Users,
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}!</h1>
          <p className="text-gray-600">Here's what's happening with your account</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">Order #001</p>
                  <p className="text-sm text-gray-600">3 items • TSh 45,000</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  Delivered
                </span>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">Order #002</p>
                  <p className="text-sm text-gray-600">2 items • TSh 28,000</p>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Shipped
                </span>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">Order #003</p>
                  <p className="text-sm text-gray-600">1 item • TSh 18,300</p>
                </div>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                  Processing
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary transition-colors">
                <Package className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                <p className="text-sm font-medium">View Orders</p>
              </button>
              <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary transition-colors">
                <ShoppingBag className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                <p className="text-sm font-medium">Browse Products</p>
              </button>
              <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary transition-colors">
                <Users className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                <p className="text-sm font-medium">Profile Settings</p>
              </button>
              <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary transition-colors">
                <DollarSign className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                <p className="text-sm font-medium">Payment Methods</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
