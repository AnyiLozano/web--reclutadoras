import React from "react";
import { StyledContainer, StyledImageTitle } from "./home.styles";
import "animate.css";

const Home = () => {
  return (
    <React.Fragment>
      <StyledContainer
        background={require("../../assets/images/portada-background.png")}
      >
        <div className="col-md-12 d-flex justify-content-center mt-4">
          <StyledImageTitle
            src={require("../../assets/images/title-portada.png")}
            alt="Portada's Title"
            className="animate__animated animate__fadeInUp"
          />
        </div>
      </StyledContainer>
    </React.Fragment>
  );
};

export default Home;
