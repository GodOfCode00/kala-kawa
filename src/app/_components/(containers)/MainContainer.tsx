import React from "react";
import HamburgerButton from "../(ui)/HamburgerButton";

function MainContainer({ children }: { children: React.ReactNode }) {
  return (
    <section className="main-section">
      <div className="main-content">
        <HamburgerButton />
        <span className="text">Drop Down Sidebar</span>
      </div>
      <div>{children}</div>
    </section>
  );
}

export default MainContainer;
