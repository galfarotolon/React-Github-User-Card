import React from "react";
import './App.css';


export default function UserCard(props) {



    return (


        <div className="userCard">
            <img src={props.userImg} />

            <h2>{props.name}</h2>
            <div className="userInfo">
                <p><span className="key">Username: </span> &nbsp; <span className="value">{props.userName}</span></p>
                <p><span className="key" >Followers: </span> &nbsp; <span className="value">{props.followers} followers</span></p>
                <p><span className="key">Following: </span> &nbsp; <span className="value">{props.following} following</span></p>
                <span className="value"> <br /><a href={props.userUrl} target="_blank">{props.userUrl} </a></span>

            </div>

        </div >



    )
}