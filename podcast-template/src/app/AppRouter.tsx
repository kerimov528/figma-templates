import { Fragment } from 'react';
import {  Route, Routes } from 'react-router-dom';
import CatchAllRoutes from './CatchAllRoutes';
import {routes} from './routes/index';
import NotFound from '@src/shared/ui/NotFound/NotFound';

export default function AppRouter() {
  return (
    <Routes>
      {routes
        .filter((route: IRoute) => route.component)
        .map((route: IRoute) => {
          const { key } = route;
          return <Fragment key={key}>{CatchAllRoutes({ routeConfig: [route] })}</Fragment>;
        })}

      <Route key="notfound" path="*" element={<NotFound />} />
    </Routes>
  );
}