import React, { useState } from "react";
import {
  StyledContainerButtons,
  StyledContent,
  StyledDescription,
  StyledImage,
  StyledImageButton,
  StyledImageMenu1,
  StyledImageMenu2,
  StyledImageMenu3,
  Styledpop5,
  Styledpop6,
  Styledpop7,
} from "./chapter1.style";
import { useNavigate } from "react-router-dom";

const Chapter4 = (props) => {
  /** States */
  const [view, setView] = useState(true);

  /** History */
  const history = useNavigate();

  return (
    <React.Fragment>
      {view ? (
        <StyledImage
          active={view}
          src={require("../../assets/images/POP44.png")}
          onClick={() => setView(false)}
          alt="Chapter 3"
        />
      ) : (
        <React.Fragment>
          <StyledImage
            src={require("../../assets/images/chater4.png")}
            alt="Chapter 3"
          />
          <StyledImageButton
            src={require("../../assets/images/next.png")}
            alt="Buttton"
            onClick={() =>
              history({
                pathname: "/chapter-4-4",
                search: "1",
              })
            }
          />
          <StyledContent>
            <div className="col-md-12">
              <div className="container">
                <div className="row">
                  <div className="col-md-12  d-flex justify-content-center">
                    <StyledDescription
                      src={require("../../assets/images/HAVE.png")}
                      alt="Description"
                      className="animate__animated animate__fadeInLeft"
                    />
                  </div>

                  {/* Cuadros */}
                  <StyledContainerButtons className="col-md-12">
                    <StyledImageMenu1
                      src={require("../../assets/images/POL1.png")}
                      alt="Description"
                      className="animate__animated animate__fadeInRight menu-1"
                    />
                    <StyledImageMenu2
                      src={require("../../assets/images/pol2.png")}
                      alt="Description"
                      className="animate__animated animate__fadeInRight"
                    />
                    <StyledImageMenu3
                      src={require("../../assets/images/POL3.png")}
                      alt="Description"
                      className="animate__animated animate__fadeInRight"
                    />
                  </StyledContainerButtons>
                  {/* cuadros  */}

                  {/* Abrir pop ups */}
                  <Styledpop5
                    onClick={() => {
                      history("/chapter-4-4");
                    }}
                  ></Styledpop5>
                  <Styledpop6
                    onClick={() =>
                      history({
                        pathname: "/chapter-4-4",
                        search: "1",
                      })
                    }
                  ></Styledpop6>
                  <Styledpop7
                    onClick={() =>
                      history({
                        pathname: "/chapter-4-4",
                        search: "3",
                      })
                    }
                  ></Styledpop7>
                  {/* Abrir pop ups */}
                </div>
              </div>
            </div>
          </StyledContent>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Chapter4;
