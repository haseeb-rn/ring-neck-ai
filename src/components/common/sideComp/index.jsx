import React, { useState, useEffect, useRef } from "react";
import {
  BtnsDiv,
  DropdownDiv,
  IndividualBtns,
  LanguageSelectDiv,
  SideCompWrapper,
} from "./element";
import { Image } from "react-bootstrap";
import {
  btnsRectangle,
  demoBird,
  fourSeasonImg,
  usFlag,
} from "../../../assets";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { data } from "./data";
import { AiOutlineQuestionCircle, AiOutlinePlus } from "react-icons/ai";
import { BsCcCircle } from "react-icons/bs";

function SideComp({ isLastComp }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectValue, setSelectValue] = useState("English");
  const [selectedFlag, setSelectedFlag] = useState(usFlag);
  const toggleRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (item) => {
    setShowDropdown(false);
    setSelectValue(item.langauge);
    setSelectedFlag(item.flag);
  };

  const filteredData = data.filter((item) => item.langauge !== selectValue);

  const handleClickOutside = (event) => {
    if (toggleRef.current && !toggleRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <SideCompWrapper>
      <div className="top-div">
        <Image
          src={demoBird}
          className={` ${isLastComp ? "desktop-break" : "bird-img"}`}
        />
        <Image src={fourSeasonImg} className="four-season-img" />
        <div className={` ${isLastComp ? "desktop-select-div" : "select-div"}`}>
          <LanguageSelectDiv onClick={toggleDropdown}>
            <div className="first-div">
              <Image src={selectedFlag} />
              <p className="country-name-text">{selectValue}</p>
            </div>
            {showDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </LanguageSelectDiv>
          {showDropdown && (
            <DropdownDiv ref={toggleRef}>
              {filteredData?.map((item) => (
                <div
                  className="inner-div"
                  key={item.id}
                  onClick={() => handleOptionClick(item)}
                >
                  <Image src={item.flag} />
                  <p className="language-name">{item.langauge}</p>
                </div>
              ))}
            </DropdownDiv>
          )}
        </div>
      </div>
      <BtnsDiv className={`${isLastComp && "desktop-btns-div"}`}>
        <IndividualBtns
          className={`${isLastComp && "desktop-individual-btns"}`}
        >
          <Image src={btnsRectangle} width={"100%"} fluid />
          <span>
            <AiOutlinePlus /> New Conversation
          </span>
        </IndividualBtns>
        <IndividualBtns
          className={`${isLastComp && "desktop-individual-btns"}`}
        >
          <Image src={btnsRectangle} width={"100%"} fluid />
          <span>
            <AiOutlineQuestionCircle /> FAQs
          </span>
        </IndividualBtns>
        <IndividualBtns
          className={`${isLastComp && "desktop-individual-btns"}`}
        >
          <Image src={btnsRectangle} width={"100%"} fluid />
          <span>
            {" "}
            <AiOutlineQuestionCircle /> Help
          </span>
        </IndividualBtns>
        <IndividualBtns
          className={`${isLastComp && "desktop-individual-btns"}`}
        >
          <Image src={btnsRectangle} width={"100%"} fluid />
          <span>
            <BsCcCircle /> Legal
          </span>
        </IndividualBtns>
      </BtnsDiv>
    </SideCompWrapper>
  );
}

export default SideComp;
