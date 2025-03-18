import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { MAIN_PATH } from "../../config/settings";
import { useAuthStrategies } from "../hooks";

export default function WidgetPrevent({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const authStrategies = useAuthStrategies();

  useEffect(() => {
    authStrategies
      .prevent()
      .then(() => {
        // nothing here, you can add logic!
      })
      .catch(() => {
        navigate(MAIN_PATH);
      });
  }, [location]);

  return children;
}
