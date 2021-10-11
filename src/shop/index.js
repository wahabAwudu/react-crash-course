import { Switch, Route } from "react-router-dom";
import AddProduct from "./AddProduct";
import AllProducts from "./AllProducts";

const ShopRoutes = (props) => {
  return (
    <>
      <Switch>
        <Route exact path={props.match.path} component={AllProducts} />
        <Route
          exact
          path={props.match.path + "/add-new"}
          component={AddProduct}
        />
      </Switch>
    </>
  );
};

export default ShopRoutes;
