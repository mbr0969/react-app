import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () =>{
  return(
    
      <div>
        My Post
        <div>
          <textarea></textarea>
          <button>Добавить</button>
        </div>
      <div className={classes.posts}>      
        <Post message='Привет!!' likesCount='89' />
        <Post message='Как дела?' likesCount='4'/>
        <Post message='Отлично!!!' likesCount='123' />
      </div>  
      </div>
  );
};

export default MyPosts;