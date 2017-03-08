type Trip = {
  name: string;
  location: string;
  description: string;
  image: string;
}

type ListQueryParams = {
  filter?: string;
  order?: string;
  asc?: boolean;
}
