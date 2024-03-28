import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "@/common/components";
import { PictureInfo } from "./main-page.vm";

interface Props {
  animals: PictureInfo[];
}

export const ListAnimalComponent: React.FC<Props> = (props) => {
  const { animals } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerpage, setRecordsPerpage] = useState(8);

  const lastIndex = currentPage * recordsPerpage;
  const firstIndex = lastIndex - recordsPerpage;

  const currentMambers = animals.slice(firstIndex, lastIndex);

  return (
    <div className="list-user-list-container">
      <span className="list-header">Avatar</span>
      <span className="list-header">Id</span>
      <span className="list-header">Name</span>
      {currentMambers.map((animal) => (
        <React.Fragment key={animal.id}>
          <img src={animal.picUrl} />
          <span>{animal.id}</span>
          <span>{animal.title}</span>
        </React.Fragment>
      ))}
      <Pagination
        postPerPage={recordsPerpage}
        totalPost={animals.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
