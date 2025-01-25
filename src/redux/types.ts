export interface CampersState {
  items: Camper[];
  camper: Camper | null;
  isLoading: boolean;
  error: number | null | undefined;
  page: number;
  totalPages: number;
}

export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: CamperForm;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: Transmission;
  engine: Engine;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  gallery: GalleryItem[];
  reviews: Review[];
}

export type CamperForm = "alcove" | "fullyIntegrated" | "panelTruck";

export type Transmission = "automatic" | "manual";

export type Engine = "diesel" | "petrol" | "hybrid";

export interface GalleryItem {
  thumb: string;
  original: string;
}

export interface Review {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

export interface FiltersState {
  url: string;
}

export interface FavoritesState {
  items: string[];
}
