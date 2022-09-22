import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Comments from "./Comments";
import NotFound from "./NotFound";

const BlogDetail = () => {
    const blogId = useParams().id;
    const [details, setDetails] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [boxClass, setBoxClass] = useState("hidden");

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

    async function deleteBlog() {
        setLoading(true);
        await fetch(`https://632566c59075b9cbee4a5ad1.mockapi.io/blogs/${blogId}`, {
            method: "DELETE",
        })
            .then((res) => setLoading(false))
            .then((res) => navigate("/"))
            .catch((err) => console.log(err));
    }

    return loading ? (
        <div className="ui active centered inline loader"></div>
    ) : details.title ? (
        <>
            <div className={boxClass}>
                <div className="box-sure">
                    Are you sure you want to delete {details.title}?
                    <div className="ui buttons">
                        <button className="ui button" onClick={() => setBoxClass("hidden")}>
                            Cancel
                        </button>
                        <div className="or"></div>
                        <button
                            className="ui red button"
                            onClick={() => {
                                setBoxClass("hidden");
                                deleteBlog();
                            }}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>

            <h2 className="ui header">{details.title}</h2>
            <sub>{details.name}</sub>
            <br />
            <sup>{details.created_at}</sup>
            <br />
            <p>{details.content}</p>
            <div className="ui buttons right floated">
                <Link to={`/posts/${blogId}/edit`} className="ui button grey">
                    Edit
                </Link>
                <button
                    onClick={() => setBoxClass("box-show")}
                    className="ui button red"
                >
                    Delete
                </button>
            </div>
            <br />
            {/* Yorumlar */}
            <Comments blogId={blogId} />
        </>
    ) : (
        <NotFound />
    );
};

export default BlogDetail;
