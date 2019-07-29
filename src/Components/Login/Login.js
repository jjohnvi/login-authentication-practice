import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUsername, updatePassword } from "../../Redux/Store";
import axios from "axios";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    error: false
  };
  handleUsername = e => {
    this.props.updateUsername(e.target.value);
  };

  handlePassword = e => {
    this.props.updatePassword(e.target.value);
  };

  clickLogin = e => {
    e.preventDefault();
    axios
      .post("/auth/login", {
        username: this.props.username,
        password: this.props.password
      })
      .then(res => {
        console.log(res.data);
        //go to logged in page
        this.props.history.push("/page1");
      })
      .catch(err => {
        console.log("this is where I get an error, I think.");
        this.setState({ error: true });
        // go to wrong page
      });
  };
  render() {
    return (
      <form className="loginForm" type="submit" onSubmit={this.clickLogin}>
        <h3>
          Username:
          <input type="text" onChange={this.handleUsername} />
        </h3>
        <h3>
          Password:
          <input type="password" onChange={this.handlePassword} />
        </h3>
        <div>
          <button type="submit">Login</button>
        </div>
        {this.state.error ? <h1>Wrong username & password</h1> : null}
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.username,
    password: state.password
  };
};

// // formal way
// const mapDispatchToProps = dispatch => {
//   return {
//     updateUsername: value => dispatch(updateUsername(value)),
//     updatePassword: value => dispatch(updatePassword(value))
//   };
// };

export default connect(
  mapStateToProps,
  { updateUsername, updatePassword }
  // mapDispatchToProps // formal way
)(Login);
