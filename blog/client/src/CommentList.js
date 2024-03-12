import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CommentList = ({postID}) => {
    const [comment , setComment] = useState([])

    const getCommets = async ()=>{
        const res = await axios.get(`http://localhost:4001/posts/${postID}/comments`)
console.log(res);
        setComment(Object.values(res.data))
    }

    const renderComment = comment.map((item)=>(
       <li key={item.id}>{item.content}</li>
    ))

    useEffect(()=>{
        getCommets()
    },[])


    return (
        <div>
            {renderComment}
        </div>
    );
};

export default CommentList;