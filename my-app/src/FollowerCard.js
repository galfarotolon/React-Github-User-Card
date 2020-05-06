import React from "react";
import './App.css';


export default function FollowerCard(props) {



    return (


        <div className="userCard">
            <img src={props.userImg} />

            <div className="userInfo">
                <p><span className="key">Username: </span> &nbsp; <span className="value">{props.userName}</span></p>
                <span className="value"> <br /><a href={props.userUrl} target="_blank">{props.userUrl} </a></span>


            </div>

        </div >



    )
}