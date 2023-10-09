import React, { useState } from "react";
import "../css/profile.css";
import Popup from "../components/Popup";
import UploadPicModal from "../components/UploadPicModal";

export const Profile = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    let imageData = null;
    const setImageData = (imgData)=> imageData = imgData;

    const [showUploadPic, setShowUploadPic] = useState(false);
    const closeUploadPic = () => setShowUploadPic(false);
    
  return (
    <div className="container shadow mt-4 w-75 mt-2">
      <div className="row pt-2">
        <div className="col-md-6 d-flex flex-column">
          <img
            className="rounded-circle profile-img"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          ></img>
          <h3>radha_soami</h3>
          <span>Radha Ji</span>
          <span>
            UI/UX Designer <a href="#">@RadhaSoami</a>| Follow{" "}
            <a href="#">X@RadhaSoami</a>
          </span>
          <span>
            My portfolio @<a href="#">portfolio@RadhaSoami</a>
          </span>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-between ">
          <div className="d-flex justify-content-around mt-4 mx-auto">
            <div className="text-center rightBorder px-4">
              <h5>10</h5>
              <h6>Posts</h6>
            </div>
            <div className="text-center rightBorder px-4">
              <h5>20</h5>
              <h6>Followers</h6>
            </div>
            <div className="text-center px-4">
              <h5>30</h5>
              <h6>Following</h6>
            </div>
          </div>
          <div className="d-flex justify-content-end mb-4">
            <button className="btn btn-primary me-4 ">Edit </button>
            <button className="btn btn-primary me-4 " onClick={()=>setShowUploadPic(true)}> Upload Post</button>
          </div>
        </div>
      </div>
      <hr />
      <div className="row mb-4">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              className="card-img-top"
              alt="..."
              onClick={handleShow}
            />
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
      </div>
      <Popup show={show} handleClose={handleClose}/>
      <UploadPicModal show={showUploadPic} handleClose={closeUploadPic} setImageData={setImageData}/>
    </div>
  );
};
