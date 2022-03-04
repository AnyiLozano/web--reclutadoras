import React from "react";
import ContentFirstComponent from "./contentFirstComponent";
import { StyledContainerText, StyledFirstText } from "./firstComponent.style";
import "animate.css";

const FirstComponent = (props) => {
  /** Props */
  const { setViews } = props;
  return (
    <React.Fragment>
      <div className="col-md-12">
        <StyledContainerText>
          <StyledFirstText
            src={require("../../../../assets/images/text-chapter1-view1.png")}
            alt="TExt"
            className="animate__animated animate__fadeInDown"
          />
        </StyledContainerText>
        <ContentFirstComponent setViews={setViews} />
      </div>
    </React.Fragment>
  );
};

export default FirstComponent;
