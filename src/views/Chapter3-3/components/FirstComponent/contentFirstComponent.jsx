import React, { useState } from "react";
import {
  StyledCloseModal,
  StyledDescription,
  StyledImageMenu1,
  StyledImageMenu2,
  StyledImageMenu3,
  Styledpop10,
  Styledpop8,
  Styledpop9,
  StyleImageModal,
} from "./firstComponent.style";
import "animate.css";

const ContentFirstComponent = (props) => {
  /** Props */
  const { setViews } = props;

  /** States */
  const [openModal, setOpenModal] = useState(false);
  const [ModalNumber, setModalNumber] = useState(1);

  return (
    <React.Fragment>
      {!openModal ? (
        <div className="col-md-12">
          <div className="container">
            <div className="row">
              <div className="col-md-12 d-flex justify-content-center">
                <StyledDescription
                  src={require("../../../../assets/images/text-3.png")}
                  alt="Description"
                  className="animate__animated animate__fadeInLeft"
                  onClick={() => setOpenModal(true)}
                />
              </div>

              {/* cuadros */}
              <div className="col-md-12 mt-5 d-flex justify-content-center">
                <StyledImageMenu1
                  src={require("../../../../assets/images/morado.png")}
                  alt="Description"
                  className="animate__animated animate__fadeInRight"
                  onClick={() => setOpenModal(true)}
                />
                <StyledImageMenu2
                  src={require("../../../../assets/images/morado1.png")}
                  alt="Description"
                  className="animate__animated animate__fadeInRight"
                  onClick={() => setOpenModal(true)}
                />
                <StyledImageMenu3
                  src={require("../../../../assets/images/morado2.png")}
                  alt="Description"
                  className="animate__animated animate__fadeInRight"
                  onClick={() => setViews(2)}
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
                    setViews(2);
                  }}
                ></Styledpop10>
                {/* Abrir pop ups */}
              </div>
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
                        src={require("../../../../assets/images/pop34.png")}
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
                        src={require("../../../../assets/images/pop35.png")}
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
          </React.Fragment>
          {/* Modal */}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ContentFirstComponent;
