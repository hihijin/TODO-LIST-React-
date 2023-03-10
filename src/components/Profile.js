import './Profile.css';
import './ToDoListItem.scss';

import React from 'react';

function Profile({  todo, onChangeSelectedTodo, onInsertToggle}) {
    return (
        <div className="Profile">
            <img className="ProfileImage" src="https://mblogthumb-phinf.pstatic.net/MjAyMTA3MDJfMjg0/MDAxNjI1MjM3MDEwMDEx.16ZkPZkXZmj6MQyJIpZlTidJmYGFnehv2QoiaIWVHAsg.louS2WVp9f5dzxMHdh1MdS-3bZgOIm68sJhcToobTPAg.JPEG.yyabbj/IMG_3332.JPG?type=w800"></img>
            <span className="ProfileName">박희진</span>
            <span className="ProfileNameChange">변경</span>
            <div className="MadeBy">Made By hihijin</div>
        </div>
    )
}

export default Profile;