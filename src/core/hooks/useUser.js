import { useState } from "react";

export default function useUser() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const setUsername = (e) => {
    let newValue = e.target.value;
    setUser((value) => ({ ...value, username: newValue }));
  };

  const setPassword = (e) => {
    let newValue = e.target.value;
    setUser((value) => ({ ...value, password: newValue }));
  };

  return {
    model: user,
    setUsername,
    setPassword,
  };
}