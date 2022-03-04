import React, { useState } from "react";
import {
  StyledContainer,
  StyledContent,
  StyledImage,
  StyledImageText,
} from "./chapter1.style";
import { useNavigate } from "react-router-dom";

const Chapter1 = () => {
  /** States */
  const [view, setView] = useState(true);

  /** History */
  const history = useNavigate();

  return (
    <React.Fragment>
      {view ? (
        <StyledImage
          active={view}
          src={require("../../assets/images/popup1.png")}
          onClick={() => setView(false)}
          alt="Chapter 1"
        />
      ) : (
        <React.Fragment>
          <StyledContainer
            background={require("../../assets/images/chapter1.png")}
          >
            <StyledContent>
              <div className="col-sm-12 col-lg-12 d-flex justify-content-center">
                <StyledImageText
                  src={require("../../assets/images/text-chapter1.png")}
                  alt="Chapter Text 1"
                  onClick={() => history("/chapter-1-2")}
                />
              </div>
            </StyledContent>
          </StyledContainer>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Chapter1;
