import React, { useState } from "react";
import {
  StyledCloseModal,
  StyledContainerCircles,
  StyledDescription,
  Styledpop,
  Styledpop1,
  Styledpop2,
  Styledpop3,
  StyledVideoModal,
  StyleImageModal,
} from "./firstComponent.style";
import "animate.css";

const ContentFirstComponent = (props) => {
  /** States */
  const [openModal, setOpenModal] = useState(false);
  const [viewVideo, setViewVideo] = useState(false);
  const [ModalNumber, setModalNumber] = useState(1);

  return (
    <React.Fragment>
      {!openModal ? (
        <div className="col-md-12">
          <div className="container">
            <div className="row">
              <div className="col-md-12 d-flex justify-content-center">
                <StyledDescription
                  src={require("../../../../assets/images/chapter-text-2.png")}
                  alt="Description"
                  className="animate__animated animate__fadeInDown"
                />
              </div>
              <StyledContainerCircles>
                <StyledDescription
                  src={require("../../../../assets/images/chapter-cuadro-2.png")}
                  alt="Description"
                  className="animate__animated animate__fadeInUp"
                />
                <Styledpop
                  onClick={() => {
                    setModalNumber(1);
                    setOpenModal(true);
                  }}
                ></Styledpop>
                <Styledpop1
                  onClick={() => {
                    setModalNumber(2);
                    setOpenModal(true);
                  }}
                ></Styledpop1>
                <Styledpop2
                  onClick={() => {
                    setModalNumber(3);
                    setOpenModal(true);
                  }}
                ></Styledpop2>
                <Styledpop3
                  onClick={() => {
                    setModalNumber(4);
                    setOpenModal(true);
                  }}
                ></Styledpop3>
              </StyledContainerCircles>
            </div>
          </div>
        </div>
      ) : (
        <React.Fragment>
          {ModalNumber === 1 && (
            <React.Fragment>
              {viewVideo ? (
                <StyledVideoModal
                  src={require("../../../../assets/video/STRETCH.mp4")}
                  controls
                  id="video"
                  onEnded={() => setViewVideo(false)}
                ></StyledVideoModal>
              ) : (
                <React.Fragment>
                  <StyleImageModal
                    src={require("../../../../assets/images/videomodal1.png")}
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
          {/* video 2 */}
          {ModalNumber === 2 && (
            <React.Fragment>
              {viewVideo ? (
                <StyledVideoModal
                  src={require("../../../../assets/video/ACT FOR PATIENTS AND CUSTOMERS.mp4")}
                  controls
                  id="video"
                  onEnded={() => setViewVideo(false)}
                ></StyledVideoModal>
              ) : (
                <React.Fragment>
                  <StyleImageModal
                    src={require("../../../../assets/images/modalvideo2.png")}
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

          {/* video 3 */}
          {ModalNumber === 3 && (
            <React.Fragment>
              {viewVideo ? (
                <StyledVideoModal
                  src={require("../../../../assets/video/TAKE ACTION.mp4")}
                  controls
                  id="video"
                  onEnded={() => setViewVideo(false)}
                ></StyledVideoModal>
              ) : (
                <React.Fragment>
                  <StyleImageModal
                    src={require("../../../../assets/images/videomodal3.png")}
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

          {/* video4 */}
          {ModalNumber === 4 && (
            <React.Fragment>
              {viewVideo ? (
                <StyledVideoModal
                  src={require("../../../../assets/video/Think Sanofi First -.mp4")}
                  controls
                  id="video"
                  onEnded={() => setViewVideo(false)}
                ></StyledVideoModal>
              ) : (
                <React.Fragment>
                  <StyleImageModal
                    src={require("../../../../assets/images/videomodal4.png")}
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
      )}
    </React.Fragment>
  );
};

export default ContentFirstComponent;
