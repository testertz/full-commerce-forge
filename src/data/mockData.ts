
import { Product } from '@/types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Maize',
    description: 'Fresh yellow maize from Iringa region. High quality grain perfect for various uses.',
    price: 18300,
    category: 'crops',
    image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400',
    sellerId: '1',
    sellerName: 'Omary Omary',
    stock: 100,
    unit: 'kilo',
    location: 'Iringa'
  },
  {
    id: '2',
    name: 'Beans',
    description: 'High quality beans from Iringa. Rich in protein and perfect for cooking.',
    price: 18300,
    category: 'crops',
    image: 'https://images.unsplash.com/photo-1586644811850-57b6cc2de8d9?w=400',
    sellerId: '2',
    sellerName: 'Janet Phillipo',
    stock: 150,
    unit: 'kilo',
    location: 'Iringa'
  },
  {
    id: '3',
    name: 'Millet',
    description: 'Traditional millet grain from Iringa. Nutritious and healthy.',
    price: 18300,
    category: 'crops',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400',
    sellerId: '1',
    sellerName: 'Omary Omary',
    stock: 80,
    unit: 'kilo',
    location: 'Iringa'
  },
  {
    id: '4',
    name: 'Tomatoes',
    description: 'Fresh red tomatoes from local farms. Perfect for cooking and salads.',
    price: 7500,
    category: 'vegetables',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400',
    sellerId: '3',
    sellerName: 'Maria John',
    stock: 200,
    unit: 'kilo',
    location: 'Morogoro'
  },
  {
    id: '5',
    name: 'Onions',
    description: 'Fresh white onions from Arusha region. High quality and long lasting.',
    price: 5000,
    category: 'vegetables',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400',
    sellerId: '4',
    sellerName: 'David Mwanga',
    stock: 300,
    unit: 'kilo',
    location: 'Arusha'
  },
  {
    id: '6',
    name: 'Carrots',
    description: 'Fresh orange carrots from highland farms. Sweet and crunchy.',
    price: 6000,
    category: 'vegetables',
    image: 'https://images.unsplash.com/photo-1522184216316-3c25379f9760?w=400',
    sellerId: '5',
    sellerName: 'Grace Kilimo',
    stock: 120,
    unit: 'kilo',
    location: 'Mbeya'
  },
  {
    id: '7',
    name: 'Bananas',
    description: 'Sweet ripe bananas from coastal regions. Perfect for eating fresh.',
    price: 4000,
    category: 'fruits',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400',
    sellerId: '6',
    sellerName: 'Hassan Ali',
    stock: 250,
    unit: 'bunch',
    location: 'Pwani'
  },
  {
    id: '8',
    name: 'Mangoes',
    description: 'Juicy ripe mangoes from Tanga region. Sweet and delicious.',
    price: 8000,
    category: 'fruits',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400',
    sellerId: '7',
    sellerName: 'Amina Said',
    stock: 180,
    unit: 'kilo',
    location: 'Tanga'
  },
  {
    id: '9',
    name: 'Oranges',
    description: 'Fresh citrus oranges from Morogoro. Rich in vitamin C.',
    price: 6500,
    category: 'fruits',
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400',
    sellerId: '8',
    sellerName: 'Peter Mbogo',
    stock: 200,
    unit: 'kilo',
    location: 'Morogoro'
  }
];
