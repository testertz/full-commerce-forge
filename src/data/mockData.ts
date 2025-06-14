
import { Product } from '@/types';

export const mockProducts: Product[] = [
  // Crops
  {
    id: 'crop-1',
    name: 'Organic Maize',
    description: 'Fresh organic maize directly from the farm. Perfect for making ugali and other traditional dishes.',
    price: 2500,
    category: 'crops',
    image: '/placeholder.svg?height=300&width=300',
    sellerId: 'farmer-1',
    sellerName: 'John Mwalimu',
    stock: 50,
    unit: 'kg',
    location: 'Arusha',
  },
  {
    id: 'crop-2',
    name: 'White Rice',
    description: 'Premium quality white rice, carefully selected and cleaned. Great for everyday meals.',
    price: 3200,
    category: 'crops',
    image: '/placeholder.svg?height=300&width=300',
    sellerId: 'farmer-2',
    sellerName: 'Mary Kimani',
    stock: 100,
    unit: 'kg',
    location: 'Mwanza',
  },
  {
    id: 'crop-3',
    name: 'Red Beans',
    description: 'Nutritious red beans rich in protein. Excellent for traditional stews and soups.',
    price: 4500,
    category: 'crops',
    image: '/placeholder.svg?height=300&width=300',
    sellerId: 'farmer-3',
    sellerName: 'Peter Mvungi',
    stock: 30,
    unit: 'kg',
    location: 'Kilimanjaro',
  },
  {
    id: 'crop-4',
    name: 'Sunflower Seeds',
    description: 'High-quality sunflower seeds for oil production or direct consumption.',
    price: 3800,
    category: 'crops',
    image: '/placeholder.svg?height=300&width=300',
    sellerId: 'farmer-4',
    sellerName: 'Grace Mbogo',
    stock: 25,
    unit: 'kg',
    location: 'Dodoma',
  },
  {
    id: 'crop-5',
    name: 'Green Grams',
    description: 'Fresh green grams perfect for healthy meals and traditional preparations.',
    price: 5200,
    category: 'crops',
    image: '/placeholder.svg?height=300&width=300',
    sellerId: 'farmer-5',
    sellerName: 'Joseph Kahema',
    stock: 40,
    unit: 'kg',
    location: 'Mbeya',
  },
  {
    id: 'crop-6',
    name: 'Wheat Flour',
    description: 'Freshly milled wheat flour from local wheat farms. Perfect for baking.',
    price: 2800,
    category: 'crops',
    image: '/placeholder.svg?height=300&width=300',
    sellerId: 'farmer-6',
    sellerName: 'Sarah Mkwawa',
    stock: 60,
    unit: 'kg',
    location: 'Iringa',
  },

  // Vegetables
  {
    id: 'veg-1',
    name: 'Fresh Tomatoes',
    description: 'Juicy red tomatoes harvested fresh from the garden. Perfect for cooking and salads.',
    price: 1500,
    category: 'vegetables',
    image: '/placeholder.svg?height=300&width=300',
    sellerId: 'farmer-7',
    sellerName: 'Anna Msoma',
    stock: 80,
    unit: 'kg',
    location: 'Morogoro',
  },
  {
    id: 'veg-2',
    name: 'Green Cabbage',
    description: 'Fresh and crispy cabbage heads, great for salads and traditional vegetable dishes.',
    price: 1200,
    category: 'vegetables',
    image: '/placeholder.svg?height=300&width=300',
    sellerId: 'farmer-8',
    sellerName: 'Daniel Shayo',
    stock: 45,
    unit: 'piece',
    location: 'Tanga',
  },
  {
    id: 'veg-3',
    name: 'Sweet Potatoes',
    description: 'Nutritious orange sweet potatoes, rich in vitamins and perfect for healthy meals.',
    price: 1800,
    category: 'vegetables',
    image: '/placeholder.svg?height=300&width=300',
    sellerId: 'farmer-9',
    sellerName: 'Elizabeth Mgaya',
    stock: 70,
    unit: 'kg',
    location: 'Kigoma',
  },
  {
    id: 'veg-4',
    name: 'Fresh Onions',
    description: 'Quality red onions that add flavor to any dish. Freshly harvested and sorted.',
    price: 2200,
    category: 'vegetables',
    image: '/placeholder.svg?height=300&width=300',
    sellerId: 'farmer-10',
    sellerName: 'Hassan Mbarouk',
    stock: 55,
    unit: 'kg',
    location: 'Singida',
  },
  {
    id: 'veg-5',
    name: 'Green Peppers',
    description: 'Fresh green bell peppers, perfect for cooking and adding color to your meals.',
    price: 3500,
    category: 'vegetables',
    image: '/placeholder.svg?height=300&width=300',
    sellerId: 'farmer-11',
    sellerName: 'Fatma Said',
    stock: 35,
    unit: 'kg',
    location: 'Pwani',
  },
  {
    id: 'veg-6',
    name: 'Spinach',
    description: 'Fresh green spinach leaves, rich in iron and nutrients for healthy living.',
    price: 1000,
    category: 'vegetables',
    image: '/placeholder.svg?height=300&width=300',
    sellerId: 'farmer-12',
    sellerName: 'Robert Nyong',
    stock: 25,
    unit: 'bunch',
    location: 'Dar es Salaam',
  },
  {
    id: 'veg-7',
    name: 'Carrots',
    description: 'Sweet and crunchy carrots, perfect for cooking, juicing, or eating raw.',
    price: 2800,
    category: 'vegetables',
    image: '/placeholder.svg?height=300&width=300',
    sellerId: 'farmer-13',
    sellerName: 'Amina Juma',
    stock: 40,
    unit: 'kg',
    location: 'Ruvuma',
  },
  {
    id: 'veg-8',
    name: 'Cucumber',
    description: 'Fresh cucumbers with crisp texture, great for salads and refreshing snacks.',
    price: 1600,
    category: 'vegetables',
    image: '/placeholder.svg?height=300&width=300',
    sellerId: 'farmer-14',
    sellerName: 'Michael Lupembe',
    stock: 50,
    unit: 'kg',
    location: 'Kagera',
  },

  // Fruits
  {
    id: 'fruit-1',
    name: 'Sweet Bananas',
    description: 'Ripe and sweet bananas, perfect for snacking or making smoothies.',
    price: 1000,
    category: 'fruits',
    image: '/placeholder.svg?height=300&width=300',
    sellerId: 'farmer-15',
    sellerName: 'Lucy Mwanga',
    stock: 100,
    unit: 'bunch',
    location: 'Bukoba',
  },
  {
    id: 'fruit-2',
    name: 'Fresh Oranges',
    description: 'Juicy oranges packed with vitamin C. Perfect for fresh juice or eating.',
    price: 2000,
    category: 'fruits',
    image: '/placeholder.svg?height=300&width=300',
    sellerId: 'farmer-16',
    sellerName: 'Thomas Mahenge',
    stock: 85,
    unit: 'kg',
    location: 'Lindi',
  },
  {
    id: 'fruit-3',
    name: 'Ripe Mangoes',
    description: 'Sweet and juicy mangoes at perfect ripeness. A tropical delight for everyone.',
    price: 2500,
    category: 'fruits',
    image: '/placeholder.svg?height=300&width=300',
    sellerId: 'farmer-17',
    sellerName: 'Rehema Omary',
    stock: 60,
    unit: 'kg',
    location: 'Mtwara',
  },
  {
    id: 'fruit-4',
    name: 'Fresh Pineapples',
    description: 'Sweet and tangy pineapples, freshly harvested and ready to eat.',
    price: 1500,
    category: 'fruits',
    image: '/placeholder.svg?height=300&width=300',
    sellerId: 'farmer-18',
    sellerName: 'Francis Mlowe',
    stock: 30,
    unit: 'piece',
    location: 'Zanzibar',
  },
  {
    id: 'fruit-5',
    name: 'Watermelons',
    description: 'Large, sweet watermelons perfect for hot days. Refreshing and hydrating.',
    price: 3000,
    category: 'fruits',
    image: '/placeholder.svg?height=300&width=300',
    sellerId: 'farmer-19',
    sellerName: 'Joyce Mbwambo',
    stock: 20,
    unit: 'piece',
    location: 'Shinyanga',
  },
  {
    id: 'fruit-6',
    name: 'Avocados',
    description: 'Creamy avocados rich in healthy fats. Perfect for salads and healthy eating.',
    price: 4000,
    category: 'fruits',
    image: '/placeholder.svg?height=300&width=300',
    sellerId: 'farmer-20',
    sellerName: 'Ibrahim Rajabu',
    stock: 45,
    unit: 'kg',
    location: 'Kilimanjaro',
  },
  {
    id: 'fruit-7',
    name: 'Passion Fruits',
    description: 'Aromatic passion fruits with intense flavor, great for juices and desserts.',
    price: 3500,
    category: 'fruits',
    image: '/placeholder.svg?height=300&width=300',
    sellerId: 'farmer-21',
    sellerName: 'Neema Moshi',
    stock: 35,
    unit: 'kg',
    location: 'Arusha',
  },
  {
    id: 'fruit-8',
    name: 'Papaya',
    description: 'Sweet and soft papaya fruits, rich in vitamins and perfect for breakfast.',
    price: 1800,
    category: 'fruits',
    image: '/placeholder.svg?height=300&width=300',
    sellerId: 'farmer-22',
    sellerName: 'Said Masoud',
    stock: 40,
    unit: 'piece',
    location: 'Pemba',
  },
  {
    id: 'fruit-9',
    name: 'Coconuts',
    description: 'Fresh coconuts with sweet water and meat. Perfect for drinking and cooking.',
    price: 800,
    category: 'fruits',
    image: '/placeholder.svg?height=300&width=300',
    sellerId: 'farmer-23',
    sellerName: 'Mwalimu Juma',
    stock: 90,
    unit: 'piece',
    location: 'Dar es Salaam',
  },
  {
    id: 'fruit-10',
    name: 'Lemons',
    description: 'Fresh lemons with high acidity, perfect for cooking, drinks, and preservation.',
    price: 2800,
    category: 'fruits',
    image: '/placeholder.svg?height=300&width=300',
    sellerId: 'farmer-24',
    sellerName: 'Halima Mwenda',
    stock: 55,
    unit: 'kg',
    location: 'Tabora',
  }
];
