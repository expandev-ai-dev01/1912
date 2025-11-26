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
  contactPhone: string;
  contactEmail: string;
}
