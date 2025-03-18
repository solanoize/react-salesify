// https://www.freecodecamp.org/news/use-firebase-authentication-in-a-react-app/
// https://www.freecodecamp.org/news/authenticate-react-app-using-firebase/

import { initializeApp } from "firebase/app";
import { firebaseConfig, LOCAL_SESSION_ENGINE } from "../../config/settings";
import {
  createUserWithEmailAndPassword,
  getAuth,
  getRedirectResult,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from "firebase/auth";

export default function useFirebaseAuth() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider(app);
  const engine = LOCAL_SESSION_ENGINE;
  const key = "GOOGLE-REDIRECT-AUTH";

  const isRedirectProvided = () => (engine.getItem(key) ? true : false);

  const redirectResult = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await getRedirectResult(auth);
        console.log(result)
        if (result) {
          resolve(result);
        } else {
          resolve(null); // No redirect result (user just loaded normally)
        }
      } catch (error) {
        reject(error);
      } finally {
        engine.removeItem(key);
      }
    });
  };

  const signInWithGoogle = () => {
    return new Promise(async (resolve, reject) => {
      try {
        console.log("horee");
        engine.setItem(key, "provided");
        const credential = await signInWithPopup(auth, googleProvider);
        // const credential = await signInWithRedirect(auth, googleProvider);
        console.log(credential);
        resolve(credential);
      } catch (error) {
        reject(error);
      }
    });
  };

  const signUp = (user) => {
    return new Promise(async (resolve, reject) => {
      try {
        const credentials = await createUserWithEmailAndPassword(
          auth,
          user.email,
          user.password
        );
        resolve(credentials);
      } catch (error) {
        reject(error);
      }
    });
  };

  const authenticate = (user) => {
    if (!user) {
      return signInWithGoogle();
    }

    return new Promise(async (resolve, reject) => {
      try {
        const credentials = await signInWithEmailAndPassword(
          auth,
          user.email,
          user.password
        );
        resolve(credentials);
      } catch (error) {
        reject(error);
      }
    });
  };

  const verify = () => {
    return new Promise(async (resolve, reject) => {
      try {
        onAuthStateChanged(auth, (user) => {
          console.log(user);
          if (user) {
            resolve(user);
          } else {
            reject(user);
          }
        });
      } catch (error) {
        reject(error);
      }
    });
  };

  const prevent = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await verify();
        reject(user);
      } catch (error) {
        resolve(error);
      }
    });
  };

  const renew = () => {
    console.warn(
      "This authentication using firebase provider not provide this action!"
    );
  };

  const revoke = () => {
    return new Promise(async (resolve, reject) => {
      try {
        await signOut(auth);
        resolve(true);
      } catch (error) {
        resolve(error);
      }
    });
  };

  return {
    app,
    auth,
    signUp,
    authenticate,
    verify,
    renew,
    prevent,
    revoke,
    isRedirectProvided,
    redirectResult,
  };
}
