import { Col, Container, Form, Row, Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../css/PostCard.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";

function UploadPicModal({ show, handleClose }) {
  const [img, setImg] = useState("");

  const uploadBoxRef = useRef(null);
  const imgUploadInputRef = useRef(null);

  const setImageData = (ev) => {
    const img = {
      preview: URL.createObjectURL(ev.target.files[0]),
      data: ev.target.files[0],
    };
    console.log("Upload Pic Modal: upload img:", img);
    setImg(img);
  };

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", img.data);
    console.log("UploadPicModal: formData::", formData);
    axios
      .post(`${API_BASE_URL}/upload/img`, formData)
      .then((res) => {
        console.log("Response recieved ::", res);
        const baseDir = res.data.baseDir;
        const fileName = res.data.fileName;
        const uploadFolder = res.data.uploadFolder;
        const filePath = baseDir + uploadFolder + "/" + fileName;
        console.log("Complete file path to image", filePath);
        uploadPost(filePath);
      })
      .catch((err) => {
        console.log("Error Occured while uploading the image", err);
      });
  };

  const CONFIG_OBJ = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  const uploadPost = (filePath) => {
    const postTitle = document.getElementById("caption").value;
    const desc = document.getElementById("location").value;
    const reqBody = {
      title: postTitle,
      desc: desc,
      img: filePath,
      author: "65127fda3e5617ad5ed6200e",
    };

    axios
      .post(`${API_BASE_URL}/createPost`, reqBody, CONFIG_OBJ)
      .then((res) => {
        console.log("Create post response", res);
      })
      .catch((err) => {
        console.log("Error occured while creating post", err);
      });
  };

  useEffect(() => {
    const uploadBox = uploadBoxRef.current;
    const imgUploadInput = imgUploadInputRef.current;
    console.log("UploadPicModal: useEffect: uploadBox::", uploadBox);
    console.log("UploadPicModal:  useEffect: imgUploadInput::", imgUploadInput);

    if (uploadBox && imgUploadInput && show) {
      uploadBox.addEventListener("click", () => {
        imgUploadInput.click();
      });
    }
  }, [show]);

  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Upload Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            <Row>
              <Col ref={uploadBoxRef} className="uploadBox" xs={12} md={6}>
                <Stack className="col-12 align-items-center justify-content-center h-100">
                  {img && (
                    <img
                      alt="preview"
                      src={img.preview}
                      className="imgPreview"
                    />
                  )}

                  <input
                    ref={imgUploadInputRef}
                    type="file"
                    className="fileUpload"
                    accept=".jpeg, .jpg, .png"
                    id="imgUploadInput"
                    onChange={setImageData}
                  />
                  <i className="bi bi-cloud-upload-fill" id="uploadIcon"></i>

                  <h2 id="uploadTitle">Upload Image</h2>
                </Stack>
              </Col>
              <Col xs={12} md={6}>
                <div className="d-flex flex-column justify-content-between h-100">
                  <div>
                    <Form>
                      <Form.Group className="mb-3" controlId="addCaption">
                        <Form.Label>Add Caption</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Caption"
                          className="formTextBox"
                          id="caption"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="addLocation">
                        <Form.Label>
                          <i className="bi bi-geo-alt"></i> Add Location
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter City Name"
                          className="formTextBox"
                          id="location"
                        />
                      </Form.Group>
                    </Form>
                  </div>
                  <div>
                    <Button
                      type="submit"
                      className="float-end uploadBtn"
                      onClick={uploadImage}
                    >
                      Upload
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UploadPicModal;
