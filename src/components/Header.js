import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="ui grey large fixed three item inverted menu">
            <Link to="add-blog" className="item">Add Blog</Link>
            <Link to="/" className="item home">Blog List</Link>
            <Link to="contact" className="item">Contact</Link>
        </div>
    );
};

export default Header;
