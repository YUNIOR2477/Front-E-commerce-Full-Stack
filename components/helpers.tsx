import { AxiosResponse } from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const storeUser = (response: AxiosResponse<any, any>) => {
  localStorage.setItem(
    "user",
    JSON.stringify({
      username: response.data.username,
      jwt: response.data.jwt,
    })
  );
};

export const userData=()=>{
    const stringFieldUser= localStorage.getItem("user");
    return JSON.parse(stringFieldUser || "");
}