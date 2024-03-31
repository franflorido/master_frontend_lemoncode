import * as React from 'react';
import { PictureInfo } from "./main-page.vm";

interface Props {
    animal: PictureInfo;
    selected: PictureInfo[];
    onClick: () => void;
  }

export const ImgMediaCard: React.FC<Props> = (props) => {
  
  const { animal, selected, onClick} = props;
  
  const isSelected = selected.some((selectedImage) => selectedImage.id === animal.id);

  return (
    <div>
    <img
      src={animal.picUrl}
      alt={animal.id}
      style={{ width: '100px', height: '100px', cursor: 'pointer' }}
      onClick={onClick}
    />
    <p>{animal.title}</p>
    <input type="checkbox" checked={isSelected} onChange={e => {}} onClick={onClick} />
  </div>
  );
}