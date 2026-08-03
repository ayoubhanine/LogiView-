import { Parcel,Vehicle } from "../types";
export const parcels: Parcel[] = [
  {
    id: "1",
    reference: "COL-2026-001",
    destination: "Casablanca",
    status: "En transit",
    weight: 12.5,
    shippingDate: "2026-08-01",
  },
  {
    id: "2",
    reference: "COL-2026-002",
    destination: "Rabat",
    status: "Livré",
    weight: 8.2,
    shippingDate: "2026-07-30",
  },
  {
    id: "3",
    reference: "COL-2026-003",
    destination: "Marrakech",
    status: "En transit",
    weight: 20,
    shippingDate: "2026-08-02",
  },
  {
    id: "4",
    reference: "COL-2026-004",
    destination: "Tanger",
    status: "Livré",
    weight: 15.7,
    shippingDate: "2026-07-28",
  },
];

export const vehicles: Vehicle[] = [
  {
    id: "1",
    registration: "12345-A-12",
    type: "Camion",
    status: "Disponible",
    driver: "Ahmed Benali",
    mileage: 125000,
  },
  {
    id: "2",
    registration: "67890-B-34",
    type: "Fourgon",
    status: "En mission",
    driver: "Youssef El Idrissi",
    mileage: 84500,
  },
  {
    id: "3",
    registration: "54321-C-56",
    type: "Camionnette",
    status: "Disponible",
    driver: "Salma Amrani",
    mileage: 65200,
  },
];


// ce fichier joue le role de base de données locale