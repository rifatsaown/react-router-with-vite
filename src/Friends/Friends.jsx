import React from "react";
import { useLoaderData } from "react-router-dom";
import Friend from "../Friend/Friend";
import "./Friends.css";

const Friends = () => {
  const friends = useLoaderData();
  return (
    <div>
      <h1>This is Friends {friends.length}</h1>
      <div className="friends">
      {friends.map((friend, index) => (
        <Friend key={index} friend={friend} />
      ))}
      </div>
    </div>
  );
};

export default Friends;
