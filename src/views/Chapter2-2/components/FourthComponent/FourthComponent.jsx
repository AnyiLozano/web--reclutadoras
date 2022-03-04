import React from "react";
import { StyledFourImage, StyledFourImage1 } from "../../chapter-1-2.style";

const FourthComponent = () => {
  return (
    <div className="container">
      <div className="col-md-12 d-flex justify-content-center">
        <StyledFourImage
          src={require("../../../../assets/images/capitulo2.png")}
          alt="Image"
          className="animate__animated animate__fadeIn"
        />
      </div>
      <div className="col-md-12 d-flex justify-content-center mt-5">
        <StyledFourImage1
          src={require("../../../../assets/images/capitulo2-2.png")}
          alt="Image"
          className="animate__animated animate__fadeIn"
        />
      </div>
    </div>
  );
};

export default FourthComponent;
