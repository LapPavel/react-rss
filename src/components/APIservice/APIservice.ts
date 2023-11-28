import { StarshipResponse } from '../../interface/interface';

export class APIservice {
  static host = 'https://swapi.dev/api/starships';

  static async getData(
    request: string,
    page: number
  ): Promise<StarshipResponse | null> {
    try {
      const response = await fetch(
        `${this.host}?search=${request}&page=${page}`
      );
      const result: StarshipResponse = await response.json();
      return result;
    } catch {
      return null;
    }
  }
}
