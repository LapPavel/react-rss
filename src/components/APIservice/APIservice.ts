import {
  Starship,
  StarshipResponse,
  DataResponse,
} from '../../interface/interface';

export class APIservice {
  static host = 'https://swapi.dev/api/starships';

  static async getData(
    request: string,
    qtyResult: number,
    page: number,
    totalQty: number = 10
  ): Promise<DataResponse> {
    const qtyStepResult = 10;
    try {
      const response = await fetch(
        `${this.host}?search=${request}&page=${page}`
      );
      const result: StarshipResponse = await response.json();
      const data: Starship[] = [];
      data.push(...result?.results);
      if (totalQty < qtyResult && result.count > totalQty) {
        data.push(
          ...(
            await this.getData(
              request,
              qtyResult,
              page + 1,
              totalQty + qtyStepResult
            )
          ).data
        );
      }
      return {
        data,
        count: result.count,
      };
    } catch {
      throw Error;
    }
  }
}
