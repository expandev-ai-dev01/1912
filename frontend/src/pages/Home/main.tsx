import { ProductCatalog } from '@/domain/portal/components/ProductCatalog';
import { CompanyInfo } from '@/domain/portal/components/CompanyInfo';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/core/components/tabs';
import { Package, Building2 } from 'lucide-react';

function HomePage() {
  return (
    <div className="space-y-8 py-8">
      <header className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Hortifrutti</h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
          Produtos frescos e de qualidade para você e sua família
        </p>
      </header>

      <Tabs defaultValue="products" className="w-full">
        <TabsList className="mx-auto grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="products" className="gap-2">
            <Package className="h-4 w-4" />
            Produtos
          </TabsTrigger>
          <TabsTrigger value="about" className="gap-2">
            <Building2 className="h-4 w-4" />
            Sobre Nós
          </TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="mt-8">
          <ProductCatalog />
        </TabsContent>

        <TabsContent value="about" className="mt-8">
          <CompanyInfo />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export { HomePage };
