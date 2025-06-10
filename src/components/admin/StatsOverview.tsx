
import React from 'react';
import { motion } from 'framer-motion';
import { Package, ShoppingCart, Users, DollarSign } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface StatsOverviewProps {
  productCount: number;
}

const StatsOverview = ({ productCount }: StatsOverviewProps) => {
  const stats = [
    {
      title: 'Total Products',
      value: productCount,
      icon: Package,
      color: 'bg-blue-500'
    },
    {
      title: 'Total Orders',
      value: '156',
      icon: ShoppingCart,
      color: 'bg-green-500'
    },
    {
      title: 'Total Users',
      value: '89',
      icon: Users,
      color: 'bg-purple-500'
    },
    {
      title: 'Revenue',
      value: 'TSh 2.4M',
      icon: DollarSign,
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
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
  );
};

export default StatsOverview;
