import React from "react";
import "./message.scss";
import party from "./party.png";

const Message = (props) => {
  return (
    <div className="container">
      <p className="container-message">Congrats, {props.user} you are a member now</p>
      <p className="container-second">Welcome to the club</p>
      <img src={party} alt="" className="container-party" />
    </div>
  );
};

export default Message;
