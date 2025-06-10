
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, User, MapPin } from 'lucide-react';
import { mockProducts } from '@/data/mockData';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = mockProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link to="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <Link to="/products" className="flex items-center gap-2 text-primary hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8">
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600">{product.location}</span>
              </div>

              <div className="text-3xl font-bold text-primary mb-6">
                TSh {product.price.toLocaleString()}/{product.unit}
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Seller Information
                </h3>
                <p className="text-gray-600">{product.sellerName}</p>
                <p className="text-green-600 text-sm">✓ Verified Seller</p>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <label className="font-medium">Quantity:</label>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
                <span className="text-sm text-gray-500">
                  ({product.stock} available)
                </span>
              </div>

              <Button
                onClick={handleAddToCart}
                className="w-full btn-primary flex items-center justify-center gap-2"
                disabled={quantity > product.stock}
              >
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
