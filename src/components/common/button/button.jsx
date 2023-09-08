import React from "react";
import { MainButton, ButtonIcon } from "./buttonElement";
// framer Motion

const Button = ({
  children,
  primary,
  secondary,
  buttonCenter,
  buttonEnd,
  connectWallet,
  continueBtn,
  isDisabled,
  onClick,
}) => {
  return (
    <div>
      <MainButton
        primary={primary}
        secondary={secondary}
        buttonCenter={buttonCenter}
        buttonEnd={buttonEnd}
        connectWallet={connectWallet}
        onClick={onClick}
        disabled={isDisabled}
        continueBtn={continueBtn}
      >
        {children}
      </MainButton>
    </div>
  );
};

export default Button;
