import React from "react";
import { MembersContext } from "@/app";
import { ListTableComponent } from "./member-list.toolbar";
import { ListMemberComponent } from "./members-list.table";

export const ListComponent: React.FC = () => {
  const { members, organization, handleClick, handleChange } =
    React.useContext(MembersContext);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <ListTableComponent
        organization={organization}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      <ListMemberComponent members={members} />
    </div>
  );
};
