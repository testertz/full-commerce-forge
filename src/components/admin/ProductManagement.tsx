import React, { useState } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Product } from '@/types';
import ProductForm from './ProductForm';
import ProductCategoryStats from './ProductCategoryStats';
import ProductCategoryFilter from './ProductCategoryFilter';

interface ProductManagementProps {
  products: Product[];
  onAddProduct: (productData: any) => void;
  onEditProduct: (productId: string, productData: any) => void;
  onDeleteProduct: (productId: string) => void;
}

const ProductManagement = ({ products, onAddProduct, onEditProduct, onDeleteProduct }: ProductManagementProps) => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '' as 'crops' | 'vegetables' | 'fruits' | '',
    image: '',
    stock: '',
    unit: '',
    location: '',
    sellerName: '',
  });
  const [categoryFilter, setCategoryFilter] = useState<string>('');

  const handleAddProduct = () => {
    if (!formData.category) return;
    
    const newProductData = {
      name: formData.name,
      description: formData.description,
      price: Number(formData.price),
      category: formData.category as 'crops' | 'vegetables' | 'fruits',
      image: formData.image || '/placeholder.svg',
      stock: Number(formData.stock),
      unit: formData.unit,
      location: formData.location,
      sellerName: formData.sellerName,
    };
    
    onAddProduct(newProductData);
    resetForm();
    setIsAddDialogOpen(false);
  };

  const handleEditProduct = () => {
    if (!selectedProduct || !formData.category) return;
    
    const updatedProductData = {
      name: formData.name,
      description: formData.description,
      price: Number(formData.price),
      category: formData.category as 'crops' | 'vegetables' | 'fruits',
      image: formData.image || selectedProduct.image,
      stock: Number(formData.stock),
      unit: formData.unit,
      location: formData.location,
      sellerName: formData.sellerName,
    };
    
    onEditProduct(selectedProduct.id, updatedProductData);
    resetForm();
    setIsEditDialogOpen(false);
    setSelectedProduct(null);
  };

  const openEditDialog = (product: Product) => {
    setSelectedProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      category: product.category as 'crops' | 'vegetables' | 'fruits' | '',
      image: product.image,
      stock: product.stock.toString(),
      unit: product.unit,
      location: product.location,
      sellerName: product.sellerName,
    });
    setIsEditDialogOpen(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      price: '',
      category: '',
      image: '',
      stock: '',
      unit: '',
      location: '',
      sellerName: '',
    });
  };

  // Filter products by selected category.
  const filteredProducts = categoryFilter
    ? products.filter((p) => p.category === categoryFilter)
    : products;

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <CardTitle>Products Management</CardTitle>
            <CardDescription>Manage all products in your store</CardDescription>
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add Product
              </Button>
            </DialogTrigger>
            <ProductForm
              formData={formData}
              setFormData={setFormData}
              onSubmit={handleAddProduct}
              onCancel={() => setIsAddDialogOpen(false)}
            />
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4">
          <ProductCategoryFilter value={categoryFilter} onChange={setCategoryFilter} />
          <div className="flex-1">
            <ProductCategoryStats />
          </div>
        </div>
        <div className="overflow-x-auto mt-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell className="capitalize">{product.category}</TableCell>
                  <TableCell>TSh {product.price.toLocaleString()}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>{product.location}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openEditDialog(product)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => onDeleteProduct(product.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>

      {/* Edit Product Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <ProductForm
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleEditProduct}
          onCancel={() => setIsEditDialogOpen(false)}
          isEdit={true}
        />
      </Dialog>
    </Card>
  );
};

export default ProductManagement;
