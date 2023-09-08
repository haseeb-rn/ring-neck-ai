import styled from "styled-components";

export const ChatWrapper = styled.div`
  overflow: hidden;
  width: 480px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  // gap: 2rem;

  &.last-comp-chat {
    @media (max-width: 1600px) {
      width: 100%;
    }
  }

  @media (max-width: 575.98px) {
    width: 100%;
  }
`;

export const PlayBtnDiv = styled.div`
    // width: 264.129px;
    // height: 261.527px;
 
  width: 185px;
  height: 185px;
  position: relative;
  margin-left: auto;
  margin-right: auto;

  .bg-svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    animation: spinAndGrowAnimation 6s linear infinite;
    transform-origin: center;

    @keyframes spinAndGrowAnimation {
      0% {
        transform: rotate(0deg) scale(1);
      }
      50% {
        transform: rotate(180deg) scale(1.05);
      }
      100% {
        transform: rotate(360deg) scale(1);
      }
    }
  }
`;

export const PlayBtn = styled.button`
  border: none;
  fill: #fff;
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.33));
  border-radius: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  padding: 10px;
  background-color: transparent;

  .microphone-icon {
    cursor: pointer;
  }

  .microphone-icon {
    color: #fff;
    font-size: 64px !important;
    transform-origin: center;
    transition: transform 3s ease-in-out;

    &.animating {
      animation: scaleAnimation 0.5s infinite;

      @keyframes scaleAnimation {
        0%,
        100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.1);
        }
      }
    }
  }
`;

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-height: 500px;
  overflow-y: auto !important ;
  padding-right: 1rem;
  margin-top:0.5rem;
  @media (max-width: 991.98px) {
    max-height: 1000px;
  }

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
`;

export const QuestionMessage = styled.p`
  border-radius: 22px;
  border: 0.6px solid #4169e1;
  background: rgba(0, 0, 0, 0.22);
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 8px 2rem 8px 1rem;
 
  @media (max-width: 575.98px) {
    font-size: 16px;
    font-weight: 400;
  }
`;

export const AnswerMessage = styled.p`
  border: none;
  border-radius: 22px;
  background: linear-gradient(94deg, #4169e1 -11.7%, #02274a 114.36%);
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 8px 2rem 8px 1rem;
  display: block;
  margin-left: auto;

  @media (max-width: 575.98px) {
    font-size: 16px;
    font-weight: 400;
  }
`;
