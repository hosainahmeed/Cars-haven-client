import React, { useState, useEffect } from "react";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";

function Cart({ data, readTimeCollect }) {
  const [lateDate, setLateDate] = useState("");

  useEffect(() => {
    const publishDate = new Date(data.publishDate);
    const currentDate = new Date();
    const timeDiff = Math.abs(currentDate - publishDate);
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    setLateDate(daysDiff);
  }, [data.publishDate]);

  return (
    <div key={data.id}>
      <img
        className="w-full"
        src={data.images.blogCoverImage}
        alt={`${data.blogTitle} cover`}
      />
      <div className="flex items-center justify-between p-2">
        <div className="flex gap-4 items-center">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={data.images.authorImage}
            alt={`${data.authorName}'s profile`}
          />
          <div>
            <p className="text-xl font-black">By {data.authorName}</p>
            <p>
              {data.publishDate} ({lateDate} days ago)
            </p>
          </div>
        </div>
        <h2>
          {data.readTime} min read
          <BookmarkAddOutlinedIcon />
        </h2>
      </div>
      <h1 className="text-5xl font-bold w-3/4 p-2 mb-2">{data.blogTitle}</h1>

      <button onClick={() => readTimeCollect(data)} className="p-2 mb-2">
        Mark as read
      </button>
    </div>
  );
}

export default Cart;
