import React, { PropsWithChildren } from "react";
import { AppRouter } from "./routes/app.routes";

export interface MemberEntity {
  id: number;
  login: string;
  avatar_url: string;
}

interface MembersContextModel {
  members: MemberEntity[];
  organization: string;
  handleClick: (organization: string) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const MembersContext = React.createContext<MembersContextModel>(null);

const MembersProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [organization, setOrganization] = React.useState("lemoncode");
  const [filtro, setFiltro] = React.useState("");

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${organization}/members`) //https://api.github.com/orgs/${organization}/members
      .then((response) => response.json())
      .then(setMembers);
  }, [filtro]);

  const handleChange = (e) => setOrganization(e.target.value);
  const handleClick = (filtro) => setFiltro(filtro);

  return (
    <MembersContext.Provider
      value={{ members, organization, handleClick, handleChange }}
    >
      {children}
    </MembersContext.Provider>
  );
};

export const App = () => {
  return (
    <MembersProvider>
      <AppRouter />
    </MembersProvider>
  );
};
