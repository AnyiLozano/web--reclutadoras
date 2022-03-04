import React, { useState } from "react";
import {
  StyledCloseModal,
  StyledDescription,
  Styledpop11,
  Styledpop12,
  StyleImageModal,
} from "../FirstComponent/firstComponent.style";

const SecondComponent = (props) => {
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
                  src={require("../../../../assets/images/circulo.png")}
                  alt="Description"
                  className="animate__animated animate__fadeInLeft"
                />
              </div>

              {/* cuadros */}
              <div className="col-md-12 mt-5 d-flex justify-content-center">
                {/* Abrir pop ups */}
                <Styledpop11
                  onClick={() => {
                    setModalNumber(1);
                    setOpenModal(true);
                  }}
                ></Styledpop11>
                <Styledpop12
                  onClick={() => {
                    setModalNumber(2);
                    setOpenModal(true);
                  }}
                ></Styledpop12>
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
                        src={require("../../../../assets/images/pop37.png")}
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
                        src={require("../../../../assets/images/pop38.png")}
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

export default SecondComponent;
