import React from "react";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";

const Posts = () => {
  return (
      <div className="row mt-3 ">
        <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
          <PostCard />
        </div>
        <div className="col-12 col-sm-6 col-md-4  d-flex justify-content-center">
          <PostCard />
        </div>
        <div className="ccol-12 col-sm-6 col-md-4  d-flex justify-content-center">
          <PostCard />
        </div>
      </div>
  );
};

export default Posts;
