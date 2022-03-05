import styled from "styled-components";

export const StyledContainerText = styled.div.attrs({
  className: "d-flex justify-content-center",
})``;

export const StyledFirstText = styled.img.attrs({})``;

export const StyledDescription = styled.img`
  ${({ styles }) => styles}

  @media screen and (min-width: 325px) and (max-width: 915px) {
    width: 40%;
  }

  @media screen and (min-width: 916px) and (max-width: 1199px) {
    width: 50%;
    height: 100%;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    width: 40%;
    height: 100%;
  }
`;

export const StyledDescription2= styled.img`
  ${({ styles }) => styles}

  @media screen and (min-width: 325px) and (max-width: 915px) {
    width: 40%;
  }

  @media screen and (min-width: 916px) and (max-width: 1199px) {
    width: 60%;
    height: 100%;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    width: 40%;
    height: 100%;
  }
`;

export const StyledDescription1 = styled.img`
  margin-right: 5%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    margin-top: -2rem;
    width: 40%;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    width: 40%;
    height: 100%;
  }
`;

export const StyledDescription6 = styled.img`
  ${({ styles }) => styles}

  @media screen and (min-width: 325px) and (max-width: 915px) {
    width: 40%;
  }

  @media screen and (min-width: 916px) and (max-width: 1199px) {
    width: 57%;
    height: 100%;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    width: 40%;
    height: 100%;
  }
`;


export const StyledContainerColumn = styled.div.attrs({
  className: "col-md-12 d-flex justify-content-center",
})`
  margin-top: 3rem;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    margin-top: 1rem;
  }
`;

export const StyledImageMenu1 = styled.img`
  margin-right: 20px;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 24%;
    height: 80%;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    width: 24%;
    height: 80%;
  }
`;

export const StyledImageMenu2 = styled.img`
  margin-right: 20px;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 24%;
    height: 80%;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    width: 24%;
    height: 80%;
  }
`;

export const StyledImageMenu3 = styled.img`
  margin-right: 20px;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 24%;
    height: 80%;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    width: 24%;
    height: 80%;
  }
`;

export const StyledImageMenu45 = styled.img`
  position: absolute;
  left: 49%;
  top: 74%;

  @media screen and (min-width: 325px) and (max-width: 915px) {
    left: 58%;
    top: 51%;
    width: 40%;
  }

  @media screen and (min-width: 916px) and (max-width: 1199px) {
    left: 50%;
    top: 60%;
    width: 40%;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    left: 50%;
    top: 60%;
    width: 40%;
  }
`;

export const StyleImageModal = styled.img`
  position: fixed;
  z-index: 1;
  top: 0%;
  width: 63.1%;
  height: 100vh;

  @media screen and (min-width: 325px) and (max-width: 915px) {
    width: 100%;
  }

  @media screen and (min-width: 916px) and (max-width: 1199px) {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    width: 1024px;
    height: 100%;
  }
`;

export const StyleImageModal21 = styled.img`
  position: fixed;
  z-index: 1;
  top: 0%;
  width: 63.1%;
  height: 100vh;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 100%;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    width: 1024px;
    height: 100%;
  }
`;

export const StyleImageModal00 = styled.img`
  position: fixed;
  z-index: 1;
  top: 0%;
  width: 63.1%;
  height: 100vh;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 100%;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    width: 1024px;
    height: 100%;
  }
`;

export const StyledVideoModal = styled.video`
  position: absolute;
  z-index: 1;
  top: -882%;
  width: 100%;
  height: 77.5vh;
  background: black;
`;

export const StyledCloseModal = styled.div`
  width: 5%;
  height: 10%;
  position: fixed;
  top: 26%;
  right: 21%;
  z-index: 2;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    right: 6%;
  }

  @media (min-width: 1280px) and (max-width: 1919px){
    right: 16.4%;
  }

`;

export const StyledCloseModalOnModal = styled.div`
  width: 5%;
  height: 10%;
  position: fixed;
  top: 26%;
  right: 21%;
  z-index: 2;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    right: 6%;
    top: 37.4%;
  }
`;

export const StyledCloseModal21 = styled.div`
  width: 5%;
  height: 10%;
  position: fixed;
  top: 26%;
  right: 21%;
  z-index: 2;
`;

export const StyledCloseModal1 = styled.div`
  width: 5%;
  height: 10%;
  position: fixed;
  top: 37%;
  right: 21%;
  z-index: 2;

  @media (min-width: 1280px) and (max-width: 1919px){
    right: 16%;
  }
`;

export const StyledCloseModal2 = styled.div`
  width: 14%;
  height: 10%;
  position: fixed;
  top: 69%;
  right: 59%;
  z-index: 3;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 22%;
    height: 10%;
    position: fixed;
    top: 69%;
    right: 64%;
    z-index: 3;
  }
`;
export const StyledCloseModal3 = styled.div`
  width: 14%;
  height: 10%;
  position: fixed;
  top: 69%;
  right: 43%;
  z-index: 3;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 22%;
    height: 10%;
    position: fixed;
    top: 69%;
    right: 39%;
    z-index: 3;
  }
`;
export const StyledCloseModal4 = styled.div`
  width: 14%;
  height: 10%;
  position: fixed;
  top: 69%;
  right: 27%;
  z-index: 3;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 22%;
    height: 10%;
    position: fixed;
    top: 69%;
    right: 14%;
    z-index: 3;
  }
`;

export const StyledOpenModal1 = styled.div`
  position: absolute;
  top: 0%;
  left: 14%;
  width: 11%;
  height: 40%;
`;

export const StyledOpenModal2 = styled.div`
  position: absolute;
  top: 0%;
  left: 27%;
  width: 11%;
  height: 40%;
`;

export const StyledOpenModal3 = styled.div`
  position: absolute;
  top: 0%;
  left: 40.8%;
  width: 11%;
  height: 40%;
`;

export const StyledOpenModal4 = styled.div`
  position: absolute;
  top: 0%;
  left: 53.8%;
  width: 11%;
  height: 40%;
`;

export const StyledLink = styled.a`
  position: absolute;
  top: 61%;
  left: 24.8%;
  width: 11%;
  height: 40%;
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

export const Styledpop8 = styled.div`
  position: absolute;
  top: 51%;
  left: 12.8%;
  width: 23%;
  height: 22%;

  @media screen and (min-width: 325px) and (max-width: 915px) {
    top: 45%;
    left: 18.8%;
    width: 19%;
    height: 25%;
  }

  @media screen and (min-width: 916px) and (max-width: 1199px) {
    top: 34%;
    left: 15%;
    width: 20%;
    height: 31%;
  }

  @media (min-width: 1920px){
    top: 44%;
    left: 13.2%;
    width: 22.7%;
    height: 18.8%;
  }
`;

export const Styledpop9 = styled.div`
  position: absolute;
  top: 51%;
  left: 37.8%;
  width: 23%;
  height: 22%;

  @media screen and (min-width: 325px) and (max-width: 915px) {
    top: 45%;
    left: 39.8%;
    width: 18%;
    height: 24%;
  }

  @media screen and (min-width: 916px) and (max-width: 1199px) {
    top: 34%;
    left: 39%;
    width: 20%;
    height: 31%;
  }

  @media (min-width: 1920px){
    top: 44%;
    left: 38.2%;
    width: 22.7%;
    height: 18.8%;
  }
`;

export const Styledpop10 = styled.div`
  position: absolute;
  top: 52%;
  left: 62.8%;
  width: 22%;
  height: 21%;

  @media screen and (min-width: 325px) and (max-width: 915px) {
    top: 45%;
    left: 60.2%;
    width: 18.3%;
    height: 24.3%;
  }

  @media screen and (min-width: 916px) and (max-width: 1199px) {
    top: 34%;
    left: 63%;
    width: 20%;
    height: 31%;
  }

  @media (min-width: 1920px){
    top: 44%;
    left: 62.2%;
    width: 22.7%;
    height: 18.8%;
  }
`;

export const Styledpop11 = styled.div`
  position: absolute;
  top: 64%;
  left: 46.8%;
  width: 14%;
  height: 23%;

  @media screen and (min-width: 916px) and (max-width: 1199px) {
    width: 10%;
    height: 30%;
    top: 47%;
    left: 54%;
  }
`;

export const Styledpop12 = styled.div`
  position: absolute;
  top: 37%;
  left: 66.8%;
  width: 20%;
  height: 17%;
`;

export const Styledpop33 = styled.div`
  position: absolute;
  top: 72%;
  left: 46.8%;
  width: 11%;
  height: 23%;

  @media screen and (min-width: 325px) and (max-width: 915px) {
    top: 54%;
    left: 55.8%;
  }
  @media screen and (min-width: 916px) and (max-width: 1199px) {
    top: 58%;
    left: 50%;
  }
`;

export const StyledModalContent1 = styled.div.attrs({
  className: "styled-content-modal-1",
})`
  position: fixed;
  z-index: 10;
  top: 0%;
  left: 18%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 100%;
    left: 0%;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    width: 1024px;
    left: 12.5%;
  }
`;

export const StyledModalImage1 = styled.img.attrs({
  className: "styled-image-modal-1",
})`
  width: 1222px;
  height: 101vh;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 100%;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    width: 1024px;
  }
`;

export const StyledCloseModal10 = styled.div.attrs({
  className: "styled-close-modal-1",
})`
  position: absolute;
  z-index: 10;
  top: 27%;
  right: 5.7%;
  width: 5.5%;
  height: 7.3%;
`;

export const StyledModalContent2 = styled.div.attrs({
  className: "styled-content-modal-2",
})`
  position: fixed;
  z-index: 10;
  top: 0%;
  left: 18%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 100%;
    left: 0%;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    width: 1024px;
    left: 12.5%;
  }
`;

export const StyledModalImage2 = styled.img.attrs({
  className: "styled-image-modal-1",
})`
  width: 1222px;
  height: 101vh;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 100%;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    width: 1024px;
  }
`;

export const StyledCloseModal20 = styled.div.attrs({
  className: "styled-close-modal-1",
})`
  position: absolute;
  z-index: 10;
  top: 27%;
  right: 5.7%;
  width: 5.5%;
  height: 7.3%;
`;

export const StyledModalContent0 = styled.div.attrs({
  className: "styled-content-modal-1",
})`
  position: fixed;
  z-index: 10;
  top: 0%;
  left: 18%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 100%;
    left: 0%;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    width: 1024px;
    left: 12.5%;
  }
`;

export const StyledModalImage0 = styled.img.attrs({
  className: "styled-image-modal-1",
})`
  width: 1222px;
  height: 101vh;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 100%;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    width: 1024px;
  }
`;

export const StyledCloseModal30 = styled.div.attrs({
  className: "styled-close-modal-1",
})`
  position: absolute;
  z-index: 10;
  top: 27%;
  right: 5.7%;
  width: 5.5%;
  height: 7.3%;
`;

export const StyledContainerSecondComponent = styled.div.attrs({
  className: "container",
})`
  @media screen and (min-width: 325px) and (max-width: 1199px) {
    max-width: 100% !important;
  }
`;