import React, { useState } from "react";

const initialComment = {
    name: "",
    body: "",
};

const CommentForm = ({ blogId, setComments, comments }) => {
    const [commentObject, setCommentObject] = useState(initialComment);
    const [loading, setLoading] = useState(false);

    async function handleCommentSubmit(e) {
        e.preventDefault();
        setLoading(true);
        await fetch(
            `https://632566c59075b9cbee4a5ad1.mockapi.io/blogs/${blogId}/comments`,
            {
                method: "POST",
                body: JSON.stringify(commentObject),
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                },
            }
        )
            .then((res) => res.json())
            .then((res) => setComments([...comments, res]))
            .then(setCommentObject(initialComment))
            .catch((err) => console.log(err));
        setLoading(false);
    }

    const handleOnChange = (e) => {
        setCommentObject({ ...commentObject, [e.target.name]: e.target.value });
    };

    return (
        <div>
            {
                loading ? (
                    <div className="ui active centered inline loader"></div>
                ) : (
                    <form className="ui form" onSubmit={handleCommentSubmit}>
                        <h4 style={{ marginTop: "40px" }}>Share your comment</h4>
                        <div
                            className="ui mini icon input fluid"
                            style={{ marginBottom: "5px" }}
                        >
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                onChange={handleOnChange}
                                value={commentObject.name}
                                required
                            />
                        </div>
                        <textarea
                            placeholder="Tell us more"
                            rows="3"
                            name="body"
                            onChange={handleOnChange}
                            value={commentObject.body}
                            style={{ marginBottom: "5px" }}
                            required
                        ></textarea>
                        <button className="ui fluid primary button" type="submit">
                            Send
                        </button>
                    </form>
                )
            }
        </div>
    );
};

export default CommentForm;
