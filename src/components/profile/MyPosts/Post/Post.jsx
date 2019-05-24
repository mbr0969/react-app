import React from 'react';
import classes from './Post.module.css';

const Post = (props) =>{
  return(       
    <div className={classes.item}>
    <img src='https://mtdata.ru/u2/photoF8D2/20335701414-0/original.jpg' />
      {props.message}
      <div>
       <span>like</span>
       </div>
    </div>
  );
}

export default Post;