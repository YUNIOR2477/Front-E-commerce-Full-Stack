import { AxiosResponse } from "axios";
export const storeUser = (
  response: AxiosResponse<{ username: string; jwt: string }>
) => {
  localStorage.setItem(
    "user",
    JSON.stringify({ username: response.data.username, jwt: response.data.jwt })
  );
};
export const userData = () => {
  const stringFieldUser = localStorage.getItem("user");
  return stringFieldUser ? JSON.parse(stringFieldUser) : null;
};
