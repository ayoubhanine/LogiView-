export interface Parcel {
  id: string;
  reference: string;
  destination: string;
  status: "En transit" | "Livré";
  weight: number;
  shippingDate: string;
}

export interface Vehicle {
  id: string;
  registration: string;
  type: string;
  status: "Disponible" | "En mission";
  driver: string;
  mileage: number;
}