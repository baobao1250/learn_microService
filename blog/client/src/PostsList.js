import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

const PostsList = ({isChange}) => {
    const [postList, setPostList]=useState([])
    const [isChangeComment, setIschangeComment] =useState(true);
    
    const handleChangeComment =() => {
        setIschangeComment(!isChangeComment);
    };

    const fetchPosts = async()=>{
         const res =  await axios.get("http://posts.com/posts")

         setPostList(Object.values(res.data))
    }

    useEffect(()=>{
        fetchPosts()
    },[isChange ,isChangeComment])

    const renderPost = postList.length >0 && postList.map((item)=>(
        <div className='card' style={{width:"30%" , paddingBottom:"10px", marginBottom:"20px"}} key={item.id}>
            <div className='card-body'>
                <h3>
                    {item.title}
                </h3>
                <CommentList comments={item.comments} />
                <CommentCreate postID={item.id} handleChange={handleChangeComment}/>
            </div>
        </div>
    ))


    return (
        <div className='d-flex flex-row flex-wrap justify-content-between' style={{marginTop:"20px"}}>
           {renderPost}
        </div>
    );
};

export default PostsList