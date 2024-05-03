import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import { CharacterEntityVM } from '../character-collection.vm';
import * as classes from './character-card.styles';

interface Props {
  character: CharacterEntityVM;
  onEdit: (id: string) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onEdit } = props;

  return (
    <Card>
      <CardHeader title={character.name} subheader={character.status} />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ paddingTop: '70.25%' }}
          />
          <Typography variant="subtitle1" gutterBottom>
            {character.species}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Best Sentences: {character.bestSentences}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onEdit(character.id)}>
          <InfoIcon />
        </IconButton>
        More Info
        <IconButton onClick={() => onEdit(character.id)}>
          <EditIcon />
        </IconButton>
        Edit Best Sentence
      </CardActions>
    </Card>
  );
};
