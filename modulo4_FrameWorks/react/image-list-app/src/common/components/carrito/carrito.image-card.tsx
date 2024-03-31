import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { PictureInfo } from "./carrito.vm";

interface Props {
    animal: PictureInfo;
    onClick: () => void;
  }

export const ImgCarrito: React.FC<Props> = (props) => {
  
  const { animal, onClick} = props;

  return (
    <div className='box'>
      <img
        src={animal.picUrl}
        alt={animal.id}
        style={{ width: '80px', height: '80px', cursor: 'pointer' }}
        onClick={onClick}
      />
      <span>{ animal.title}</span>
      <IconButton className='delete-icon' aria-label="delete">
        <DeleteIcon onClick={onClick} />
      </IconButton>
  </div>
  );
}