import { Container, Navbar } from "react-bootstrap";
import { BRAND_NAME } from "../../config/settings";
import WidgetLogoutButton from "./WidgetLogoutButton";

/**
 * WidgetBanner component renders a dark-themed navigation bar using react-bootstrap.
 * It displays the brand name and a logout button.
 *
 * @component
 * @example
 * return (
 *   <WidgetBanner />
 * )
 */
export default function WidgetBanner() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand className="fw-bold">{BRAND_NAME}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <WidgetLogoutButton />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
