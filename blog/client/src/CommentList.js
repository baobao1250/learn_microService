import React from 'react';

const CommentList = ({comments}) => {

    const renderComment = comments.map((item)=>(
       <li key={item.id}>{item.content}</li>
    ))

    return (
        <div>
            {renderComment}
        </div>
    );
};

export default CommentList;