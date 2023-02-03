import React from "react";
import "./style.css";

export default function Trailer({ closeModal, link }) {
  return (
    <div className="modalBackground" onClick={() => closeModal(false)}>
      <div className="modalContainer">
        <video width="100%" height="100%" controls className="rounded-lg">
          <source
            src={link}
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}
