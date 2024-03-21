import React from "react";
import "./member-detail.layout.css";

export const MemberCenteredLayout: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <div className="layout-center">{children}</div>;
};

export const MemberCardLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {children}
    </div>
  );
};
