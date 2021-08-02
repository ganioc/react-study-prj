import * as React from "react";
import {
  Link,
  NavLink,
  RouteComponentProps,
  withRouter,
} from "react-router-dom";
import logo from "../logo.svg";
import BasketSummary from "./BasketSummary";
import { connect } from "react-redux";
import { isPropertySignature } from "typescript";
import { IApplicationState } from "./Store";

interface IState {
  search: string;
}
interface IProps extends RouteComponentProps {
  basketCount: number;
}
class Header extends React.Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
  }
  public render() {
    return (
      <header className="header">
        <div className="search-container">
          <input type="search" placeholder="search" value=""></input>
          <BasketSummary count={this.props.basketCount} />
        </div>
        <img src={logo} className="header-logo" alt="logo" />
        <h1 className="header-title">React Shop</h1>
        <nav>
          <NavLink to="/products" className="header-link">
            Products
          </NavLink>
          <NavLink to="/contactus" className="header-link">
            Contact Us
          </NavLink>
          <NavLink to="/admin" className="header-link">
            Admin
          </NavLink>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (store: IApplicationState) => {
  return {
    basketCount: store.basket.products.length,
  };
};
// export default Header;
export default connect(mapStateToProps)(withRouter(Header));
