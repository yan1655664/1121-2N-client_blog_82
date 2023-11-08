import { useState } from 'react';
import blogData_82 from '../data/blogData';

const BlogLocalJson_82 = () => {
    const [name, setName] = useState('yan1655664');
    const [id, setId] = useState('212417082');
    const [blogs, setBlogs] = useState(blogData_82);

    return (
        <section className="blogs">
            <div className="section-title">
                <h2> Blogs from Local Json </h2>
                <h3> {name}, {id} </h3>
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

export default BlogLocalJson_82