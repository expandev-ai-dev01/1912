/**
 * @summary
 * Type definitions for the Portal feature.
 * Includes interfaces for Product, CompanyProfile, and response structures.
 *
 * @module services/portal/portalTypes
 */

/**
 * @interface Product
 * @description Represents a product in the catalog
 */
export interface Product {
  id: string;
  name: string;
  description: string | null;
  imageUrl: string;
  category: string;
}

/**
 * @interface CompanyProfile
 * @description Represents the institutional information of the company
 */
export interface CompanyProfile {
  history: string;
  mission: string;
  values: string;
  address: string;
  businessHours: string;
  mapCoordinates: {
    latitude: number;
    longitude: number;
  };
  contact: {
    phone: string;
    email: string;
  };
}

/**
 * @interface ProductListResponse
 * @description Response structure for paginated product list
 */
export interface ProductListResponse {
  products: Product[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}
