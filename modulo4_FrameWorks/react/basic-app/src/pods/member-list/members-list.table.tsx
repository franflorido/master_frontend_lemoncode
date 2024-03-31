import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MemberEntity } from "./member-list.vm";
import { Pagination } from "@/common/components";

interface Props {
  members: MemberEntity[];
}

export const ListMemberComponent: React.FC<Props> = (props) => {
  const { members } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerpage, setRecordsPerpage] = useState(8);

  const lastIndex = currentPage * recordsPerpage;
  const firstIndex = lastIndex - recordsPerpage;

  const currentMambers = members.slice(firstIndex, lastIndex);

  console.log(members.length);

  return (
    <div className="list-user-list-container">
      <span className="list-header">Avatar</span>
      <span className="list-header">Id</span>
      <span className="list-header">Name</span>
      {currentMambers.map((member) => (
        <React.Fragment key={member.id}>
          <img src={member.avatar_url} />
          <span>{member.id}</span>
          <Link to={`/detail/${member.login}`}>{member.login}</Link>
        </React.Fragment>
      ))}
      <Pagination
        postPerPage={recordsPerpage}
        totalPost={members.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
