"use client";
import React from "react";

function HamburgerButton() {
  return (
    <i
      className="bx bx-menu"
      onClick={() => {
        const sidebar = document.querySelector(".sidebar");
        sidebar?.classList?.toggle("close");
      }}
    ></i>
  );
}

export default HamburgerButton;
