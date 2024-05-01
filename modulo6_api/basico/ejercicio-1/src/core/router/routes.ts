import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  editHotel: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters',
  editHotel: '/characters/:id',
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'editHotel'> {
  editHotel: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  editHotel: (id) => generatePath(switchRoutes.editHotel, { id }),
};
