import React from 'react';

const CommentList = ({comments}) => {

    const renderComment = comments.map((item)=>{
        let content;

        if(item.status === "approved"){
            content = item.content;
        }

        if(item.status === "pending"){
            content = "This comment is awaiting moderation";
        }

        if(item.status === "rejected"){
            content = "This comment has been rejected";
        }

       return(
           <li key={item.id}>{content}</li>
        )   
    })

    return (
        <div>
            {renderComment}
        </div>
    );
};

export default CommentList;