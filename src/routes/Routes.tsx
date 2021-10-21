import { Route, Switch } from "react-router";
import { Homepage } from "../pages/Homepage";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Homepage} />
    </Switch>
  );
};
