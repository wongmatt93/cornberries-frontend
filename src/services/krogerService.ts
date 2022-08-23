import axios from "axios";
import KrogerResponse from "../models/KrogerResponse";

let token: string | null = null;

export const getAccessToken = async (): Promise<void> => {
  if (!token) {
    token = (
      await axios.post(
        "https://api.kroger.com/v1/connect/oauth2/token",
        "grant_type=client_credentials&scope=product.compact",
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization:
              "Basic dW5pY29ybnNhbmRibHVlYmVycmllcy1jMWU1ZWY0NTk5ODVjOWZkNDFiNzc1MmJkMDNmMzJlNjgwNDQyOTc4MjI0NTkxODMyNDI6UWZFVkhKMm1VaDJpMHl2emotQU5MTlBjMkFQNzladUhWbUFYc1FSOQ==",
          },
        }
      )
    ).data.access_token;
  }
};

export const getProducts = async (): Promise<KrogerResponse> => {
  await getAccessToken();
  return (
    await axios.get("https://api.kroger.com/v1/products", {
      params: { "filter.term": "blueberries" },
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
  ).data;
};
