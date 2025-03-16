import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { useEffect } from "react";
import { WidgetTitle } from "../../../core";
import { useProduct } from "../hooks";

export default function ProductPageList() {
  const product = useProduct();

  useEffect(() => {
    product.list();
  }, []);

  return (
    <Container>
      <WidgetTitle title={"Product Manager"} />
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Product List</Card.Title>
            </Card.Body>
            <Table hover striped>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {product.models.map((value) => (
                  <tr key={value.id}>
                    <td>{value.title}</td>
                    <td>{value.price}</td>
                    <td>{value.category}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
