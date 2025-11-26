import { useQuery } from '@tanstack/react-query';
import { portalService } from '../../services/portalService';
import type { ProductListParams } from '../../types';

export const useProducts = (params?: ProductListParams) => {
  return useQuery({
    queryKey: ['products', params],
    queryFn: () => portalService.getProducts(params),
    staleTime: 1000 * 60 * 5,
  });
};
