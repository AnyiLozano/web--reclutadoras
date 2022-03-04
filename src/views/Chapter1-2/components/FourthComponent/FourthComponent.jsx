import React from "react";
import { StyledFourImage } from "../../chapter-1-2.style";
import { StyledContainerFourthComponent } from "../FirstComponent/firstComponent.style";

const FourthComponent = () => {
  return (
    <StyledContainerFourthComponent>
      <div className="col-md-12 d-flex justify-content-center">
        <StyledFourImage
          src={require("../../../../assets/images/fourImage.png")}
          alt="Image"
          className="animate__animated animate__fadeIn"
        />
      </div>
    </StyledContainerFourthComponent>
  );
};

export default FourthComponent;
