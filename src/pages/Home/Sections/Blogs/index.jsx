import { forwardRef, useEffect, useState } from "react";
import "./index.scss";
import BlogCard from "../../../../components/BlogCard";
import { Link } from "react-router-dom";
const Blogs = forwardRef((props, ref) => {
  const [blogData, setBlogData] = useState([]);
  
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@thepriyammondal"
        );
        const data = await response.json();
        setBlogData(data.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchBlogData();
  }, []);
  return (
    <div ref={ref} className="blogs mx-auto my-5">
      <section className="text-center mb-5">
        <h2 id="blogsHeading">Blogs</h2>
      </section>
      <section className="blogCardWrapper">
        {blogData?.map((blog) => (
          <BlogCard key={blog.pubDate} data={blog} />
        ))}
      </section>
      <Link
        to="https://medium.com/@thepriyammondal"
        target="_blank"
        className="d-flex justify-content-center mt-5 text-decoration-none"
      >
        <button title="View More Blogs" className="btn btn-outline-light">View More</button>
      </Link>
    </div>
  );
});

export default Blogs;
