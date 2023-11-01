import { StarshipsResponse } from '../../interface/interface';

export class APIservice {
  static host = 'https://swapi.dev/api/starships';

  static async getData(
    request: string,
    page: number
  ): Promise<StarshipsResponse | null> {
    try {
      const response = await fetch(
        `${this.host}?search=${request}&page=${page}`
      );
      const result: StarshipsResponse = await response.json();
      return result;
    } catch {
      return null;
    }
  }
}
