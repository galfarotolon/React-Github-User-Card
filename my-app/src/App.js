import React from 'react';
import './App.css';
import axios from "axios";
import UserCard from "./UserCard"

export default class App extends React.Component {
  constructor() {

    super();
    this.state = {
      user: "",
      followers: [],
      url: "https://api.github.com/users/galfarotolon"
    };
  }
  componentDidMount() {

    axios
      .get(this.state.url)
      .then(res => {

        console.log(res.data)
        this.setState({ user: res.data });


      })

      .catch(err => console.log(err));

  }




  render() {
    return (

      <div className="App" >

        <h1>GitHub User List</h1>
        <UserCard
          name={this.state.user.name}
          userImg={this.state.user.avatar_url}
          userName={this.state.user.login}
          followers={this.state.user.followers}
          following={this.state.user.following}

        />

        <h2>My Followers</h2>

        {

          this.state.followers.map(user => {
            return <UserCard
              name={user.name}
              userImg={user.avatar_url}
              userName={user.login}
              followers={user.followers}
              following={user.following}

            />

          })


        }

      </div>



    );

  };
};