import { Starship, StarshipResponse } from '../../interface/interface';

export class APIservice {
  static host = 'https://swapi.dev/api/starships';

  static async getData(
    signal: AbortSignal,
    request: string,
    page: number = 1
  ): Promise<Starship[] | null> {
    try {
      const response = await fetch(
        `${this.host}?search=${request}&page=${page}`,
        { signal }
      );
      const result: StarshipResponse = await response.json();
      const data: Starship[] = [];
      data.push(...result?.results);
      if (result.next) {
        data.push(...((await this.getData(signal, request, page + 1)) ?? []));
      }
      return data;
    } catch {
      return null;
    }
  }
}
