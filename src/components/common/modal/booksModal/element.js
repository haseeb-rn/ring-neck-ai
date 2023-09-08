import styled from "styled-components";

export const ModalWrapper = styled.div`
  overflow: hidden;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
  padding: 1rem 2rem;
`;

export const ModalHeader = styled.h2`
  color: #4b5d6c;
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const FormContainer = styled.div`
  margin-top: 2rem;

  .form-label {
    color: #4b5d6c;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .form-control {
    border-radius: 5px;
    border: 1px solid #c4d0d9;
    height: 45px;

    &::placeholder {
      color: rgba(0, 0, 0, 0.25);
    }

    &:focus {
      box-shadow: none;
      outline: none;
    }
  }
`;

export const SubmitBtn = styled.button`
  border-radius: 5px;
  background: #6558f5;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.25);
  height: 60px;
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 100%;
  border: none;
  margin-top: 2rem;
`;
