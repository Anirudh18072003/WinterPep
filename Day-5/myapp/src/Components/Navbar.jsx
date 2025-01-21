import React from "react";

export default function Navbar(props) {
  const { user } = props;
  return (
    <>
      <h1>This is my first component</h1>
      <h5>
        Hello <strong>{user.name} </strong> your age is {user.age}
      </h5>
    </>
  );
}
