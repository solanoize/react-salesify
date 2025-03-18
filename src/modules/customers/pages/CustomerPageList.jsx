import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { useAuth, WidgetTitle } from "../../../core";
import { useCustomer } from "../hooks";
import { useEffect } from "react";

export default function CustomerPageList() {
  const customer = useCustomer();

  useEffect(() => {
    customer
      .list()
      .then((response) => console.log(response))
      .catch(async (error) => {});
  }, []);

  return (
    <>
      <Container className="mt-4">
        <WidgetTitle title={"Customer Page List"} />
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Customers</Card.Title>
              </Card.Body>

              <Table hover striped>
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                  </tr>
                </thead>

                <tbody>
                  {customer.models.map((value) => (
                    <tr key={value.id}>
                      <td>{value.first_name}</td>
                      <td>{value.last_name}</td>
                      <td>{value.email}</td>
                      <td>{value.phone}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
