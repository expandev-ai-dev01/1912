import { useProfile } from '../../hooks/useProfile';
import { Card, CardContent, CardHeader, CardTitle } from '@/core/components/card';
import { LoadingSpinner } from '@/core/components/loading-spinner';
import { Alert, AlertDescription, AlertTitle } from '@/core/components/alert';
import { Separator } from '@/core/components/separator';
import { MapPin, Clock, Phone, Mail, AlertCircle } from 'lucide-react';

function CompanyInfo() {
  const { data: profile, isLoading, isError } = useProfile();

  if (isLoading) {
    return (
      <div className="flex min-h-[200px] items-center justify-center">
        <LoadingSpinner className="h-8 w-8" />
      </div>
    );
  }

  if (isError || !profile) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Erro ao carregar informações</AlertTitle>
        <AlertDescription>
          Não foi possível carregar as informações da empresa. Tente novamente mais tarde.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="space-y-8">
      <section className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Nossa História</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">{profile.history}</p>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Missão</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{profile.mission}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Valores</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{profile.values}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Localização e Contato</h2>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardContent className="space-y-4 pt-6">
              <div className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 h-5 w-5 shrink-0" />
                <div className="space-y-1">
                  <h3 className="font-semibold">Endereço</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{profile.address}</p>
                </div>
              </div>

              <Separator />

              <div className="flex items-start gap-3">
                <Clock className="text-primary mt-1 h-5 w-5 shrink-0" />
                <div className="space-y-1">
                  <h3 className="font-semibold">Horário de Funcionamento</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {profile.businessHours}
                  </p>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="text-primary h-5 w-5 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Telefone</h3>
                    <a
                      href={`tel:${profile.contactPhone}`}
                      className="text-muted-foreground hover:text-primary text-sm transition-colors"
                    >
                      {profile.contactPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="text-primary h-5 w-5 shrink-0" />
                  <div>
                    <h3 className="font-semibold">E-mail</h3>
                    <a
                      href={`mailto:${profile.contactEmail}`}
                      className="text-muted-foreground hover:text-primary text-sm transition-colors"
                    >
                      {profile.contactEmail}
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video w-full">
                <iframe
                  title="Localização da empresa"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${profile.mapCoordinates.latitude},${profile.mapCoordinates.longitude}&zoom=15`}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

export { CompanyInfo };
