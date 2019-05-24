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
        <Post message='Привет!!' />
        <Post message='Как дела?'/>
        <Post message='Отлично!!!' />
      </div>  
      </div>
  );
}

export default MyPosts;