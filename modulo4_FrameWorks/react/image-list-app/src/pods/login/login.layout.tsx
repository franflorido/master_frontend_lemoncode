import React from "react";
import "./login.layout.css";

export const CenteredLayout: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <div className="layout-center">{children}</div>;
};

export const CardLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16}}>
      {children}
    </div>
  );
};
