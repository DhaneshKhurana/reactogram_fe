import React from "react";
import "../css/PostCard.css";

const PostCard = () => {
  return (
    <div className="card shadow postCard">
      <div className="card-header ">
        <div className="row">
          <div className="col-6 d-flex align-items-center ">
            <img
              className="rounded-circle profile-img"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            ></img>
            <div className="mx-2 ">
              <h6 className="my-0 py-0 ">Name</h6>
              <p className="my-0 py-0 ">Description</p>
            </div>
          </div>
          <div className="col-6 d-flex flex-row-reverse align-items-center">
            <span className="float-end ">
              <i class="bi bi-three-dots-vertical"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="card-body">
        <img
          className="img-fluid p-2 rounded-4"
          src="https://images.unsplash.com/photo-1566827833194-2e4b5626bd1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2NlbmFyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        ></img>
      </div>
      <div className="card-footer">
        <div className="row">
          <div className="col-6">
            <span>
              <i class="bi bi-heart"></i>
              <i class="bi bi-chat"></i>
              <i class="bi bi-geo-alt"></i>
            </span>
          </div>
          <div className="col-6">
            <span className="float-end fs-5 fw-bold">200 Likes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
