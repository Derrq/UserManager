import React, { Component } from "react";
import { connect } from "react-redux";
import AddUserModal from "../components/add-user-modal";
import DeleteAllUsers from "../components/delete-user-dialog";
import DeleteByIdModal from "../components/deleteById-user-dialog";
import EditUser from "../components/update-user-modal";
import { createUser, updateUser, deleteUser, retrieveUsers, retrieveUserById, deleteAllUsers } from "../actions/users";
class UsersList extends Component {
  constructor(props) {
    super(props);
    this.refreshData = this.refreshData.bind(this);
    this.removeAllUsers = this.removeAllUsers.bind(this);
    this.createNewUser =this.createNewUser.bind(this);
    this.editUser =this.editUser.bind(this);
    this.deleteById =this.deleteById.bind(this);
    this.state = {
        users: [],
        show: false,
    };
  }
  componentDidMount() {
    this.props.retrieveUsers();
  }
  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;
    this.setState({
      searchTitle: searchTitle,
    });
  }
  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  }
  refreshData() {
    this.setState({
      currentUser: null,
      currentIndex: -1,
    });
  }

  // retrieveById=(id)=>{
  //   this.props.retrieveUserById(id)
  //   .then((response) =>{
  //     console.log(response);
  //   }).catch((e)=>{
  //     console.log(e);
  //   });
  // }

  createNewUser(data){
    this.props.createUser(data)
    .then((response) =>{
      console.log(response);
      this.refreshData();
    }).catch((e)=>{
      console.log(e);
    });
  }
  editUser(id, data){
    this.props.updateUser(id, data)
    .then((response) =>{
      console.log(response);
      this.refreshData();
    }).catch((e)=>{
      console.log(e);
    });
  }
  deleteById(id){
    this.props.deleteUser(id)
    .then((response)=>{
      this.refreshData();
    }).catch((e)=>{
      console.log(e);
    });
  }
  removeAllUsers() {
    this.props
      .deleteAllUsers()
      .then((response) => {
        console.log(response);
        this.refreshData();
      })
      .catch((e) => {
        console.log(e);
      });
  }
  render() {
    const { users } = this.props;
    console.log(users);
    return (
        <div>
        <table className="table table-bordered table-dark">
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>User Name</th>
                <th>Date of birth</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        {
        users.map((user, index)=>(
          user ?
            <tbody key={index}>
              <tr>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.user_name}</td>
                  <td>{user.date_of_birth}</td>
                  <th><EditUser editUser={this.editUser} user_id={user.id}/></th>
                  <th><DeleteByIdModal deleteById={this.deleteById}/></th>
              </tr>
            </tbody>
          : <p> No Record to display</p> )) 
      }

      </table>
        <hr/>
        <AddUserModal createNewUser={this.createNewUser} />
        <DeleteAllUsers removeAllUsers={this.removeAllUsers}/>
        </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};
export default connect(mapStateToProps, { retrieveUsers, retrieveUserById, deleteAllUsers, createUser, updateUser, deleteUser })(UsersList);