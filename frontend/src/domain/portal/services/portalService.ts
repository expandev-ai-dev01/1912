import { publicClient } from '@/core/lib/api';
import type { ProductListParams, ProductListResponse, CompanyProfile } from '../types';

export const portalService = {
  async getProducts(params?: ProductListParams): Promise<ProductListResponse> {
    const { data } = await publicClient.get('/portal/products', { params });
    return data.data;
  },

  async getProfile(): Promise<CompanyProfile> {
    const { data } = await publicClient.get('/portal/profile');
    return data.data;
  },
};
