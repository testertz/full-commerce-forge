
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OrderSuccess = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-2xl font-bold mb-4">Thank you for shopping with e-Soko!</h1>
          <p className="text-gray-600 mb-8">Your order has been placed successfully and will be processed soon.</p>
          
          <div className="space-y-4">
            <Link to="/dashboard" className="w-full btn-primary block">
              View Dashboard
            </Link>
            <Link to="/products" className="w-full btn-secondary block">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
