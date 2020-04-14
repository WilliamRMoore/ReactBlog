import React from "react";
import { connect } from "react-redux";

class UserHeader extends React.Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return <div className="header">{user.name}</div>;
  }
}

//own props is a second argumnet that mapStateToProps its called with
//It is a copy of the local props in the componenet.
//This will allow us to use a specific user id passed
//downt to the UserHeader to find a user from the Redux store.
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
