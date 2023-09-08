import React from "react";
import { FormContainer, ModalHeader, SubmitBtn } from "./element";
import { Form } from "react-bootstrap";

function UDPModal() {
  return (
    <div>
      <ModalHeader>UDP Generation Form</ModalHeader>
      <FormContainer>
        <Form.Group>
          <Form.Label>Grade</Form.Label>
          <Form.Control placeholder="Enter Grade" />
        </Form.Group>
        <Form.Group className="mt-4">
          <Form.Label>Course</Form.Label>
          <Form.Control placeholder="Enter Course" />
        </Form.Group>
        <Form.Group className="mt-4">
          <Form.Label>Parameter</Form.Label>
          <Form.Control placeholder="Enter Parameter" />
        </Form.Group>
        <SubmitBtn>Submit</SubmitBtn>
      </FormContainer>
    </div>
  );
}

export default UDPModal;
