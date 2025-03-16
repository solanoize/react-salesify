import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormGroup,
  Row,
} from "react-bootstrap";
import { BRAND_NAME, MAIN_PATH } from "../../config/settings";
import { useAuth, useSession, useUser } from "../hooks";

export default function PageSignIn() {
  const navigate = useNavigate();
  const user = useUser();
  const auth = useAuth();
  const localSession = useSession();

  const [loading, setLoading] = useState(false);

  const signIn = () => {
    setLoading(true);
    auth
      .signIn(user.model)
      .then(() => {
        localSession.create();
        navigate(MAIN_PATH, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center w-auto mt-4">
          <Col md={4}>
            <Card className="border-0">
              <Card.Body>
                <Card.Title>
                  <div>
                    <h4>{BRAND_NAME}</h4>
                  </div>
                </Card.Title>
                <FormGroup className="mt-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    disabled={loading}
                    value={user.model.username}
                    onChange={user.setUsername}
                    size="lg"
                    className="bg-light"
                  />
                </FormGroup>
                <FormGroup className="mt-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    disabled={loading}
                    type="password"
                    size="lg"
                    className="bg-light"
                    value={user.model.password}
                    onChange={user.setPassword}
                  />
                </FormGroup>
                <div className="d-grid gap-2 mt-4">
                  <Button
                    disabled={loading}
                    onClick={signIn}
                    variant="dark"
                    size="lg"
                  >
                    Sign In
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
