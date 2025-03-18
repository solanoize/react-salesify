import { LOCAL_SESSION_ENGINE, LOCAL_SESSION_KEY } from "../../config/settings";
import useUtils from "./useUtils";

export default function useLocalSession() {
  const engine = LOCAL_SESSION_ENGINE;
  const key = LOCAL_SESSION_KEY;
  const utils = useUtils();

  const create = () => {
    engine.setItem(key, utils.generateID);
  };

  const revoke = () => {
    engine.removeItem(key);
  };

  const obtain = () => {
    return localStorage.getItem(key);
  };

  const verify = () => {
    return obtain() ? true : false;
  };

  return { create, revoke, verify };
}