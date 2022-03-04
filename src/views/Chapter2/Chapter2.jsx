import React, { useState } from "react";
import {
  StyledImage,
  StyledImageButton,
  StyledImageText,
} from "./chapter2.style";
import { useNavigate } from "react-router-dom";
import "animate.css";

const Chapter2 = () => {
  /** States */
  const [view, setView] = useState(true);

  /** History */
  const history = useNavigate();

  return (
    <React.Fragment>
      {view ? (
        <StyledImage
          active={view}
          src={require("../../assets/images/popu2.png")}
          onClick={() => setView(false)}
          alt="Chapter 1"
        />
      ) : (
        <React.Fragment>
          <StyledImage
            src={require("../../assets/images/chapter2.png")}
            alt="Chapter 1"
          />
          <StyledImageText
            src={require("../../assets/images/text-chapter2-view2.png")}
            alt="Chapter Text 1"
            className="animate__animated animate__fadeInDown"
          />
          <StyledImageButton
            src={require("../../assets/images/button-chapter1.png")}
            alt="Buttton"
            className="animate__animated animate__pulse"
            onClick={() => history("/chapter-2-2")}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Chapter2;
