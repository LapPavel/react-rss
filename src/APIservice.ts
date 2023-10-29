import { VehicleResponse } from './interface/interface';

export class APIservice {
  static host = 'https://swapi.dev/api/starships';

  static async getData(
    request: string,
    page: number
  ): Promise<VehicleResponse> {
    try {
      const response = await fetch(
        `${this.host}?search=${request}&page=${page}`
      );
      const result: VehicleResponse = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  }
}
