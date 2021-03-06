import React, { useState } from "react";
import {
  StyledCloseModal,
  StyledDescription6,
  StyledImageMenu45,
  Styledpop33,
  StyleImageModal00,
} from "../FirstComponent/firstComponent.style";

const ThirdComponent = (props) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <React.Fragment>
      {!openModal && (
        <div className="col-md-12">
          <div className="container">
            <div className="row">
              <div className="col-md-12 d-flex justify-content-center bla">
                <StyledDescription6
                  src={require("../../../../assets/images/value.png")}
                  alt="Description"
                  className="hola"
                />
              </div>
              <div className="col-md-12 mb-2">
                <StyledImageMenu45
                  src={require("../../../../assets/images/signo.png")}
                  alt="Description"
                  className="animate__animated animate__fadeInRight"
                />
              </div>

              {/* Abrir pop ups */}
              <Styledpop33
                onClick={() => {
                  setOpenModal(true);
                }}
              ></Styledpop33>
              {/* Abrir pop ups */}
            </div>
          </div>
        </div>
      )}

      {openModal && (
        <React.Fragment>
          <React.Fragment>
            <StyleImageModal00
              src={require("../../../../assets/images/bauld.png")}
              alt="Video Image"
            />
            <StyledCloseModal
              onClick={() => setOpenModal(false)}
            ></StyledCloseModal>
          </React.Fragment>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ThirdComponent;
