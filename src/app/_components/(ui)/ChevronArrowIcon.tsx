"use client";
import React from "react";

function ChevronArrowIcon() {
  return (
    <i
      className="bx bxs-chevron-down arrow"
      onClick={(e) => {
        const arrowParent = (e.target as HTMLElement)?.parentElement
          ?.parentElement; //selecting main parent of arrow
        arrowParent?.classList.toggle("showMenu");
      }}
    ></i>
  );
}

export default ChevronArrowIcon;
