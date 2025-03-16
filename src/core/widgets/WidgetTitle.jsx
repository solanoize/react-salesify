import { Col, Row } from "react-bootstrap";

export default function WidgetTitle({ title }) {
  return (
    <Row className="mb-3">
      <Col>
        <h4>{title}</h4>
      </Col>
    </Row>
  );
}
