export interface FormProps {
  loadStatusCHange: (status: boolean) => void;
  returnResult: (data: StarshipsResponse | null) => void;
}

export interface ResultProps {
  result: StarshipsResponse | null;
  isLoad: boolean;
  toggleTestError: () => void;
}

export interface Starships {
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

export interface StarshipsResponse {
  count: number;
  next?: string;
  previous?: string;
  results: Starships[];
}
