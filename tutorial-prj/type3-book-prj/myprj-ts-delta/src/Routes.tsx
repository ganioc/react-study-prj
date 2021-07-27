import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdminPage from "./component/AdminPage";
import ProductsPage from "./component/ProductPage";

class Routes extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <Route path="/products" component={ProductsPage} />
          <Route path="/admin" component={AdminPage} />
        </div>
      </Router>
    );
  }
}

// const Routes:React.SFC = ()=> {
//   return (
//     <Router>
//       <div>
//         <Route path="/products" component={ProductsPage} />
//         <Route path="/admin" component={AdminPage} />
//       </div>
//     </Router>
//   );
// }
export default Routes;
