import { BASE_URL } from "../../config/settings";
import useHttp from "./useHttp";

export default function useAuth() {
  const http = useHttp();

  const signIn = (user) => {
    return new Promise(async (resolve, reject) => {
      try {
        const options = {
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        };

        const response = await http.post(`${BASE_URL}/auth/`, options);
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  };

  const signOut = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const options = { credentials: "include" };
        const response = await http.post(`${BASE_URL}/auth/logout/`, options);
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  };

  const renew = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const options = { credentials: "include" };
        const response = await http.post(`${BASE_URL}/auth/refresh/`, options);
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  };

  const verify = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const options = {
          credentials: "include",
        };
        const response = await http.post(`${BASE_URL}/auth/check/`, options);
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  };

  return {
    signIn,
    renew,
    signOut,
    verify,
  };
}