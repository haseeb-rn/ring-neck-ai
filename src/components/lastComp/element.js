import styled from "styled-components";

export const LastCompWrapper = styled.div`
  overflow: hidden;
  background: linear-gradient(270deg, #000 1.11%, #02274a 100%);
  padding: 0 2rem;
  min-height: 100vh;

  @media (max-height: 950px) {
    padding: 0 8px 4rem 8px;
  }

  @media (max-width: 991.98px) {
    padding: 0 2rem 4rem 2rem;
  }
  @media (max-width: 575.98px) {
    padding: 0 8px 4rem 8px;
  }

  .content-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;
    margin-top: 2rem;
    position: relative;

    @media (max-width: 1199.98px) {
      flex-direction: column;
    }
  }

  .sidebar-div {
    width: 289px;

    @media (max-width: 1199.98px) {
      width: 100%;
    }
  }

  .main-content-div {
    width: 100%;
    margin-top: 3rem;
  }

  .main-inner-div {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 4rem;
    margin-left: 5rem;

    @media (max-width: 1600px) {
      margin-left: 2rem;
      gap: 2rem;
    }

    @media (max-width: 1199.98px) {
      margin-left: 0;
      justify-content: center;
      gap: 2rem;
    }

    @media (max-width: 992.98px) {
      flex-direction: column;
    }
  }

  .top-logo {
    position: absolute;
    right: 0px;
    top: 0px;
    width: 149px;
    height: 149px;
    z-index: 100;

    @media (max-width: 1399.98px) {
      height: 80px;
      width: 80px;
    }
    @media (max-width: 1199.98px) {
      display: none;
    }
  }

  .comp-border-div {
    border-radius: 44px;
    border: 5px solid #4169e1;
    background: rgba(0, 0, 0, 0.22);
    padding: 3rem 1rem;
    // height: 780px;
    width: 552px;
    min-height: 680px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;

    @media (max-width: 1600px) {
      width: 450px;
      padding: 3rem 1rem;
    }
    @media (max-width: 1300px) {
      width: 400px;
    }

    @media (max-width: 1199.98px) {
      width: 450px;
    }

    @media (max-width: 991.98px) {
      width: 500px;
      height: auto;
    }
    @media (max-width: 575.98px) {
      width: 100%;
    }

    &.second-border-div {
      padding: 2rem 1rem;
    }
  }

  .comp-wrapper {
    @media (max-width: 575.98px) {
      width: 100%;
    }
  }
`;

export const CompHeader = styled.h4`
  color: #fff;
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
