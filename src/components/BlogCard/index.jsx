import React, { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const BlogCard = ({ data }) => {
  const [thumbNail, setThumbNail] = useState("");

  useEffect(() => {
    const imgSrcMatch = data?.content?.match(/<img[^>]+src="([^">]+)"/);
    if (imgSrcMatch?.[1]) {
      setThumbNail(imgSrcMatch[1]);
    }
  }, [data]);

  return (
    <Link
      to={data.link}
      target="_blank"
      className="BlogCard text-decoration-none"
      title={data.title}
    >
      <div className="thumbnail">
        {thumbNail && <img src={thumbNail} alt={data.title} />}
      </div>

      <div className="content">
        <h3 className="title">{data.title}</h3>
      </div>
    </Link>
  );
};

export default BlogCard;
