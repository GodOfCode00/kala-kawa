"use client";
import React from "react";
import HamburgerButton from "../(ui)/HamburgerButton";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { toggleTheme } from "@/redux/features/(client)/theme";

function MainContainer({ children }: { children: React.ReactNode }) {
  const { isDark } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();
  return (
    <section className="main-section">
      <div className="topbar-content">
        <div className="left">
          <HamburgerButton />
          <span className="text">Drop Down Sidebar</span>
        </div>
        <div className="right">
          <i className="bx bxs-user-circle"></i>
          <i
            className={isDark ? "bx bxs-moon" : "bx bxs-sun"}
            onClick={() => dispatch(toggleTheme())}
          ></i>
        </div>
      </div>
      <div>{children}</div>
    </section>
  );
}

export default MainContainer;
