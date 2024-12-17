import React from "react";
import BlogsData from "./BlogsData";
import BlogCard from "./BlogsCard";
import "./Blogs.css"

const Blogs = () => {
    return (
        <div className="blogs-container">
            <section className="blogs">
                <h1 className="blogs-title">Our Latest Blogs</h1>
                <div className="blogs-grid">
                    {BlogsData.map((blog) => (
                        <BlogCard key={blog.id} {...blog} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Blogs;
