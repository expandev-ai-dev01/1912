import { useQuery } from '@tanstack/react-query';
import { portalService } from '../../services/portalService';

export const useProfile = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: () => portalService.getProfile(),
    staleTime: 1000 * 60 * 10,
  });
};
