import { BACKEND_PROVIDER, FIREBASE_APPLICATION, REST_APPLICATION } from "../../config/settings";
import useAuth from "./useAuth";
import useFirebaseAuth from "./useFirebaseAuth";

export default function useAuthStrategies() {
  const auth = useAuth();
  const firebaseAuth = useFirebaseAuth();

  if (BACKEND_PROVIDER === REST_APPLICATION) {
    return { provider: BACKEND_PROVIDER, ...auth };
  } else if (BACKEND_PROVIDER === FIREBASE_APPLICATION) {
    return { provider: BACKEND_PROVIDER, ...firebaseAuth };
  }
}