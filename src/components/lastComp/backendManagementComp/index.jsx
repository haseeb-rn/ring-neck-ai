import React, { useState } from "react";
import {
  BottomBtn,
  DrodpownDiv,
  FrontendDeskDiv,
  ManagementCompWrapper,
  RoomServiceDiv,
  StatusBtn,
} from "./element";
import { Image } from "react-bootstrap";
import { bellIcon, roomServiceGroup } from "../../../assets";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Select, Space } from "antd";

function ManagementComp() {
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedBottomStatus, setSelectedBottomStatus] = useState(null);

  const handleStatusChange = (value) => {
    setSelectedStatus(value);
  };
  const handleBottomStatusChange = (value) => {
    setSelectedBottomStatus(value);
  };

  const Option = Select;
  return (
    <ManagementCompWrapper>
      <FrontendDeskDiv className="frontService">
        <Image src={bellIcon} width={70} height={70} className="bell-icon" />
        <h2 className="main-text">Front Desk</h2>
        <p className="sub-text">Room number 478 </p>
        <p className="sub-text">Late check-out: 3:00pm</p>
      </FrontendDeskDiv>
      <div className="dropdown-div-wrapper">
        <Select
          bordered={false}
          placeholder="Select Status"
          onChange={handleStatusChange}
          value={selectedStatus ? `Status: ${selectedStatus}` : undefined}
          style={{
            width: "100%",
            marginTop: "1rem",
          }}
        >
          <Option value="Pending">Pending</Option>
          <Option value="Completed">Completed</Option>
        </Select>
        <BottomBtn>Pending</BottomBtn>
      </div>
      <RoomServiceDiv>
        <Image
          src={roomServiceGroup}
          width={70}
          height={70}
          className="bell-icon"
        />
        <h2 className="main-text">Room Service</h2>
        <p className="sub-text">Room number 478 </p>
        <p className="sub-text">Order: Club Sandwich & Orange juice </p>
      </RoomServiceDiv>
      <div className="dropdown-div-wrapper">
        <Select
          bordered={false}
          placeholder="Select Status"
          onChange={handleBottomStatusChange}
          value={
            selectedBottomStatus ? `Status: ${selectedBottomStatus}` : undefined
          }
          style={{
            width: "100%",
            marginTop: "1rem",
          }}
        >
          <Option value="Pending">Pending</Option>
          <Option value="Completed">Completed</Option>
        </Select>
        <BottomBtn>Pending</BottomBtn>
      </div>
    </ManagementCompWrapper>
  );
}

export default ManagementComp;
