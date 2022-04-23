import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "../actions/users";
class AddUser extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeDateOfBirth = this.onChangeDateOfBirth.bind(this);
    this.saveUser = this.saveUser.bind(this);
    this.newUser = this.newUser.bind(this);
    this.state = {
      first_name: "",
      last_name: "",
      user_name: "",
      date_of_birth: "",
    };
  }
  onChangeFirstName(e) {
    this.setState({
        first_name: e.target.value,
    });
  }
  onChangeLastName(e) {
    this.setState({
        last_name: e.target.value,
    });
  }
  onChangeUserName(e) {
    this.setState({
        user_name: e.target.value,
    });
  }
  onChangeDateOfBirth(e) {
    this.setState({
        date_of_birth: e.target.value,
    });
  }
  saveUser() {
    const { first_name,
    last_name,
    user_name,
    date_of_birth } = this.state;
    this.props
      .createUser(first_name, last_name, user_name, date_of_birth)
      .then((data) => {
        this.setState({
            first_name: data.first_name,
            last_name: data.last_name,
            user_name: data.user_name,
            date_of_birth: date_of_birth,
        });
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  newUser() {
    this.setState({
        first_name: "",
        last_name: "",
        user_name: "",
        date_of_birth: "",
    });
  }
  render() {
    return (
        
        <div className="submit-form">
            {this.state.submitted ? (
            <div>
                <h4>You submitted successfully!</h4>
                <button className="btn btn-success" onClick={this.newUser}>
                Add
                </button>
            </div>
            ) : (
            <div>
                <div className="form-group">
                <label htmlFor="first_name">First Name:</label>
                <input
                    type="text"
                    className="form-control"
                    id="first_name"
                    required
                    value={this.state.first_name}
                    onChange={this.onChangeFirstName}
                    name="first_name"
                />
                </div>
                <div className="form-group">
                <label htmlFor="last_name">Last Name:</label>
                <input
                    type="text"
                    className="form-control"
                    id="last_name"
                    required
                    value={this.state.last_name}
                    onChange={this.onChangeLastName}
                    name="last_name"
                />
                </div>
                <div className="form-group">
                <label htmlFor="user_name">User Name:</label>
                <input
                    type="text"
                    className="form-control"
                    id="user_name"
                    required
                    value={this.state.user_name}
                    onChange={this.onChangeUserName}
                    name="user_name"
                />
                </div>
                <div className="form-group">
                <label htmlFor="date_of_birth">D.O.B</label>
                <input
                    type="date"
                    className="form-control"
                    id="date_of_birth"
                    required
                    value={this.state.date_of_birth}
                    onChange={this.onChangeDateOfBirth}
                    name="date_of_birth"
                />
                </div>
                <button onClick={this.saveUser} className="btn btn-success">
                Submit
                </button>
            </div>
            )}
      </div>
    );
  }
}
export default connect(null, { createUser })(AddUser);