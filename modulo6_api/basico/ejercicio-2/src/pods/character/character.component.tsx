import * as React from 'react';
import Card from '@mui/material/Card';
import { Formik, Form } from 'formik';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import { TextFieldComponent } from 'common/components';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Character } from './character.vm';
import { formValidation } from './character.validations';
import * as classes from './character.styles';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root} style={{ maxWidth: 500 }}>
          <Card>
            <CardHeader title={character.name} subheader={character.status} />
            <CardContent>
              <CardMedia
                image={character.image}
                title={character.name}
                style={{ height: 0, paddingTop: '70.25%' }}
              />
              <Typography variant="subtitle1" gutterBottom>
                {character.species}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Best Sentences: {character.bestSentences}
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
          <TextFieldComponent
            name="bestSentences"
            label="Add Best Sentences"
            multiline={true}
            rows={3}
          />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
