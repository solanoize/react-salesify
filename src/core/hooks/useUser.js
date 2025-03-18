import { useState } from "react";

export default function useUser() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const setUsername = (e) => {
    let newValue = e.target.value;
    setUser((value) => ({ ...value, username: newValue }));
  };

  const setPassword = (e) => {
    let newValue = e.target.value;
    setUser((value) => ({ ...value, password: newValue }));
  };

  const setEmail = (e) => {
    let newValue = e.target.value;
    setUser((value) => ({ ...value, email: newValue }));
  };

  return {
    model: user,
    setUsername,
    setPassword,
    setEmail,
  };
}