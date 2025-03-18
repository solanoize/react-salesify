import { useState } from "react";
import { useHttp } from "../../../core";
import { BASE_URL } from "../../../config/settings";

export default function useCustomer() {
  const http = useHttp();
  const [customers, setCustomers] = useState([]);

  const list = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const options = {
          credentials: "include",
        }
        const response = await http.get(`${BASE_URL}/customers/`, options);
        const { data } = response;
        setCustomers(data.results);
        resolve(response)
      } catch (error) {
        reject(error)
      }
    });
  }

  return { models: customers, list }
}

