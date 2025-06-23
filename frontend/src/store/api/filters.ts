import REQUEST_METHODS from "../../constants/http-methods";
import { baseCreateApi } from "./baseCreateApi";

export interface IModuleResponse {
  message: string;
}

export const filtersApi = baseCreateApi.injectEndpoints({
  endpoints: (builder) => ({
    getIngredients: builder.query<any, void>({
      query: () => ({
        url: "https://www.themealdb.com/api/json/v1/1/list.php?i=list",
        method: REQUEST_METHODS.GET,
      }),
    }),
  }),
});

export const { useGetIngredientsQuery } = filtersApi;
