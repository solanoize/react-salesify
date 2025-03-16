import { Col, Container, Row } from "react-bootstrap";
import { WidgetCardModules, WidgetTitle } from "../widgets";

export default function PageDashboard() {
  return (
    <>
      <Container>
        <WidgetTitle title={"Module Manager"} />
        <Row>
          <Col>
            <WidgetCardModules />
          </Col>
        </Row>
      </Container>
    </>
  );
}
