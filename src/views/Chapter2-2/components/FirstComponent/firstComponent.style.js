import styled from "styled-components";

export const StyledContainerText = styled.div.attrs({
  className: "d-flex justify-content-center",
})``;

export const StyledFirstText = styled.img.attrs({})``;

export const StyledDescription = styled.img`
  @media screen and (min-width: 325px) and (max-width: 915px) {
    width: 40%;
  }

  @media screen and (min-width: 916px) and (max-width: 1199px) {
    width: 80%;
  }
`;

export const StyledDescription1 = styled.img`
  width: 40%;
  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 40%;
  }

  @media screen and (min-width: 916px) and (max-width: 1199px) {
    width: 60%;
  }

  @media screen and (min-width: 1920px) {
    width: 50%;
  }
`;

export const StyledImageMenu1 = styled.img`
`;

export const StyledImageMenu2 = styled.img``;

export const StyledImageMenu3 = styled.img``;

export const StyleImageModal = styled.img`
  position: fixed;
  z-index: 1;
  top: 0%;
  width: 1024px;
  height: 100vh;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 100%;
    height: 100%;
    left: 0%;
  }

  @media screen and (min-width: 1920px) {
    width: 1200px;
    height: 100%;
  }
`;

export const StyledVideoModal = styled.video`
  position: fixed;
  z-index: 1;
  top: 21.9%;
  width: 1024px;
  height: 78.5vh;
  background: black;

  @media screen and (min-width: 325px) and (max-width: 915px) {
    width: 100%;
    height: 79%;
    left: 0%;
  }

  @media screen and (min-width: 916px) and (max-width: 1199px) {
    width: 100%;
    height: 78%;
  }

  @media screen and (min-width: 1920px) {
    width: 1200px;
    height: 75%%;
  }
`;

export const StyledCloseModal = styled.div`
  width: 3.6%;
  height: 7%;
  position: fixed;
  top: 27.2%;
  right: 17.1%;
  z-index: 1;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 5%;
    right: 6%;
    top: 27%;
  }

  @media screen and (min-width: 1920px) {
    right: 22.1%;
  }
`;

export const StyledOpenModal1 = styled.div`
  position: absolute;
  top: 0%;
  left: 14%;
  width: 11%;
  height: 40%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 100%;

  }
`;

export const StyledOpenModal2 = styled.div`
  position: absolute;
  top: 0%;
  left: 27%;
  width: 11%;
  height: 40%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 100%;
  }
`;

export const StyledOpenModal3 = styled.div`
  position: absolute;
  top: 0%;
  left: 40.8%;
  width: 11%;
  height: 40%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 100%;
  }
`;

export const StyledOpenModal4 = styled.div`
  position: absolute;
  top: 0%;
  left: 53.8%;
  width: 11%;
  height: 40%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 100%;
  }
`;

export const StyledLink = styled.a`
  position: absolute;
  top: 61%;
  left: 24.8%;
  width: 11%;
  height: 40%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 100%;
  }
`;

export const StyledLink1 = styled.a`
  position: absolute;
  top: 61%;
  left: 38.8%;
  width: 11%;
  height: 40%;
`;

export const StyledLink2 = styled.a`
  position: absolute;
  top: 61%;
  left: 52.8%;
  width: 11%;
  height: 40%;
`;

export const Styledpop = styled.div`
  position: absolute;
  top: 77%;
  left: 22.8%;
  width: 11%;
  height: 15%;

  @media screen and (min-width: 325px) and (max-width: 915px) {
    top: 79%;
    left: 36.4%;
    width: 4.7%;
    height: 11.4%;
  }

  @media screen and (min-width: 916px) and (max-width: 1199px) {
    top: 77%;
    left: 25.4%;
    width: 8.5%;
    height: 13.4%;
  }

  @media screen and (min-width: 1900px) {
    top: 79%;
    left: 28.3%;
    width: 7.5%;
    height: 11.7%;
  }
`;

export const Styledpop1 = styled.div`
  position: absolute;
  top: 77%;
  left: 35.8%;
  width: 13.3%;
  height: 15%;

  @media screen and (min-width: 325px) and (max-width: 915px) {
    left: 43.2%;
    width: 6.3%;
  }

  @media screen and (min-width: 916px) and (max-width: 1199px) {
    top: 77%;
    left: 37.5%;
    width: 11.5%;
    height: 13.4%;
  }
`;

export const Styledpop2 = styled.div`
  position: absolute;
  top: 77%;
  left: 51.8%;
  width: 10.3%;
  height: 15%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    left: 51.4%;
    width: 4.8%;
  }

  @media screen and (min-width: 916px) and (max-width: 1199px) {
    top: 77%;
    left: 52.5%;
    width: 9%;
    height: 13.4%;
  }
`;

export const Styledpop3 = styled.div`
  position: absolute;
  top: 77%;
  left: 66.8%;
  width: 10.3%;
  height: 15%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    left: 58.8%;
    width: 4.8%;
  }

  @media screen and (min-width: 916px) and (max-width: 1199px) {
    top: 77%;
    left: 65.5%;
    width: 9%;
    height: 13.4%;
  }
`;

export const StyledContainerCircles = styled.div.attrs({
  className: "col-md-12 d-flex justify-content-center",
})`
  margin-top: 1rem;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    margin-top: 1rem;
  }

  @media screen and (min-width: 1920px) {
    margin-top: 3rem;
  }
`;
