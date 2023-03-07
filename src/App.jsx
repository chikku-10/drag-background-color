import { useState } from "react";
import "./App.css";
import ColorComp from "./ColorComp";
import BgArea from "./BgArea";

function App() {
  const [bgColor, setBgColor] = useState("white");

  return (
    <section>
      <BgArea bgColor={bgColor} setBgColor={setBgColor} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "10px",
        }}
      >
        {["red", "yellow", "blue", "green"].map((color, idx) => (
          <ColorComp color={color} key={`color_${idx}`} />
        ))}
      </div>
    </section>
  );
}

export default App;
