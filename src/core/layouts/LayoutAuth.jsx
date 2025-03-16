import { Outlet } from "react-router-dom";
import { WidgetPrevent } from "../widgets";

export default function LayoutAuth() {
  return (
    <>
      <div className="mt-3"></div>
      <WidgetPrevent>
        <Outlet />
      </WidgetPrevent>
    </>
  );
}
