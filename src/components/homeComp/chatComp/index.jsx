import React, { useState } from "react";
import {
  ChatWrapper,
  PlayBtnDiv,
  PlayBtn,
  ChatContainer,
  QuestionMessage,
  AnswerMessage,
} from "./element";
import { BiMicrophone } from "react-icons/bi";
import { data } from "./data";

function ChatComp({ isLastComp }) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 5000);
  };
  return (
    <ChatWrapper className={isLastComp && "last-comp-chat"}>
      <PlayBtnDiv>
        <svg
          className={`bg-svg ${isAnimating && "rotate-svg"}`}
          width="265"
          height="262"
          viewBox="0 0 265 262"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="113.849"
            cy="109.946"
            rx="104.741"
            ry="104.741"
            fill="url(#paint0_radial_7_1044)"
          />
          <ellipse
            cx="124.258"
            cy="146.377"
            rx="115.15"
            ry="115.15"
            fill="url(#paint1_radial_7_1044)"
          />
          <ellipse
            cx="161.991"
            cy="133.366"
            rx="102.139"
            ry="102.139"
            fill="url(#paint2_radial_7_1044)"
          />
          <g opacity="0.8">
            <circle
              cx="131.414"
              cy="130.113"
              r="105.392"
              fill="url(#paint3_radial_7_1044)"
            />
          </g>
          <circle
            cx="131.414"
            cy="130.113"
            r="70.261"
            fill="url(#paint4_linear_7_1044)"
            fill-opacity="0.9"
          />
          <defs>
            <radialGradient
              id="paint0_radial_7_1044"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(113.849 109.946) rotate(90) scale(104.741 104.741)"
            >
              <stop offset="0.84375" stop-color="#A976E1" />
              <stop offset="1" stop-color="#5D43A5" stop-opacity="0" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_7_1044"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(124.258 146.377) rotate(90) scale(115.15 115.15)"
            >
              <stop offset="0.833333" stop-color="#93D9E2" />
              <stop offset="1" stop-color="#93D9E2" stop-opacity="0" />
            </radialGradient>
            <radialGradient
              id="paint2_radial_7_1044"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(161.991 133.366) rotate(90) scale(102.139 102.139)"
            >
              <stop offset="0.708333" stop-color="#5050C8" />
              <stop offset="1" stop-color="#5050C8" stop-opacity="0" />
            </radialGradient>
            <radialGradient
              id="paint3_radial_7_1044"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(131.414 130.113) rotate(90) scale(105.392)"
            >
              <stop offset="0.90625" stop-color="#18134D" />
              <stop offset="1" stop-color="#203F6E" stop-opacity="0" />
            </radialGradient>
            <linearGradient
              id="paint4_linear_7_1044"
              x1="173.813"
              y1="74.3888"
              x2="90.8324"
              y2="178.569"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#241B52" />
              <stop offset="1" stop-color="#253262" />
            </linearGradient>
          </defs>
        </svg>

        <PlayBtn onClick={handleClick}>
          <BiMicrophone
            className={` microphone-icon ${isAnimating && "animating"}`}
          />
        </PlayBtn>
      </PlayBtnDiv>

      <ChatContainer>
        {data?.map((item) => (
          <>
            {item.question && (
              <QuestionMessage>{item.question}</QuestionMessage>
            )}
            {item.answer && <AnswerMessage>{item.answer}</AnswerMessage>}
          </>
        ))}
      </ChatContainer>
    </ChatWrapper>
  );
}

export default ChatComp;
