import useStatusMessage from "./useStatusMessage";

export default function useHttp() {
  const statusMessage = useStatusMessage();

  const request = (url, options) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        const ok = response.ok;
        const status = response.status;
        const payload = {
          data,
          ok,
          status,
          message: statusMessage.get(status),
        };

        ok ? resolve(payload) : reject(payload);
      } catch (error) {
        const payload = { data: null, ok: false, status: 0, message: error };
        reject(payload);
      }
    });
  };

  const post = (url, options) => {
    const customOptions = { ...options, method: "POST" };
    return request(url, customOptions);
  };

  const get = (url, options) => {
    const customOptions = { ...options, method: "GET" };
    return request(url, customOptions);
  };

  const put = (url, options) => {
    const customOptions = { ...options, method: "PUT" };
    return request(url, customOptions);
  };

  const patch = (url, options) => {
    const customOptions = { ...options, method: "PATCH" };
    return request(url, customOptions);
  };

  const del = (url, options) => {
    const customOptions = { ...options, method: "DELETE" };
    return request(url, customOptions);
  };

  return {
    request,
    post,
    get,
    put,
    patch,
    del,
  };
}