import React from "react";
import {
  MemberCenteredLayout,
  MemberDetailComponont,
} from "../pods/member-details";

export const DetailScene: React.FC = () => {
  return (
    <MemberCenteredLayout>
      <MemberDetailComponont />
    </MemberCenteredLayout>
  );
};
