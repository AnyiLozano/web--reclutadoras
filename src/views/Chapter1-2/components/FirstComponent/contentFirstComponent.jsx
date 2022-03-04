import React, { useState } from "react";
import {
  StyledCloseModal,
  StyledContainer,
  StyledDescription,
  StyledImageMenu1,
  StyledImageMenu2,
  StyledImageMenu3,
  StyledVideoModal,
  StyleImageModal,
} from "./firstComponent.style";
import "animate.css";

const ContentFirstComponent = (props) => {
  /** Props */
  const { setViews } = props;

  /** States */
  const [openModal, setOpenModal] = useState(false);
  const [viewVideo, setViewVideo] = useState(false);

  return (
    <React.Fragment>
      {!openModal ? (
        <StyledContainer>
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-sm-7 d-flex justify-content-end">
                <StyledDescription
                  src={require("../../../../assets/images/description-chapter1-view1.png")}
                  alt="Description"
                  className="animate__animated animate__fadeInLeft"
                  onClick={() => setOpenModal(true)}
                />
              </div>
              <div className="col-md-5 col-sm-5">
                <div className="col-md-12 mb-2">
                  <StyledImageMenu1
                    src={require("../../../../assets/images/menu1.png")}
                    alt="Description"
                    className="animate__animated animate__fadeInRight"
                    onClick={() => setViews(1)}
                  />
                </div>
                <div className="col-md-12 mb-2">
                  <StyledImageMenu2
                    src={require("../../../../assets/images/menu2.png")}
                    alt="Description"
                    onClick={() => setViews(2)}
                    className="animate__animated animate__fadeInRight"
                  />
                </div>
                <div className="col-md-12 mb-2">
                  <StyledImageMenu3
                    src={require("../../../../assets/images/menu3.png")}
                    alt="Description"
                    className="animate__animated animate__fadeInRight"
                    onClick={() => setViews(3)}
                  />
                </div>
              </div>
            </div>
          </div>
        </StyledContainer>
      ) : (
        <React.Fragment>
          {viewVideo ? (
            <StyledVideoModal
              src={require("../../../../assets/video/Video-SD.mp4")}
              controls
              id="video"
              onEnded={() => setViewVideo(false)}
            ></StyledVideoModal>
          ) : (
            <React.Fragment>
              <StyleImageModal
                src={require("../../../../assets/images/video.png")}
                alt="Video Image"
                onClick={() => setViewVideo(true)}
              />
              <StyledCloseModal
                onClick={() => setOpenModal(false)}
              ></StyledCloseModal>
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ContentFirstComponent;
