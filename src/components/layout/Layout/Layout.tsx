import React, { FC } from "react";

import { Navbar } from "../Navbar";

import './Layout.styles.css'

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="App">
      <Navbar/>
      <div className="page-container">{children}</div>
    </div>
  );
};
