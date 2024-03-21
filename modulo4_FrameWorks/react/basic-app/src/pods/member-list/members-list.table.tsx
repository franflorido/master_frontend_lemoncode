import React from "react";
import { Link } from "react-router-dom";
import { MemberEntity } from "../../app";

interface Props {
  members: MemberEntity[];
}

export const ListMemberComponent: React.FC<Props> = (props) => {
  const { members } = props;
  return (
    <div className="list-user-list-container">
      <span className="list-header">Avatar</span>
      <span className="list-header">Id</span>
      <span className="list-header">Name</span>
        {members.map((member) => (
          <React.Fragment key={member.id}>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/detail/${member.login}`}>{member.login}</Link>
          </React.Fragment>
        ))}
    </div>
  );
};
