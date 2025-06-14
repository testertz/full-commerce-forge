
import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthContextType, User } from '@/types';
import { toast } from 'sonner';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const savedUser = localStorage.getItem('user');
        const sessionExpiry = localStorage.getItem('sessionExpiry');
        
        if (savedUser && sessionExpiry) {
          const expiryTime = new Date(sessionExpiry);
          const now = new Date();
          
          if (now < expiryTime) {
            const userData = JSON.parse(savedUser);
            setUser(userData);
            console.log('Session restored for user:', userData.email);
          } else {
            // Session expired
            localStorage.removeItem('user');
            localStorage.removeItem('sessionExpiry');
            console.log('Session expired, clearing stored data');
          }
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
        localStorage.removeItem('user');
        localStorage.removeItem('sessionExpiry');
      } finally {
        setLoading(false);
        setIsInitialized(true);
      }
    };

    initializeAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      console.log('Attempting login for:', email);
      
      // Simulate API call with proper validation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check for admin credentials
      const isAdmin = email === 'admin@e-soko.com' && password === 'admin123';
      
      const mockUser: User = {
        id: isAdmin ? 'admin-1' : '1',
        email,
        name: isAdmin ? 'Admin User' : email.split('@')[0],
        role: isAdmin ? 'admin' : 'customer'
      };
      
      // Set session expiry (24 hours from now)
      const expiryTime = new Date();
      expiryTime.setHours(expiryTime.getHours() + 24);
      
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      localStorage.setItem('sessionExpiry', expiryTime.toISOString());
      
      console.log('Login successful for:', mockUser.email, 'Role:', mockUser.role);
      toast.success(`Welcome back, ${mockUser.name}!`);
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login failed. Please try again.');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (email: string, password: string, name: string) => {
    try {
      setLoading(true);
      console.log('Attempting registration for:', email);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser: User = {
        id: Date.now().toString(),
        email,
        name,
        role: 'customer'
      };
      
      // Set session expiry (24 hours from now)
      const expiryTime = new Date();
      expiryTime.setHours(expiryTime.getHours() + 24);
      
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      localStorage.setItem('sessionExpiry', expiryTime.toISOString());
      
      console.log('Registration successful for:', mockUser.email);
      toast.success(`Welcome to e-Soko, ${mockUser.name}!`);
    } catch (error) {
      console.error('Registration error:', error);
      toast.error('Registration failed. Please try again.');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    console.log('Logging out user:', user?.email);
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('sessionExpiry');
    toast.success('Logged out successfully!');
  };

  const refreshSession = () => {
    if (user) {
      const expiryTime = new Date();
      expiryTime.setHours(expiryTime.getHours() + 24);
      localStorage.setItem('sessionExpiry', expiryTime.toISOString());
      console.log('Session refreshed for user:', user.email);
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      register, 
      logout, 
      loading, 
      isInitialized,
      refreshSession 
    }}>
      {children}
    </AuthContext.Provider>
  );
};
