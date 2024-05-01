import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar/Avatar';
import IconButton from '@mui/material/IconButton/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader title={character.name} subheader={character.status} />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
            component="div"
          />
          <Typography variant="subtitle1" gutterBottom>
            Status: {character.status}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Species: {character.species}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Origin: {character.origin.name}
          </Typography>
        </div>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};
