type Place = {
  name: string;
  description: string;
}

type Trip = {
  name: string;
  description: string;
  image: string;
  places: Place[];
}
