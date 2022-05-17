import React from "react";

const MoveBtn = () => {
  const move = (
    <div
      style={{
        background: "white",
        position: "absolute",
        zIndex: "10",
        top: "200px",
      }}
    >
      <button
        onClick={() => {
          //   setBottom(bottom + 1);
        }}
      >
        up
      </button>
      <button
        onClick={() => {
          //   setTop(top + 1);
        }}
      >
        down
      </button>
      <button
        onClick={() => {
          //   setRight(right + 1);
        }}
      >
        left
      </button>
      <button
        onClick={() => {
          //   setLeft(left + 1);
        }}
      >
        right
      </button>
    </div>
  );
  return <div>MoveBtn</div>;
};

export default MoveBtn;
