import React from "react";
import { StyledFourImage } from "../../chapter-1-2.style";

const FourthComponent = () => {
  return (
    <div className="container">
      <div className="col-md-12 d-flex justify-content-center">
        <StyledFourImage
          src={require("../../../../assets/images/cuartaimagen.png")}
          alt="Image"
          className="animate__animated animate__fadeIn hola"
        />
      </div>
    </div>
  );
};

export default FourthComponent;
