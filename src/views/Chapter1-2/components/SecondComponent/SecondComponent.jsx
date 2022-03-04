import React from "react";
import {
  StyledContainerSecondComponent,
  StyledDescription,
  StyledImageMenu1,
  StyledImageMenu2,
  StyledImageMenu3,
} from "../FirstComponent/firstComponent.style";

const SecondComponent = (props) => {
  /** Props */
  const { setViews } = props;

  return (
    <StyledContainerSecondComponent>
      <div className="container">
        <div className="row">
          <div className="col-md-8 d-flex justify-content-end">
            <StyledDescription
              src={require("../../../../assets/images/description-chapter1-view2.png")}
              alt="Description"
              className="animate__animated animate__fadeInLeft"
            />
          </div>
          <div className="col-md-4">
            <div className="col-md-12 mb-2">
              <StyledImageMenu1
                src={require("../../../../assets/images/menu1-unselected.png")}
                alt="Description"
                className="animate__animated animate__fadeInRight"
                onClick={() => setViews(1)}
              />
            </div>
            <div className="col-md-12 mb-2">
              <StyledImageMenu2
                src={require("../../../../assets/images/menu2-Selected.png")}
                alt="Description"
                onClick={() => setViews(2)}
                className="animate__animated animate__fadeInRight"
              />
            </div>
            <div className="col-md-12 mb-2">
              <StyledImageMenu3
                src={require("../../../../assets/images/menu3.png")}
                alt="Description"
                className="animate__animated animate__fadeInRight"
                onClick={() => setViews(3)}
              />
            </div>
          </div>
        </div>
      </div>
    </StyledContainerSecondComponent>
  );
};

export default SecondComponent;
