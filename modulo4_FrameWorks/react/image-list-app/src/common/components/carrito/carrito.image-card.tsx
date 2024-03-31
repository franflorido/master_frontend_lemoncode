import * as React from 'react';
import { PictureInfo } from "./carrito.vm";

interface Props {
    animal: PictureInfo;
    onClick: () => void;
  }

export const ImgCarrito: React.FC<Props> = (props) => {
  
  const { animal, onClick} = props;

  return (
    <div>
    <img
      src={animal.picUrl}
      alt={animal.id}
      style={{ width: '100px', height: '100px', cursor: 'pointer' }}
      onClick={onClick}
    />
    <input type="checkbox" onClick={onClick} />
  </div>
  );
}