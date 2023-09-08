import { CompHeader, LastCompWrapper } from "./element";
import ChatComp from "../homeComp/chatComp";
import SideComp from "../common/sideComp";
import { Image } from "react-bootstrap";
import { demoBird } from "../../assets";
import ManagementComp from "./backendManagementComp";

function LastComp() {
  const isLastComp = true;

  return (
    <LastCompWrapper>
      <div className="content-wrapper">
        <Image src={demoBird} className="top-logo" />

        <div className="sidebar-div">
          <SideComp isLastComp={isLastComp} />
        </div>
        <div className="main-content-div">
          <div className="main-inner-div">
            <div className="comp-wrapper">
              <CompHeader>Guest end conversation</CompHeader>
              <div className="comp-border-div">
                <ChatComp isLastComp={isLastComp} />
              </div>
            </div>
            <div className="comp-wrapper">
              <CompHeader>Backend Management Signal</CompHeader>
              <div className="comp-border-div second-border-div">
                <ManagementComp />
              </div>
            </div>
          </div>
          {/* <FooterComp /> */}
        </div>
      </div>
    </LastCompWrapper>
  );
}

export default LastComp;
