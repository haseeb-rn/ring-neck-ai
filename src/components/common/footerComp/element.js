import styled from "styled-components";

export const FooterWrapper = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 0rem;

  p {
    color: #4169e1;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
    cursor: pointer;

    @media (max-width: 575.98px) {
      font-size: 16px;
    }
  }
`;
