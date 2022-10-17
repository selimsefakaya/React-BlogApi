import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const initialStatus = {
    class: "hidden",
    content: "",
};

const EditBlog = () => {
    const [loading, setLoading] = useState(false);
    const blogId = useParams().id;
    const [details, setDetails] = useState({});
    const [status, setStatus] = useState(initialStatus);
    const navigate = useNavigate();

    useEffect(() => {
        getBlog();
    }, []);

    async function getBlog() {
        setLoading(true);
        await fetch(`https://632566c59075b9cbee4a5ad1.mockapi.io/blogs/${blogId}`)
            .then((res) => res.json())
            .then((res) => setDetails(res))
            .catch((err) => console.log(err));
        setLoading(false);
    }

    async function onSubmitForm(e) {
        e.preventDefault();
        setLoading(true);
        setStatus(initialStatus);

        await fetch(`https://632566c59075b9cbee4a5ad1.mockapi.io/blogs/${blogId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(details),
        })
            .then((res) => navigate(`/posts/${blogId}`))
            .catch((err) => {
                setStatus({ class: "ui error message", content: "Error!" });
                console.log(err);
            });
        setLoading(false);
    }

    const onChangeBlog = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    };

    return (
        <div>
            {loading ? (
                <div className="ui active centered inline loader"></div>
            ) : (
                <form onSubmit={onSubmitForm}>
                    <h2>Edit Blog</h2>
                    <div className="ui form" style={{ margin: "20px 0" }}>
                        <div className="field">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={details.name}
                                required
                                disabled
                            />
                        </div>
                    </div>

                    <div className="ui form" style={{ margin: "20px 0" }}>
                        <div className="field">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={details.email}
                                required
                                disabled
                            />
                        </div>
                    </div>

                    <div className="ui form" style={{ margin: "20px 0" }}>
                        <div className="field">
                            <label>Blog Title</label>
                            <input
                                type="text"
                                name="title"
                                placeholder="Title"
                                value={details.title}
                                onChange={onChangeBlog}
                                required
                            />
                        </div>
                    </div>

                    <div className="ui form" style={{ margin: "20px 0" }}>
                        <div className="field">
                            <label>Blog Content</label>
                            <textarea
                                name="content"
                                placeholder="Write your blog."
                                value={details.content}
                                onChange={onChangeBlog}
                                required
                            ></textarea>
                        </div>
                    </div>

                    <button className="ui primary button fluid" type="submit">
                        Update Blog
                    </button>
                    <div className={status.class}>{status.content}</div>
                </form>
            )}
        </div>
    );
};

export default EditBlog;
