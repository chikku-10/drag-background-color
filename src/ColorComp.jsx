import React from "react";
import { useDrag } from "react-dnd";
import { ITEM_TYPE } from "./config/constant";

const ColorComp = ({ color }) => {
  const [collected, drag] = useDrag(() => ({
    type: ITEM_TYPE.color,
    item: { color },
  }));

  return (
    <div
      ref={drag}
      {...collected}
      style={{
        width: "30px",
        height: "30px",
        border: "1px solid black",
        backgroundColor: color,
      }}
    ></div>
  );
};

export default ColorComp;
