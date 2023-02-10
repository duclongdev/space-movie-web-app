import React from "react";
import { useState } from "react";

const Follow = () => {
  const [follow, setFollow] = useState(false);
  return (
    <div className="relative left-24">
      <button
        className="h-8 pl-4 pr-4 rounded-md font-bold w-[100px] text-[#F44336]"
        onClick={() => setFollow(!follow)}
        style={
          !follow
            ? {
                color: "#fff",
                border: "2px solid #fff",
                transition: "all 0.5s",
              }
            : {
                color: "#04DB41",
                background: "#252525",
                transition: "all 0.5s",
              }
        }
      >
        {!follow ? "Follow" : "Following"}
      </button>
    </div>
  );
};

export default Follow;
