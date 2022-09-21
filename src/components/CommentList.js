import React from "react";

const CommentList = ({ comments }) => {
    return (
        <div className="ui relaxed list">
            <h3 style={{ marginTop: "40px" }}>Comments</h3>
            {comments.map((comment) => {
                return (
                    <div className="item" key={`${comment.post_id}_${comment.id}`}>
                        <img
                            className="ui avatar image"
                            src={comment.avatar}
                            alt={comment.name}
                        />
                        <div className="content">
                            <div>
                                <span className="header" style={{ marginBottom: "2px" }}>
                                    {comment.name}
                                </span>
                                <sup>{comment.created_at}</sup>
                            </div>
                            <div className="description">{comment.body}</div>
                        </div>
                        <br />
                        <br />
                    </div>
                );
            })}
        </div>
    );
};

export default CommentList;
