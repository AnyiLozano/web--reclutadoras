import React from "react";
import ContentFirstComponent from "./contentFirstComponent";
import { StyledContainerText } from "./firstComponent.style";
import "animate.css";

const FirstComponent = (props) => {
  /** Props */
  const { setViews } = props;
  return (
    <React.Fragment>
      <div className="col-md-12">
        <StyledContainerText></StyledContainerText>
        <ContentFirstComponent setViews={setViews} />
      </div>
    </React.Fragment>
  );
};

export default FirstComponent;
