import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const PostCreate = () => {
    const [title, setTitle] = useState("")

    const onSubmit= async(event)=>{
        event.preventDefault();

        await axios.post('http://posts.com/posts/create',{
            title
        });
         
        setTitle("");

    };

    return (
        <div>
            <form onSubmit={onSubmit} >
                <div className="form-group">
                    <label>Title</label>
                    <input value={title} onChange={(e)=> setTitle(e.target.value)} className="form-control" style={{marginTop:20}}/>
                </div>
                <button className="btn btn-primary" style={{marginTop:20}} disabled={title.length === 0}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default PostCreate;