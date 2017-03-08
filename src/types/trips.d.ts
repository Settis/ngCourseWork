type Trip = {
  name: string;
  location: string;
  description: string;
  image: string;
  lat: number;
  lng: number;
}

type LatLng = {
  lat: number;
  lng: number;
}

type ListQueryParams = {
  filter?: string;
  order?: string;
  asc?: boolean;
}
