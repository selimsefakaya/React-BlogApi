import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import blogs from "../blogs.json"
// {blogs.map(subject => {

const BlogList = () => {
    const [subjects, setSubjects] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getBlogs();
    }, []);

    async function getBlogs() {
        setLoading(false);
        await fetch("https://632566c59075b9cbee4a5ad1.mockapi.io/blogs")
            .then((res) => res.json())
            .then((res) => setSubjects(res))
            .catch((err) => console.log(err));
        setLoading(true);
    }

    return !loading ? (
        <div className="ui active centered inline loader"></div>
    ) : subjects.length === 0 ? (
        <Link to="/add-blog" className="ui inverted red button fluid">
            Add a new blog!
        </Link>
    ) : (
        <div className="ui list">
            {subjects.map((subject) => {
                return (
                    <div className="item" key={subject.id}>
                        <i className="map marker icon"></i>
                        <div className="content">
                            <Link to={`posts/${subject.id}`} className="header">
                                {subject.title}
                            </Link>
                            <div className="description">{subject.created_at}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default BlogList;
