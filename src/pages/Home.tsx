
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Apple, Wheat } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { mockProducts } from '@/data/mockData';

const Home = () => {
  const categories = [
    { id: 'crops', name: 'Crops', icon: Wheat, color: 'bg-green-100' },
    { id: 'vegetables', name: 'Vegetables', icon: Leaf, color: 'bg-blue-100' },
    { id: 'fruits', name: 'Fruits', icon: Apple, color: 'bg-orange-100' }
  ];

  const featuredProducts = mockProducts.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to e-Soko</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your trusted marketplace for fresh agricultural products directly from local farmers
          </p>
          <Link to="/products" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.id}
                  to={`/products?category=${category.id}`}
                  className="group"
                >
                  <div className={`${category.color} p-8 rounded-lg text-center card-hover`}>
                    <Icon className="w-16 h-16 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-semibold text-gray-800">{category.name}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose e-Soko?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fresh Products</h3>
              <p className="text-gray-600">Direct from farms to your table. We ensure the freshest quality produce.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wheat className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Support Local Farmers</h3>
              <p className="text-gray-600">Your purchase directly supports local farmers and their communities.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Apple className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fair Prices</h3>
              <p className="text-gray-600">Competitive prices that benefit both farmers and consumers.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
