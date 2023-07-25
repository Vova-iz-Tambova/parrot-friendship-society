// компонент Friends

import React from 'react';
import { Link } from 'react-router-dom';

import './Friends.css';

function Friends(props) {
  let { friends } = props.serverData;

  return (
      <div className="friends">
        <ul className="friends__list">
        {
          friends.map((friend) => {
            return (
              <li className="friend-preview" key={friend.id} >
                <Link to={`${friend.id}`}>
                    <img className="friend-preview__image" src={friend.profilePicDark} alt=""/>
                    <span className="friend-preview__name">{friend.name}</span>
                </Link>
              </li>
            )
          })
        }
        </ul>
      </div>
  );
}

export default Friends;