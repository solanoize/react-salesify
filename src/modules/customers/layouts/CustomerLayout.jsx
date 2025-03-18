import { Outlet } from "react-router-dom";
import { WidgetBanner, WidgetGuard } from "../../../core";

export default function CustomerLayout() {
  return (
    <>
      <WidgetBanner />
      <WidgetGuard>
        <Outlet />
      </WidgetGuard>
    </>
  );
}
