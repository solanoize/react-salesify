import { useLocation, useNavigate } from "react-router-dom";
import useLocalSession from "../hooks/useLocalSession";
import { ALWAYS_CHECKING_AUTH, SIGNIN_PATH } from "../../config/settings";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

export default function WidgetGuard({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const localSession = useLocalSession();
  const auth = useAuth();

  useEffect(() => {
    if (!localSession.active()) {
      navigate(SIGNIN_PATH, { replace: true });
    } else {
      if (ALWAYS_CHECKING_AUTH) {
        const validate = async () => {
          try {
            await auth.validate();
          } catch (renew) {
            try {
              await auth.renew();
            } catch (error) {
              localSession.revoke();
              navigate(SIGNIN_PATH, { replace: true });
            }
          }
        };

        validate();
      }
    }
  }, [location]);

  return children;
}
