import React, { useState } from "react";
import {
  StyledCloseModal,
  StyledCloseModal1,
  StyledCloseModal10,
  StyledCloseModal2,
  StyledCloseModal20,
  StyledCloseModal3,
  StyledCloseModal30,
  StyledCloseModal4,
  StyledCloseModalOnModal,
  StyledContainerColumn,
  StyledDescription,
  StyledImageMenu1,
  StyledImageMenu2,
  StyledImageMenu3,
  StyledModalContent0,
  StyledModalContent1,
  StyledModalContent2,
  StyledModalImage0,
  StyledModalImage1,
  StyledModalImage2,
  Styledpop10,
  Styledpop8,
  Styledpop9,
  StyleImageModal,
} from "./firstComponent.style";
import "animate.css";

const ContentFirstComponent = (props) => {
  /** States */
  const [openModal, setOpenModal] = useState(false);
  const [ModalNumber, setModalNumber] = useState(1);
  const [intoModal1, setIntoModal1] = useState(false);
  const [intoModal2, setIntoModal2] = useState(false);
  const [intoModal0, setIntoModal0] = useState(false);

  return (
    <React.Fragment>
      {!openModal ? (
        <div className="col-md-12">
          <div className="container">
            <div className="row">
              <div className="col-md-12 d-flex justify-content-center">
                <StyledDescription
                  src={require("../../../../assets/images/branding.png")}
                  alt="Description"
                  className="animate__animated animate__fadeInLeft"
                  onClick={() => setOpenModal(true)}
                />
              </div>

              {/* cuadros */}
              <StyledContainerColumn>
                <StyledImageMenu1
                  src={require("../../../../assets/images/branding1.png")}
                  alt="Description"
                  className="animate__animated animate__fadeInRight"
                  onClick={() => setOpenModal(true)}
                />
                <StyledImageMenu2
                  src={require("../../../../assets/images/branding1.png")}
                  alt="Description"
                  className="animate__animated animate__fadeInRight"
                  onClick={() => setOpenModal(true)}
                />
                <StyledImageMenu3
                  src={require("../../../../assets/images/branding2.png")}
                  alt="Description"
                  className="animate__animated animate__fadeInRight"
                  onClick={() => setOpenModal(true)}
                />

                {/* Abrir pop ups */}
                <Styledpop8
                  onClick={() => {
                    setModalNumber(1);
                    setOpenModal(true);
                  }}
                ></Styledpop8>
                <Styledpop9
                  onClick={() => {
                    setModalNumber(2);
                    setOpenModal(true);
                  }}
                ></Styledpop9>
                <Styledpop10
                  onClick={() => {
                    setModalNumber(3);
                    setOpenModal(true);
                  }}
                ></Styledpop10>
                {/* Abrir pop ups */}
              </StyledContainerColumn>
            </div>
          </div>
        </div>
      ) : (
        <React.Fragment>
          {/* Modal */}
          <React.Fragment>
            {ModalNumber === 1 && (
              <React.Fragment>
                {openModal && (
                  <React.Fragment>
                    <React.Fragment>
                      <StyleImageModal
                        src={require("../../../../assets/images/pop43.png")}
                        alt="Video Image"
                      />
                      <StyledCloseModal
                        onClick={() => setOpenModal(false)}
                      ></StyledCloseModal>
                    </React.Fragment>
                  </React.Fragment>
                )}
              </React.Fragment>
            )}

            {ModalNumber === 2 && (
              <React.Fragment>
                {openModal && (
                  <React.Fragment>
                    <React.Fragment>
                      <StyleImageModal
                        src={require("../../../../assets/images/pop444.png")}
                        alt="Video Image"
                      />
                      <StyledCloseModal
                        onClick={() => setOpenModal(false)}
                      ></StyledCloseModal>
                    </React.Fragment>
                  </React.Fragment>
                )}
              </React.Fragment>
            )}

            {ModalNumber === 3 && (
              <React.Fragment>
                {openModal && (
                  <React.Fragment>
                    <React.Fragment>
                      <StyleImageModal
                        src={require("../../../../assets/images/pop45.png")}
                        alt="Video Image"
                      />
                      <StyledCloseModalOnModal
                        onClick={() => setOpenModal(false)}
                      ></StyledCloseModalOnModal>
                      <StyledCloseModal1
                        onClick={() => setOpenModal(false)}
                      ></StyledCloseModal1>

                      {/* modal */}
                      <StyledCloseModal2
                        onClick={() => setIntoModal1(true)}
                      ></StyledCloseModal2>
                      <StyledCloseModal3
                        onClick={() => setIntoModal2(true)}
                      ></StyledCloseModal3>
                      <StyledCloseModal4
                        onClick={() => setIntoModal0(true)}
                      ></StyledCloseModal4>

                      {/* Modals */}
                      {intoModal1 && (
                        <StyledModalContent1>
                          <StyledModalImage1
                            src={require("../../../../assets/images/modal40.png")}
                            alt="Modal 40"
                          />
                          <StyledCloseModal10
                            onClick={() => setIntoModal1(false)}
                          ></StyledCloseModal10>
                        </StyledModalContent1>
                      )}

                      {intoModal2 && (
                        <StyledModalContent2>
                          <StyledModalImage2
                            src={require("../../../../assets/images/modal47.png")}
                            alt="Modal 40"
                          />
                          <StyledCloseModal20
                            onClick={() => setIntoModal2(false)}
                          ></StyledCloseModal20>
                        </StyledModalContent2>
                      )}

                      {intoModal0 && (
                        <StyledModalContent0>
                          <StyledModalImage0
                            src={require("../../../../assets/images/modal48.png")}
                            alt="Modal 40"
                          />
                          <StyledCloseModal30
                            onClick={() => setIntoModal0(false)}
                          ></StyledCloseModal30>
                        </StyledModalContent0>
                      )}

                      {/* modal */}
                    </React.Fragment>
                  </React.Fragment>
                )}
              </React.Fragment>
            )}
          </React.Fragment>
          {/* Modal */}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ContentFirstComponent;
