export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  short_description: string;
  price: number;
  sale_price: number | null;
  effective_price: number;
  discount_percentage: number;
  stock_quantity: number;
  in_stock: boolean;
  is_active: boolean;
  is_featured: boolean;
  weight: number | null;
  meta_data: {
    brand?: string;
    warranty?: string;
    [key: string]: unknown;
  };
  category: Category | null;
  images: ProductImage[];
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  image: string | null;
  parent_id: number | null;
  is_active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface ProductImage {
    id: string,
    product_id: string,
    image_path: string,
    is_primary: boolean,
    sort_order: number

}