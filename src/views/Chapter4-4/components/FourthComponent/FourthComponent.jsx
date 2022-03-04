import React from "react";
import { StyledFourImage } from "../../chapter-1-2.style";

const FourthComponent = () => {
  return (
    <div className="container mt-4">
      <div className="col-md-12 d-flex justify-content-center">
        <StyledFourImage
          src={require("../../../../assets/images/vte.png")}
          alt="Image"
          className="animate__animated animate__fadeIn"
        />
      </div>
    </div>
  );
};

export default FourthComponent;
