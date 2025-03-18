import { useLocation, useNavigate } from "react-router-dom";
import { SIGNIN_PATH } from "../../config/settings";
import { useEffect } from "react";
import { useAuthStrategies } from "../hooks";

export default function WidgetGuard({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const authStrategies = useAuthStrategies();
  useEffect(() => {
    authStrategies
      .verify()
      .then(() => {
        // nothing here, you can add logic!
      })
      .catch(() => {
        navigate(SIGNIN_PATH, { replace: true });
      });
  }, [location]);

  return children;
}
