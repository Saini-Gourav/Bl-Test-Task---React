import React from "react";
import { MdOutlineCoronavirus } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { BsEmojiTear } from "react-icons/bs";
import { FaFlask } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <div>
          <MdOutlineCoronavirus color="white"/>
        </div>

       <div>
       <ul
          style={{
            display: "flex",
            flexDirection: "column",
            listStyleType: "none",
            height: "100%",
          }}
        >
          <li style={{ marginBottom: "15px"}}>
            <CgMenuGridR color="white"/>
          </li>
          <li style={{ marginBottom: "15px"}}>
            <BsEmojiTear color="white"/>
          </li>
          <li style={{ marginBottom: "15px"}}>
            <FaFlask color="white"/>
          </li>
          <li style={{ marginBottom: "15px"}}>
            <RiMessage2Fill color="white"/>
          </li>
        </ul>
       </div>
        <div>
        <CiSettings color="white"/>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
