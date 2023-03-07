import React from "react";
import { useDrag } from "react-dnd";
import { ITEM_TYPE } from "./config/constant";

const ColorComp = ({ color }) => {
  const [, drag] = useDrag(() => ({
    type: ITEM_TYPE.color,
    item: { color },
  }));

  return (
    <div
      ref={drag}
      className="color-tile"
      style={{
        backgroundColor: color,
      }}
    ></div>
  );
};

export default ColorComp;
