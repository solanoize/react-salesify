import { useNavigate } from "react-router-dom";
import useModule from "../hooks/useModule";
import { Alert, Button, Card, Table } from "react-bootstrap";
import { IoLinkSharp } from "react-icons/io5";
import { FaCube } from "react-icons/fa";

export default function WidgetCardModules() {
  const navigate = useNavigate();
  const module = useModule(navigate);

  return (
    <>
      {module.isEmpty && <Alert variant="info">No modules available!</Alert>}
      {!module.isEmpty && (
        <Card>
          <Card.Body>
            <Card.Title className="mb-4">Modules</Card.Title>
            {Object.entries(module.grouping).map(([key, m]) => (
              <Table key={key} bordered hover striped>
                <thead>
                  <tr>
                    <th colSpan={4}>
                      <FaCube />
                      {"  "}
                      {key}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {m.map((value, index) => (
                    <tr key={index}>
                      <td>{value.title}</td>
                      <td>{value.author}</td>
                      <td>{value.email}</td>
                      <th>
                        <Button
                          onClick={() => module.access(value.id)}
                          size="sm"
                          variant="dark"
                        >
                          <IoLinkSharp /> Access
                        </Button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ))}
          </Card.Body>
        </Card>
      )}
    </>
  );
}
