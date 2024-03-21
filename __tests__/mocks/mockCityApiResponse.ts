import { CityAPIResponse } from "@services/getCityByNameService";

export const mockCityApiResponse: CityAPIResponse = {
  id: "1",
  name: "London",
  sys: {
    country: "GB",
  },
  coord: {
    lon: -0.1257,
    lat: 51.5085,
  },
};
