export interface FormProps {
  loadStatusChange: (status: boolean) => void;
  returnResult: (data: StarshipResponse | null) => void;
}

export interface ResultProps {
  result: StarshipResponse | null;
  isLoad: boolean;
  toggleTestError: () => void;
}

export interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  created: string;
  edited: string;
  url: string;
}

export interface StarshipResponse {
  count: number;
  next?: string;
  previous?: string;
  results: Starship[];
}
