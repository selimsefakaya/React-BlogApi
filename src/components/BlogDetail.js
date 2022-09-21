import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";

const BlogDetail = () => {
    const blogId = useParams().id;
    const [details, setDetails] = useState({});
    const [loading, setLoading] = useState(false);

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

    return loading ? (
        <div className="ui active centered inline loader"></div>
    ) : (
        <>
            <h2 className="ui header">{details.title}</h2>
            <sub>{details.name}</sub>
            <br />
            <sup>{details.created_at}</sup>
            <br />
            <p>{details.content}</p>

            {/* Yorumlar */}
            <Comments blogId={blogId} />
        </>
    );
};

export default BlogDetail;
