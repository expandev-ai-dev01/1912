export interface Product {
  id: string;
  name: string;
  description?: string;
  imageUrl: string;
  category: string;
}

export interface ProductListParams {
  page?: number;
  pageSize?: number;
}

export interface ProductListResponse {
  products: Product[];
  pagination: {
    currentPage: number;
    pageSize: number;
    totalPages: number;
    totalItems: number;
  };
}
