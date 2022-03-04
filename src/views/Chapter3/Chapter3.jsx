import React, { useState } from "react";
import {
  StyledCloseModal,
  StyledContent,
  StyledDescription,
  StyledImage,
  StyledImageButton,
  StyledImageMenu1,
  StyledImageMenu2,
  StyledImageMenu3,
  Styledpop5,
  Styledpop6,
  Styledpop7,
  StyleImageModal,
} from "./chapter1.style";
import { useNavigate } from "react-router-dom";

const Chapter3 = (props) => {
  /** States */
  const [view, setView] = useState(true);

  /** History */
  const history = useNavigate();

  const [openModal, setOpenModal] = useState(false);
  const [ModalNumber, setModalNumber] = useState(1);

  return (
    <React.Fragment>
      {view ? (
        <StyledImage
          active={view}
          src={require("../../assets/images/popu3.png")}
          onClick={() => setView(false)}
          alt="Chapter 3"
        />
      ) : (
        <React.Fragment>
          <StyledImage
            src={require("../../assets/images/chater3.png")}
            alt="Chapter 3"
          />
          <StyledImageButton
            src={require("../../assets/images/next.png")}
            alt="Buttton"
            onClick={() => history("/chapter-3-3")}
          />
          <StyledContent>
            <div className="col-md-12">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 d-flex justify-content-end">
                    <StyledDescription
                      src={require("../../assets/images/top1.png")}
                      alt="Description"
                      className="animate__animated animate__fadeInLeft"
                    />
                  </div>

                  {/* Cuadros */}
                  <div className="col-md-4 mt-4">
                    <div className="col-md-12 mb-2">
                      <StyledImageMenu1
                        src={require("../../assets/images/cuadro1.png")}
                        alt="Description"
                        className="animate__animated animate__fadeInRight"
                        onClick={() => setOpenModal(true)}
                      />
                    </div>
                    <div className="col-md-12 mb-2">
                      <StyledImageMenu2
                        src={require("../../assets/images/cuadro2.png")}
                        alt="Description"
                        className="animate__animated animate__fadeInRight"
                        onClick={() => setOpenModal(true)}
                      />
                    </div>
                    {/* cuadros  */}

                    {/* SLIDER */}
                    <div className="col-md-12 mb-2">
                      <StyledImageMenu3
                        src={require("../../assets/images/CUADRO3.png")}
                        alt="Description"
                        className="animate__animated animate__fadeInRight"
                      />
                    </div>
                    {/* SLIDER */}

                    {/* Abrir pop ups */}
                    <Styledpop5
                      onClick={() => {
                        setModalNumber(1);
                        setOpenModal(true);
                      }}
                    ></Styledpop5>
                    <Styledpop6
                      onClick={() => {
                        setModalNumber(2);
                        setOpenModal(true);
                      }}
                    ></Styledpop6>
                    <Styledpop7
                      onClick={() => {
                        history("/chapter-3-3");
                      }}
                    ></Styledpop7>
                    {/* Abrir pop ups */}
                  </div>
                </div>
              </div>
            </div>
          </StyledContent>
        </React.Fragment>
      )}

      {/* Modal */}
      <React.Fragment>
        {ModalNumber === 1 && (
          <React.Fragment>
            {openModal && (
              <React.Fragment>
                <React.Fragment>
                  <StyleImageModal
                    src={require("../../assets/images/pop31.png")}
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
                    src={require("../../assets/images/popu32.png")}
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
  );
};

export default Chapter3;
