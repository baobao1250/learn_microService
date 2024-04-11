import axios from 'axios';
import React, { useState } from 'react';

const CommentCreate = ({postID,handleChange}) => {
    const [comment , setComment ] = useState("")
    const onSubmit = async (e) =>{
        e.preventDefault()
        
        console.log("postID: ",postID);
        await axios.post(`http://posts.com/posts/${postID}/comments`,{
            content : comment
        }).then((rep)=>{if(rep) handleChange()})

        setComment("")
    }
    return (
        <form onSubmit={onSubmit} style={{padding:"10px 0"}}>
            <div className='form-group' >
              <label>New Comment</label>
              <input 
                    className='form-control' 
                    style={{margin:"10px 0px"}} 
                    value={comment} 
                    onChange={(e)=>{setComment(e.target.value)}}
                />  
            </div>
            <button className='btn btn-primary' disabled={comment.length === 0}>
                Submit
            </button>
        </form>
    );
};

export default CommentCreate;