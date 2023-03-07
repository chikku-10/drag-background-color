import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { ITEM_TYPE } from "./config/constant";

const BgArea = ({ bgColor, setBgColor }) => {
  const [localBgColor, setLocalBgColor] = useState("");
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: ITEM_TYPE.color,
    drop: (item) => {
      console.log("dropped item", item);
      setBgColor(item.color);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    hover: (item, monitor) => {
      const canDrop = monitor.isOver();
      const isOver = monitor.canDrop();
      if (isOver && canDrop) {
        setLocalBgColor(item.color);
      }
    },
  }));

  return (
    <div
      ref={drop}
      style={{
        width: "200px",
        height: "200px",
        border: "1px solid black",
        backgroundColor:
          isOver && canDrop && !!localBgColor ? localBgColor : bgColor,
      }}
    ></div>
  );
};

export default BgArea;
