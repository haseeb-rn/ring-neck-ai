import styled from "styled-components";

export const SideCompWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex;

  .top-div {
    width: 100%;

    .four-season-img {
      display: block;
      margin: 0 auto;
    }
  }

  .bird-img {
    display: block;
    margin: 1rem auto;
    width: 119px;
    height: 119px;

    @media (min-width: 992px) {
      display: none;
    }
  }

  .desktop-break {
    display: block;
    margin: 1rem auto;
    width: 119px;
    height: 119px;

    @media (min-width: 1200px) {
      display: none;
    }
  }

  .select-div {
    position: relative;

    @media (max-width: 991.98px) {
      width: 300px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .desktop-select-div {
    position: relative;

    @media (max-width: 1199.98px) {
      width: 300px;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export const LanguageSelectDiv = styled.div`
  margin-top: 4rem;
  padding: 8px 1rem;
  border-radius: 8px;
  border: 2px solid #50c3dc;
  background: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  .first-div {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

    .country-name-text {
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin: 0;
    }
  }
`;

export const DropdownDiv = styled.div`
  border-radius: 8px;
  box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.2);
  width: 100%;
  position: absolute;
  top: 50px;
  padding: 1rem 5px;
  background-color: #556b7e;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  z-index: 200 !important;

  .inner-div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    width: 100%;
    padding: 0.2rem 5px;
    background-color: transparent;
    border-radius: 5px;

    &:hover {
      background-color: rgba(255, 255, 255, 0.25);
    }

    .language-name {
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin: 0;
    }
  }
`;

export const BtnsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;
  margin-top: 15rem;

  &.desktop-btns-div {
    @media (max-width: 1199.98px) {
      margin-top: 2rem !important;
    }
  }

  @media (max-width: 991.98px) {
    margin-top: 2rem;
  }

  @media (max-height: 800px) {
    margin-top: 5rem;
  }
`;

export const IndividualBtns = styled.button`
  width: 100%;
  height: 65px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
  background-color: transparent;

  &.desktop-individual-btns {
    @media (max-width: 1199.98px) {
      width: 300px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media (max-width: 991.98px) {
    width: 300px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  img {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 10;
  }

  span {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 100;
    color: #fff;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 34px; /* 154.545% */
    text-align: center;
    margin-top: 1rem;

    svg {
      font-size: 24px;
      color: #fff;
      margin-right: 8px;
      margin-bottom: 3px;
    }
  }
`;
