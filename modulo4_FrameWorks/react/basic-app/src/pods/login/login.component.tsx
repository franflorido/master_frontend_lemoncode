import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextFieldMUI from "@mui/material/TextField";
import { CardLayout, CenteredLayout } from "./login.layout";

export const LoginComponont: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "admin" && password === "test") {
      navigate("/list");
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
    <CenteredLayout>
      <Card variant="outlined" sx={{ padding: "20px" }}>
        <CardHeader title="Welcome!" sx={{ textAlign: "center" }} />
        <CardContent>
          <form onSubmit={handleNavigation}>
            <CardLayout>
              <TextFieldMUI
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                variant="outlined"
              />
              <TextFieldMUI
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
              />
              <Button type="submit" variant="contained">
                Login
              </Button>
            </CardLayout>
          </form>
        </CardContent>
      </Card>
    </CenteredLayout>
  );
};
