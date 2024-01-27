import { Fragment } from 'react';
import {  Routes } from 'react-router-dom';
// import NotFound from '@src/widgets/NotFound';
import CatchAllRoutes from './CatchAllRoutes';
import {routes} from './routes/index';

export default function AppRouter() {
  return (
    <Routes>
      {routes
        .filter((route: any) => route.component)
        .map((route: any) => {
          const { key } = route;
          return <Fragment key={key}>{CatchAllRoutes({ routeConfig: [route] })}</Fragment>;
        })}

      {/* <Route key="notfound" path="*" element={<NotFound />} /> */}
    </Routes>
  );
}