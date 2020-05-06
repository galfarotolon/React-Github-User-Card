import React from 'react';
import './App.css';
import axios from "axios";
import UserCard from "./UserCard"
import FollowerCard from "./FollowerCard"

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

        console.log(res.data);

        axios
          .get(res.data.followers_url)
          .then(res1 => {
            console.log(res1.data);

            this.setState({ user: res.data, followers: res1.data });
          });




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
          userUrl={this.state.user.html_url}

        />

        <h1>My Followers</h1>

        {

          this.state.followers.map(user => {
            return <FollowerCard

              userImg={user.avatar_url}
              userName={user.login}
              userUrl={user.html_url}


            />

          })


        }

      </div>



    );

  };
};
