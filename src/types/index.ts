
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'customer' | 'farmer';
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
  isInitialized: boolean;
  refreshSession: () => void;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  unit: string;
  sellerId: string;
  sellerName: string;
  location: string;
}

export interface CartItem {
  id: string;
  productId: string;
  quantity: number;
  price: number;
  product: Product;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
}
