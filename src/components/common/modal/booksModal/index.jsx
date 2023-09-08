import React from "react";
import { FormContainer, ModalHeader, SubmitBtn } from "./element";
import { Form } from "react-bootstrap";
import { Select } from "antd";

function BooksModal() {
  return (
    <div>
      <ModalHeader>Book Uploading Form</ModalHeader>
      <FormContainer>
        <Form.Group>
          <Form.Label>Book Name</Form.Label>
          <Form.Control placeholder="Enter Book Name" />
        </Form.Group>
        <Form.Group className="mt-4">
          <Form.Label>Course</Form.Label>
          <br />
          <Select
            showSearch
            style={{
              width: "100%",
              border: "1px solid #C4D0D9",
              borderRadius: "5px",
              fontSize: "1rem",
            }}
            size="large"
            bordered={false}
            placeholder="Select a course"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: "Mathematics",
                label: "Mathematics",
              },
              {
                value: "Physics",
                label: "Physics",
              },
              {
                value: "Chemistry",
                label: "Chemistry",
              },
              {
                value: "English",
                label: "English",
              },
            ]}
          />
        </Form.Group>

        <SubmitBtn>Submit</SubmitBtn>
      </FormContainer>
    </div>
  );
}

export default BooksModal;
