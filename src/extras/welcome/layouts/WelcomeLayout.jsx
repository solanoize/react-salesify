import { Outlet } from "react-router-dom";
import { WidgetBanner } from "../../../core";

export default function WelcomeLayout() {
  return (
    <>
      <WidgetBanner />
      <Outlet />
    </>
  );
}
