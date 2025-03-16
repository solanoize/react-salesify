import { Outlet } from "react-router-dom";
import { WidgetBanner, WidgetGuard } from "../widgets";

export default function LayoutDashboard() {
  return (
    <>
      <WidgetBanner />
      <div className="mt-3"></div>
      <WidgetGuard>
        <Outlet />
      </WidgetGuard>
    </>
  );
}
