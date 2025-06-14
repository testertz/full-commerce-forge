
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, User, MapPin, Star, Heart, Share2, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { mockProducts } from '@/data/mockData';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { user } = useAuth();
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = mockProducts.find(p => p.id === id);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  useEffect(() => {
    if (product) {
      document.title = `${product.name} - e-Soko`;
    }
    
    return () => {
      document.title = 'e-Soko';
    };
  }, [product]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <Link to="/products" className="btn-primary">
            Back to Products
          </Link>
        </motion.div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (quantity > product.stock) {
      toast.error('Not enough stock available');
      return;
    }
    
    addToCart(product, quantity);
    toast.success(`Added ${quantity} ${product.name} to cart`);
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast.success(isWishlisted ? 'Removed from wishlist' : 'Added to wishlist');
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(window.location.href);
      toast.success('Product link copied to clipboard');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/products" className="flex items-center gap-2 text-primary hover:underline mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="aspect-square relative"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleWishlist}
                  className="bg-white/90 backdrop-blur-sm"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleShare}
                  className="bg-white/90 backdrop-blur-sm"
                >
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>

            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-4 sm:p-8"
            >
              <div className="mb-4">
                <Badge variant="secondary" className="mb-2">
                  {product.category}
                </Badge>
                <h1 className="text-2xl sm:text-3xl font-bold mb-2">{product.name}</h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">(4.0)</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 text-sm sm:text-base">{product.description}</p>
              
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600 text-sm sm:text-base">{product.location}</span>
              </div>

              <div className="text-2xl sm:text-3xl font-bold text-primary mb-6">
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

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                <label className="font-medium">Quantity:</label>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    -
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    disabled={quantity >= product.stock}
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
                disabled={quantity > product.stock || product.stock === 0}
              >
                <ShoppingCart className="w-4 h-4" />
                {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
              </Button>

              {!user && (
                <p className="text-sm text-gray-600 text-center mt-4">
                  <Link to="/login" className="text-primary hover:underline">Sign in</Link> to add items to cart
                </p>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
