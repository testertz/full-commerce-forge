
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Smartphone, Building } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from 'sonner';

const Checkout = () => {
  const { items, total, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [paymentMethod, setPaymentMethod] = useState('mobile');
  const [shippingInfo, setShippingInfo] = useState({
    address: '',
    phone: '',
    pickupPoint: 'Sayansi, Kijitonyana'
  });

  const deliveryFee = 1500;
  const finalTotal = total + deliveryFee;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate order processing
    toast.success('Processing your order...');
    
    setTimeout(() => {
      clearCart();
      toast.success('Order placed successfully!');
      navigate('/order-success');
    }, 2000);
  };

  const paymentMethods = [
    { id: 'mobile', label: 'Mobile Money', icon: Smartphone },
    { id: 'card', label: 'Credit/Debit Card', icon: CreditCard },
    { id: 'bank', label: 'Bank Transfer', icon: Building }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span>{item.product.name} x {item.quantity}</span>
                    <span>TSh {(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>TSh {total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery</span>
                    <span>TSh {deliveryFee.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>TSh {finalTotal.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="grid grid-cols-3 gap-4">
                  {paymentMethods.map((method) => {
                    const Icon = method.icon;
                    return (
                      <div key={method.id} className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value={method.id} id={method.id} />
                        <label htmlFor={method.id} className="flex flex-col items-center cursor-pointer">
                          <Icon className="w-8 h-8 mb-2" />
                          <span className="text-sm">{method.label}</span>
                        </label>
                      </div>
                    );
                  })}
                </div>
              </RadioGroup>
            </div>
          </div>

          <div className="space-y-6">
            {/* Shipping Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="address">Delivery Address</Label>
                  <Input
                    id="address"
                    value={shippingInfo.address}
                    onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                    placeholder="Enter your delivery address"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={shippingInfo.phone}
                    onChange={(e) => setShippingInfo({...shippingInfo, phone: e.target.value})}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="pickup">Pickup Point</Label>
                  <Input
                    id="pickup"
                    value={shippingInfo.pickupPoint}
                    onChange={(e) => setShippingInfo({...shippingInfo, pickupPoint: e.target.value})}
                    placeholder="Pickup location"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1"
                    onClick={() => navigate('/cart')}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 btn-primary"
                  >
                    Place Order
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
