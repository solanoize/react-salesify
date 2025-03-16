import { Outlet } from "react-router-dom";
import { WidgetBanner, WidgetGuard } from "../../../core";

export default function ProductLayout() {
  return (
    <>
      <WidgetBanner />
      <WidgetGuard>
        <Outlet />
      </WidgetGuard>
    </>
  );
}
