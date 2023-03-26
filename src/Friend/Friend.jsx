import React from "react";
import './Friend.css'

const Friend = ({ friend }) => {
  const { name, email, phone, website } = friend;
  return (
    <div className="friend">
      <h1>{name}</h1>
      <h3>{email}</h3>
      <h3>{phone}</h3>
      <h3>{website}</h3>
    </div>
  );
};

export default Friend;
