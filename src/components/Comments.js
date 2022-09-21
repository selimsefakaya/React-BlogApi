import React, { useEffect, useState } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

const Comments = ({ blogId, loading, setLoading }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments();
    }, []);

    async function getComments() {
        await fetch(
            `https://632566c59075b9cbee4a5ad1.mockapi.io/blogs/${blogId}/comments`
        )
            .then((res) => res.json())
            .then((res) => setComments(res))
            .catch((err) => console.log(err));
    }

    return (
        <>
            <CommentList comments={comments} />
            <CommentForm
                comments={comments}
                setComments={setComments}
                blogId={blogId}
            />
        </>
    );
};

export default Comments;
