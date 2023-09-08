import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  } 
 body
{
  overflow-x: hidden !important;
  font-family: 'Poppins', sans-serif;
   
}

iframe
{
  /* position: absolute !important;
  width: none !important;
  top: none !important;
  left: none !important;
  right: none !important;
  z-index: -5 !important; */
}



 /* Loader */
 .cover-spin {
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background:rgba(0,0,0,0.7);
  color:white;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}


  .ant-modal-content
  {
   background: none;
  }

  :where(.css-dev-only-do-not-override-190m0jy).ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    height: 42.082px;
  border-radius: 22px;
  border: 0.6px solid #4169e1 !important;
  background: #4169e1 !important;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  }
   

  :where(.css-dev-only-do-not-override-190m0jy).ant-select-dropdown {
  border-radius: 10px;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.2) !important;
  background-color: rgb(1, 6, 11) !important;
  border: 0.6px solid #4169e1 !important;
  }

  :where(.css-dev-only-do-not-override-190m0jy).ant-select .ant-select-arrow {
    color: #fff !important;
  }

  .ant-select-item-option-content {
    color: #fff !important;
  }

  .ant-select-selection-item {
    color: #fff !important;

  }


  :where(.css-dev-only-do-not-override-190m0jy).ant-select-dropdown .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    background-color: transparent !important;

  }

  :where(.css-dev-only-do-not-override-190m0jy).ant-select .ant-select-selection-placeholder {
    color: rgba(255,255,255,0.5) !important;
  }
 
`;

export default GlobalStyle;
