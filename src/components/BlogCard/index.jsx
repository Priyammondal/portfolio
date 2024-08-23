import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const BlogCard = ({ data }) => {
  const [thumbNail, setThumbNail] = useState("");
  useEffect(() => {
    const imgSrcMatch = data?.content.match(/<img[^>]+src="([^">]+)"/);
    if (imgSrcMatch) {
      setThumbNail(imgSrcMatch[1]);
    }
  }, []);
  return (
    <Link
      to={data.link}
      target="_blank"
      className="BlogCard text-decoration-none text-light"
    >
      <section className="thumbnail">
        <img src={thumbNail} alt="thumbNail" />
      </section>
      <section className="title">{data.title}</section>
    </Link>
  );
};

export default BlogCard;
