import * as React from "react";

class AdminPage extends React.Component {
  public render() {
    return (
      <div className="page-container">
        <h1>Admin Panel</h1>
        <p>You should only be here if you have logged in.</p>
      </div>
    );
  }
}

export default AdminPage;
