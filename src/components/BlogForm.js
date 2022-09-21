import React, { useState } from "react";

const initialBlog = {
    title: "",
    content: "",
    name: "",
    email: "",
};

const initialStatus = {
    class: "hidden",
    content: "",
};

const BlogForm = () => {
    const [blogObject, setBlogObject] = useState(initialBlog);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(initialStatus);

    async function onSubmitForm(e) {
        e.preventDefault();
        setLoading(true);
        setStatus(initialStatus);

        await fetch(`https://632566c59075b9cbee4a5ad1.mockapi.io/blogs/`, {
            method: "POST",
            body: JSON.stringify(blogObject),
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
        })
            .then(setBlogObject(initialBlog))
            .then(setStatus({ class: "ui success message", content: "Success!" }))
            .catch((err) => {
                setStatus({ class: "ui error message", content: "Error!" });
                console.log(err);
            });
        setLoading(false);
    }

    const onChangeBlog = (e) => {
        setBlogObject({ ...blogObject, [e.target.name]: e.target.value });
    };

    return (
        <div>
            {loading ? (
                <div className="ui active centered inline loader"></div>
            ) : (
                <form onSubmit={onSubmitForm}>
                    <h2>Add Blog Form</h2>
                    <div className={status.class}>{status.content}</div>
                    <div className="ui form" style={{ margin: "20px 0" }}>
                        <div className="field">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={blogObject.name}
                                onChange={onChangeBlog}
                                required
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
                                value={blogObject.email}
                                onChange={onChangeBlog}
                                required
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
                                value={blogObject.title}
                                onChange={onChangeBlog}
                                required
                            />
                        </div>
                    </div>

                    <div className="ui form" style={{ margin: "20px 0" }}>
                        <div className="field">
                            <label>Blog Content</label>
                            <textarea
                                rows="3"
                                name="content"
                                placeholder="Write your blog."
                                value={blogObject.content}
                                onChange={onChangeBlog}
                                required
                            ></textarea>
                        </div>
                    </div>
                    
                    <button className="ui primary button fluid" type="submit">
                        Add Blog
                    </button>
                </form>
            )}
        </div>
    );
};

export default BlogForm;
