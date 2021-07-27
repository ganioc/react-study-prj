import * as React from "react";
import { NavLink, Route, RouteComponentProps } from "react-router-dom";

interface IUser {
  id: number;
  name: string;
  isAdmin: boolean;
}
const adminUsersData: IUser[] = [
  { id: 1, name: "Fred", isAdmin: true },
  { id: 2, name: "Bob", isAdmin: false },
  { id: 3, name: "Jane", isAdmin: true },
];

const AdminProducts: React.SFC = () => {
  return <div> Some options to administer products</div>;
};

const AdminUsers: React.SFC = () => {
  return (
    <div>
      <ul className="admin-sections">
        {adminUsersData.map((user) => (
          <li>
            <NavLink
              to={`/admin/users/${user.id}`}
              activeClassName="admin-link-active"
            >
              {user.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

class AdminPage extends React.Component {
  public render() {
    return (
      <div className="page-container">
        <h1>Admin Panel</h1>
        <p>You should only be here if you have logged in.</p>
        <ul className="admin-sections">
          <li key="users">
            <NavLink to={`/admin/users`} activeClassName="admin-link-active">
              Users
            </NavLink>
          </li>
          <li key="products">
            <NavLink to={`/admin/products`} activeClassName="admin-link-active">
              Products
            </NavLink>
          </li>
        </ul>
        <Route path="/admin/users" component={AdminUsers} />
        <Route path="/admin/products" component={AdminProducts} />
      </div>
    );
  }
}

export default AdminPage;
