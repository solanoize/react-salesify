import { useNavigate } from "react-router-dom";
import useLocalSession from "../hooks/useLocalSession";
import { SIGNIN_PATH } from "../../config/settings";
import { FaSignOutAlt } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { Button } from "react-bootstrap";

/**
 * WidgetLogoutButton component renders a button that allows the user to sign out.
 * It uses the `useNavigate` hook from react-router-dom to navigate to the sign-in page after signing out.
 * It also uses custom hooks `useLocalSession` and `useAuth` to handle session and authentication logic.
 *
 * @component
 * @example
 * return (
 *   <WidgetLogoutButton />
 * )
 *
 * @returns {JSX.Element} A button that triggers the sign-out process when clicked.
 */
export default function WidgetLogoutButton() {
  /**
   * Widget yang berisi pemanggilan useNavigate wajib ditempatkan dalam
   * konteks router seperti BrowserRouter, HashRouter atau MemoryRouter (for testing)
   */
  const navigate = useNavigate();
  const localSession = useLocalSession();
  const auth = useAuth();

  const signOut = async () => {
    const handler = async () => {
      await auth.signOut();
      localSession.revoke();
      navigate(SIGNIN_PATH, { replace: true });
    };
    try {
      await handler();
    } catch (error) {
      try {
        await auth.renew();
        setTimeout(async () => {
          await handler();
        }, 400);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Button className="text-secondary" variant="dark" onClick={signOut}>
      <FaSignOutAlt /> {"  "}
      Sign Out
    </Button>
  );
}
