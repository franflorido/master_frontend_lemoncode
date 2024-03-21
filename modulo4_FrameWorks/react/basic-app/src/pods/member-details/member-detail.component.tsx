import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { MemberCenteredLayout } from "./member-detail.layout";

interface MemberDetailEntity {
  id: string;
  avatar_url: string;
  login: string;
  name: string;
  company: string;
  bio: string;
}

const createDefaultMemberDetail = () => ({
  id: "",
  avatar_url: "",
  login: "",
  name: "",
  company: "",
  bio: "",
});

export const MemberDetailComponont: React.FC = () => {
  const navigate = useNavigate();
  const [member, setMember] = React.useState<MemberDetailEntity>(
    createDefaultMemberDetail()
  );
  const { login } = useParams();

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${login}`) //https://api.github.com/users/${login}
      .then((response) => response.json())
      .then((json) => setMember(json));
  }, [login]);

  return (
    <MemberCenteredLayout>
      <Card sx={{ maxWidth: 345, bgcolor: "#ffd17d" }}>
        <CardMedia
          component="img"
          alt="member img"
          height="300"
          image={member.avatar_url}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {member.login}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            id: {member.id} login: {member.login} name: {member.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => navigate("/list")}>
            Back
          </Button>
          <Button size="small">Share</Button>
        </CardActions>
      </Card>
    </MemberCenteredLayout>
  );
};
