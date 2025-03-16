import { useMemo, useState } from "react";
import { moduleRegistry } from "../../config/registry";

export default function useModule(navigate) {
  const [modules, ] = useState(moduleRegistry);

  const access = (path) => {
    navigate(`/${path}`, { replace: true });
  };

  const grouping = useMemo(() => {
    return Object.groupBy(Object.values(modules), ({ category }) => category);
  }, []);

  const isEmpty = useMemo(() => {
    return Object.keys(grouping).length > 0 ? false : true;
  }, []);

  return { access, grouping, isEmpty };
}