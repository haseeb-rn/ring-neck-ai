import styled from "styled-components";

export const ManagementCompWrapper = styled.div`
  overflow: hidden;

  .dropdown-div-wrapper {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 273px;
    position: relative;

    @media (max-width: 350.98px) {
      width: 100%;
    }
  }
`;

export const FrontendDeskDiv = styled.div`
  // width: 425.353px;
  border-radius: 22px;
  border: 2.5px solid #4169e1;
  background: rgba(0, 0, 0, 0.22);
  // display: block;
  // margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  &.frontService {
    margin-top: 2rem;
  }

  @media (max-width: 575.98px) {
    width: 100%;
  }

  .bell-icon {
    position: absolute;
    //  left: 150px;
    top: -35px;
    z-index: 100;

    @media (max-width: 575.98px) {
      left: 40%;
    }
    @media (max-width: 400.98px) {
      left: 35%;
    }
  }

  .main-text {
    color: #fff;
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    margin-top: 2rem;
  }

  .sub-text {
    color: #fff;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
  }
`;

export const RoomServiceDiv = styled(FrontendDeskDiv)`
  margin-top: 3.2rem;
`;

export const StatusBtn = styled.div`
  height: 42.082px;
  border-radius: 22px;
  border: 0.6px solid #4169e1;
  background: #4169e1;
  color: #fff;
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

export const BottomBtn = styled.div`
  width: 100%;
  // height: 31px;
  padding: 0.2rem;
  border-radius: 22px;
  opacity: 0.44;
  background: #fff;
  color: #000;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 1rem;
`;

export const DrodpownDiv = styled.div`
  position: absolute;
  top: 50px;
  width: 100%;
  z-index: 200;
  max-height: 200px;
  border-radius: 10px;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.2);
  background-color: rgb(1, 6, 11);
  border: 0.6px solid #4169e1;
  overflow-y: auto !important;
  cursor: default;

  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #02274a;
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #02274a;
  }

  .option {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    text-align: left;
    margin-top: 10px;
    cursor: pointer;
  }
`;
