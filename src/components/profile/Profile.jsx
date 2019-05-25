import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile  = () =>{
  return(
    <div>
      <div>
        <img src='content.jpg'/>
      </div>
      <div>ava + discrict</div>
      <MyPosts/>      
      </div>
    
  );
};

export default Profile;