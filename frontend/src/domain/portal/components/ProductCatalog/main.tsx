import { useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import { ProductCard } from '../ProductCard';
import { LoadingSpinner } from '@/core/components/loading-spinner';
import { Alert, AlertDescription, AlertTitle } from '@/core/components/alert';
import { Button } from '@/core/components/button';
import { ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';
import { cn } from '@/core/lib/utils';

function ProductCatalog() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  const { data, isLoading, isError, error } = useProducts({
    page: currentPage,
    pageSize,
  });

  if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <LoadingSpinner className="h-8 w-8" />
      </div>
    );
  }

  if (isError) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Erro ao carregar produtos</AlertTitle>
        <AlertDescription>
          {error instanceof Error
            ? error.message
            : 'Não foi possível carregar os produtos. Tente novamente mais tarde.'}
        </AlertDescription>
      </Alert>
    );
  }

  if (!data?.products?.length) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 rounded-lg border border-dashed p-12 text-center">
        <AlertCircle className="text-muted-foreground h-12 w-12" />
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Nenhum produto encontrado</h3>
          <p className="text-muted-foreground text-sm">Não há produtos disponíveis no momento.</p>
        </div>
      </div>
    );
  }

  const groupedProducts = data.products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, typeof data.products>);

  const totalPages = data.pagination?.totalPages || 1;
  const canGoPrevious = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  return (
    <div className="space-y-8">
      <div className="space-y-12">
        {Object.entries(groupedProducts).map(([category, products]) => (
          <section key={category} className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">{category}</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={!canGoPrevious}
            aria-label="Página anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? 'default' : 'outline'}
                size="icon"
                onClick={() => setCurrentPage(page)}
                className={cn('h-9 w-9', currentPage === page && 'pointer-events-none')}
                aria-label={`Página ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </Button>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={!canGoNext}
            aria-label="Próxima página"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}

export { ProductCatalog };
