import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormGroup,
  Row,
} from "react-bootstrap";
import {
  BACKEND_PROVIDER,
  BRAND_NAME,
  FIREBASE_APPLICATION,
  MAIN_PATH,
  REST_APPLICATION,
} from "../../config/settings";
import {
  useAuth,
  useAuthStrategies,
  useFirebaseAuth,
  useSession,
  useUser,
} from "../hooks";
import { FaGoogle } from "react-icons/fa";

export default function PageSignIn() {
  const navigate = useNavigate();
  const user = useUser();
  const localSession = useSession();
  const authStrategies = useAuthStrategies();

  const [loading, setLoading] = useState(false);

  const signInWithGoogle = () => {
    setLoading(true);
    authStrategies
      .authenticate()
      .then(() => {
        navigate(MAIN_PATH, { replace: true });
      })
      .catch((error) => {
        console.warn(error);
      })
      .finally(() => setLoading(false));
  };

  const signIn = () => {
    setLoading(true);
    authStrategies
      .authenticate(user.model)
      .then(() => {
        if (authStrategies.provider === REST_APPLICATION) {
          localSession.create();
        }
        navigate(MAIN_PATH, { replace: true });
      })
      .catch((error) => {
        console.warn(error);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    try {
      if (authStrategies?.isRedirectProvided()) {
        authStrategies
          .redirectResult()
          .then((credential) => {
            console.log(credential);
          })
          .catch((error) => {
            console.warn(error);
          });
      }
    } catch (error) {}
  }, []);

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
                  <Form.Label>
                    {authStrategies.provider === FIREBASE_APPLICATION
                      ? "Email"
                      : "Username"}
                  </Form.Label>
                  <Form.Control
                    disabled={loading}
                    type={
                      authStrategies.provider === FIREBASE_APPLICATION
                        ? "email"
                        : "text"
                    }
                    value={
                      authStrategies.provider === FIREBASE_APPLICATION
                        ? user.model.email
                        : user.model.username
                    }
                    onChange={
                      authStrategies.provider === FIREBASE_APPLICATION
                        ? user.setEmail
                        : user.setUsername
                    }
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
                {authStrategies.provider === FIREBASE_APPLICATION && (
                  <div className="d-grid gap-2 mt-4">
                    <Button
                      disabled={loading}
                      onClick={signInWithGoogle}
                      variant="danger"
                      size="lg"
                    >
                      <FaGoogle /> Sign In with Google
                    </Button>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
