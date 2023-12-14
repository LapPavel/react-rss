import { Starship, StarshipResponse } from '../../interface/interface';

export class APIservice {
  static host = 'https://swapi.dev/api/starships';

  static async getData(
    request: string,
    page: number = 1
  ): Promise<Starship[] | null> {
    try {
      const response = await fetch(
        `${this.host}?search=${request}&page=${page}`
      );
      const result: StarshipResponse = await response.json();
      const data: Starship[] = [];
      data.push(...result?.results);
      if (result.next) {
        data.push(...((await this.getData(request, page + 1)) ?? []));
      }
      return data;
    } catch {
      return null;
    }
  }
}
