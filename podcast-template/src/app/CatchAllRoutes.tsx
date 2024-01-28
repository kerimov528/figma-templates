import { Route } from 'react-router-dom';
import DynamicRouter from './DynamicRouter';
// import PrivateRouter from './PrivateRouter';

function CatchAllRoutes({ routeConfig }: { routeConfig: IRoute[] }) {
  const renderRoutes = (routes: IRoute[]) => {
    return routes.map(route => {
      const { component: Component, path, key, children, isPrivate } = route;

      if (children) {
        return (
          <Route key={key} path={path} element={Component ? <DynamicRouter component={Component} /> : null}>
            {renderRoutes(children)}
          </Route>
        );
      }

      return (
        <Route
          key={key}
          path={path}
          element={<DynamicRouter component={Component}/>}
          // element={
          //   isPrivate ? (
          //     <PrivateRouter component={<DynamicRouter component={Component} />} />
          //   ) : (
          //     <DynamicRouter component={Component} />
          //   )
          // }
        />
      );
    });
  };

  return <>{renderRoutes(routeConfig)}</>;
}

export default CatchAllRoutes;