import { Card, CardContent } from '@/core/components/card';
import type { Product } from '../../types';
import { cn } from '@/core/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Card className={cn('overflow-hidden transition-all hover:shadow-lg', className)}>
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover transition-transform hover:scale-105"
          loading="lazy"
        />
      </div>
      <CardContent className="space-y-2 p-4">
        <h3 className="line-clamp-1 text-lg font-semibold">{product.name}</h3>
        {product.description && (
          <p className="text-muted-foreground line-clamp-2 text-sm">{product.description}</p>
        )}
      </CardContent>
    </Card>
  );
}

export { ProductCard };
