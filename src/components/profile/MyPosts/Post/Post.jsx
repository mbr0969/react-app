import React from 'react';
//noinspection JSUnresolvedVariable
import s from './Post.module.css';

const Post = (props) =>{
  return(       
    <div className={s.item}>
    <img src='https://mtdata.ru/u2/photoF8D2/20335701414-0/original.jpg' />
      {props.message}
      <div>
       <span>like: {props.likesCount}</span>
       </div>
    </div>
  );
};

export default Post;