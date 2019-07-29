import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import store, {
  resetFields,
  updateUsername,
  updatePassword,
  updateFirstName,
  updateLastName,
  updateEmail
} from "../../Redux/Store";

class Register extends Component {
  clickGoBack = () => {
    this.props.resetFields();
  };

  handleUsername = e => {
    this.props.updateUsername(e.target.value);
  };

  handlePassword = e => {
    this.props.updatePassword(e.target.value);
  };

  handleFirstName = e => {
    this.props.updateFirstName(e.target.value);
  };

  handleLastName = e => {
    this.props.updateLastName(e.target.value);
  };

  handleEmail = e => {
    this.props.updateEmail(e.target.value);
  };

  handleRegister = e => {
    e.preventDefault();
    axios
      .post("/auth/register", {
        firstname: this.props.firstName,
        lastname: this.props.lastName,
        username: this.props.username,
        password: this.props.password,
        email: this.props.email
      })
      .then(res => {
        // console.log(res.data);
        this.props.history.push("/page1");
      })
      .catch(err => {
        console.log("this is where I get an error, I think.");
      });
  };
  render() {
    return (
      <>
        <h3>
          First Name:
          <input type="text" onChange={this.handleFirstName} />
        </h3>
        <h3>
          Last Name:
          <input type="text" onChange={this.handleLastName} />
        </h3>
        <h3>
          Username:
          <input type="text" onChange={this.handleUsername} />
        </h3>
        <h3>
          Password:
          <input type="password" onChange={this.handlePassword} />
        </h3>
        <h3>
          Email:
          <input type="text" onChange={this.handleEmail} />
        </h3>
        <Link to="/">
          <button onClick={this.clickGoBack}>Go back</button>
        </Link>
        <button onClick={this.handleRegister}>Register!</button>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.username,
    password: state.password,
    firstName: state.firstName,
    lastName: state.lastName,
    email: state.email
  };
};

export default connect(
  mapStateToProps,
  {
    resetFields,
    updatePassword,
    updateUsername,
    updateFirstName,
    updateLastName,
    updateEmail
  }
)(Register);
