import { Route, Switch } from "react-router";
import { Homepage } from "../pages/Homepage";
import { HouseholdPage } from "../pages/HouseholdPage";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/household/:id" component={HouseholdPage} />
    </Switch>
  );
};
