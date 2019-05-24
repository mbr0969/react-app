import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile  = () =>{
  return(
    <div className={classes.content}>
      <div>
        <img src='content.jpg'/>
      </div>
      <div>ava + discr</div>
      <MyPosts/>      
      </div>
    
  );
}

export default Profile;