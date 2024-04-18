import React, { useState } from "react";
import "./btninfo.css";

function BtnInfo() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setIsTooltipVisible(true)}
      onMouseLeave={() => setIsTooltipVisible(false)}
    >
      <span className={`tooltip ${isTooltipVisible ? "visible" : ""}`}>
        <div className="tooltip-title"> Ordenes en tiempo real: </div>
        <div className="tooltip-item">
          Muestra la última orden dada
        </div>
        <div className="tooltip-item">
         en la aplicacion en tiempo real
        </div>
    
      </span>
      <span className="text">Que es esto? 🤔 </span>
    </div>
  );
}

export default BtnInfo;
