import { BASE_URL, LOCAL_AUTHENTICATION_VERIFY, LOCAL_SESSION_ENGINE, LOCAL_SESSION_KEY } from "../../config/settings";
import useHttp from "./useHttp";
import useUtils from "./useUtils";

export default function useAuth() {
  const http = useHttp();
  const utils = useUtils();
  const engine = LOCAL_SESSION_ENGINE;
  const key = LOCAL_SESSION_KEY;

  const authenticate = (user) => {
    return new Promise(async (resolve, reject) => {
      try {
        const options = {
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: user.username,
            password: user.password
          }),
        };

        const response = await http.post(`${BASE_URL}/auth/`, options);
        engine.setItem(key, utils.generateID);
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  };

  const revoke = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const options = { credentials: "include" };
        const response = await http.post(`${BASE_URL}/auth/logout/`, options);
        engine.removeItem(key);
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
    if (LOCAL_AUTHENTICATION_VERIFY) {
      return new Promise((resolve, reject) => {
        if (engine.getItem(key)) {
          resolve(true);
        } else {
          reject(false);
        }
      });
    }

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

  const prevent = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await verify();
        reject(result);
      } catch (error) {
        resolve(error);
      }
    });
  }

  return {
    authenticate,
    renew,
    revoke,
    verify,
    prevent,
  };
}