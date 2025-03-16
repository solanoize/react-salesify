import { useLocation, useNavigate } from "react-router-dom";
import useLocalSession from "../hooks/useLocalSession";
import { useEffect } from "react";
import { MAIN_PATH } from "../../config/settings";

export default function WidgetPrevent({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const localSession = useLocalSession();

  useEffect(() => {
    if (localSession.active()) {
      navigate(MAIN_PATH);
    }
  }, [location]);

  return children;
}
