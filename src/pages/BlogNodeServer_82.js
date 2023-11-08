
import { useState, useEffect } from "react";

let api_url = `http://localhost:5000/api/card_212417082`;

const BlogNodeServer_82 = () => {
    const [blogs, setBlogs] = useState([]);

    const fetchBlogFromNodeServer = async () => {
        try {
            const response = await fetch(api_url);
            const data = await response.json();
            console.log('blogs data', data);

            setBlogs(data);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchBlogFromNodeServer();
    }, []);

    return (
        <section className="blogs">
            <div className="section-title">
                <h2> Blogs from Node Server </h2>
                <h3>212417082</h3>
            </div>
            <div className="blogs-center">
                {blogs.map((item) => {
                    const { id, descripe, img, remote_url, title, category } = item;
                    return (
                        <article key={id} className="blog">
                            <img
                                src={img}
                                alt={title}
                                className="img blog-img"
                            />
                            <div className="blog-content">
                                <span>{category} <i className="fa-solid fa-mug-saucer"></i></span>
                                <h3>{title}</h3>
                                <p>{descripe}</p>
                                <a href="#">read more</a>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default BlogNodeServer_82