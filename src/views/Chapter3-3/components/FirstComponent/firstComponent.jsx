import React from "react";
import ContentFirstComponent from "./contentFirstComponent";
import "animate.css";

const FirstComponent = (props) => {
  /** Props */
  const { setViews } = props;
  return (
    <React.Fragment>
      <div className="col-md-12">
        <ContentFirstComponent setViews={setViews} />
      </div>
    </React.Fragment>
  );
};

export default FirstComponent;
