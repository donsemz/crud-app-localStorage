import React from "react";
import user from "../images/usericon.jpg";


const ContactCard = (props) => {
    const {id,name,email}=props.contact;
  return (
    <div className="item">
        <img src={user} alt="user" className="ui avatar image" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i className="trash alternate outline icon" onClick={() => props.clickHander(id)}></i>
    </div>
  );
};

export default ContactCard;
