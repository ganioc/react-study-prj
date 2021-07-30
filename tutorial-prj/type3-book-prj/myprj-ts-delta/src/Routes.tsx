import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";
import AdminPage from "./component/AdminPage";
import Header from "./component/Header";
import NotFoundPage from "./component/NotFoundPage";
import ProductPage from "./component/ProductPage";
import ProductsPage from "./component/ProductsPage";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactUsPage from "./component/ContactUsPage";

interface IState {
  loggedIn: boolean;
}

const RoutesWrap: React.FC = () => {
  return (
    <Router>
      <Route component={Routes} />
    </Router>
  );
};

// class Routes extends React.Component<RouteComponentProps> {
class Routes extends React.Component<RouteComponentProps, IState> {
  public constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      loggedIn: true,
    };
  }
  public render() {
    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            timeout={500}
            classNames="animate"
          >
            <Switch>
              <Redirect exact={true} from="/" to="/products" />
              <Route exact={true} path="/products" component={ProductsPage} />
              <Route path="/products/:id" component={ProductPage} />
              <Route path="/contactus" component={ContactUsPage} />
              <Route path="/admin" component={AdminPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
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
export default RoutesWrap;
