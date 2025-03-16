import { Button, Col, Container, Row } from "react-bootstrap";
import { WidgetTitle } from "../../../core";
import WelcomeWidgetNavbar from "../widgets/WelcomeWidgetNavbar";
import { useNavigate } from "react-router-dom";
import { MAIN_PATH } from "../../../config/settings";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <WidgetTitle title={"Welcome Page"} />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            sit laudantium recusandae voluptate praesentium quasi! Earum
            impedit, consequatur quaerat perferendis ipsum doloremque veritatis
            enim quae rerum dolor nam assumenda eos?
          </p>
          <Button
            variant="dark"
            onClick={() => navigate(MAIN_PATH, { replace: true })}
          >
            <FaArrowAltCircleLeft /> Back
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
