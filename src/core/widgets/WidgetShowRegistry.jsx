import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import WidgetCardModules from "./WidgetCardModules";

export default function WidgetShowRegistry() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Modules
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modules</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <WidgetCardModules />
        </Modal.Body>
      </Modal>
    </>
  );
}
