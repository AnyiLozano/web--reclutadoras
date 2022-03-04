import React from "react";
import ContentFirstComponent from "./contentFirstComponent";
import "animate.css";

const FirstComponent = (props) => {
  /** Props */
  const { setViews, setModal } = props;
  return (
    <React.Fragment>
      <div className="col-md-12">
        <ContentFirstComponent setViews={setViews} setModal={setModal} />
      </div>
    </React.Fragment>
  );
};

export default FirstComponent;
