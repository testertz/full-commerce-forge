
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Apple, Wheat, Star, Shield, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import ProductCarousel from '@/components/ProductCarousel';
import { mockProducts } from '@/data/mockData';

const Home = () => {
  const categories = [
    { id: 'crops', name: 'Crops', icon: Wheat, color: 'bg-green-100' },
    { id: 'vegetables', name: 'Vegetables', icon: Leaf, color: 'bg-blue-100' },
    { id: 'fruits', name: 'Fruits', icon: Apple, color: 'bg-orange-100' }
  ];

  const featuredProducts = mockProducts.slice(0, 8);
  const newArrivals = mockProducts.slice(8, 16);

  const features = [
    {
      icon: Leaf,
      title: 'Fresh Products',
      description: 'Direct from farms to your table. We ensure the freshest quality produce.',
    },
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'All products are verified and meet our high quality standards.',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery to your doorstep across Tanzania.',
    },
    {
      icon: Star,
      title: 'Trusted Platform',
      description: 'Join thousands of satisfied customers who trust e-Soko.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-green-600 text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Welcome to e-Soko
              </h1>
              <p className="text-xl mb-8 max-w-2xl">
                Your trusted marketplace for fresh agricultural products directly from local farmers
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link to="/products" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Shop Now
                </Link>
                <Link to="/register" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                  Join as Seller
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <img
                src="/placeholder.svg"
                alt="Fresh produce"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Shop by Category
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link
                    to={`/products?category=${category.id}`}
                    className="group block"
                  >
                    <div className={`${category.color} p-8 rounded-lg text-center transition-all duration-300 hover:shadow-lg`}>
                      <Icon className="w-16 h-16 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                      <h3 className="text-2xl font-semibold text-gray-800">{category.name}</h3>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Carousel */}
      <ProductCarousel products={featuredProducts} title="Featured Products" />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Why Choose e-Soko?
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* New Arrivals Carousel */}
      <div className="bg-gray-50">
        <ProductCarousel products={newArrivals} title="New Arrivals" />
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers and start supporting local farmers today.
            </p>
            <Link to="/products" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Explore Products
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
