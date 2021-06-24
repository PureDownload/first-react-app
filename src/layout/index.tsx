import { homeRouter } from "../router/router.config";
import { Suspense } from 'react';
import { NavLink, Switch, Route } from "react-router-dom";

const LayoutIndex = () => {
  return (
    <div className="layout-index">
      <Suspense fallback={<div></div>}>
        {homeRouter.map((route) => (
          <NavLink to={route.path}>{route.path} <br/></NavLink>
        ))}
        <Switch>
          {homeRouter.map((route, i) => (
            <Route
              key={route.path || i}
              path={route.path}
              component={route.component}
            ></Route>
          ))}
        </Switch>
      </Suspense>
    </div>
  );
};

export default LayoutIndex;
