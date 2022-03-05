import styled from "styled-components";

export const StyledImage = styled.img`
  width: 1024px;
  height: 100vh;
  ${({ active }) => (active ? "position: absolute; z-index: 1;" : "")}

  @media screen and (min-width: 325px) and (max-width: 915px) {
    width: 100%;
  }

  @media screen and (min-width: 916px) and (max-width: 1199px) {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    width: 1024px;
    ${({ isBackground }) => (isBackground ? "height: 100vh" : "height: 100%")}
  }

  @media screen and (min-width: 1920px) {
    width: 1200px;
    ${({ isBackground }) => (isBackground ? "height: 100vh" : "height: 100%")}
  }
`;

export const StyledImageText = styled.img`
  position: absolute;
  top: 50%;
  left: 33%;

  @media screen and (min-width: 325px) and (max-width: 915px) {
    width: 45%;
  }
`;

export const StyledImageButton = styled.img`
  position: absolute;
  top: 42%;
  left: 74%;
  width: 3%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    left: 92%;
  }

  @media screen and (min-width: 916px) and (max-width: 1199px) {
    width: 4%;
    heigth: auto;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    width: 4%;
    left: 90%;
  }

  @media screen and (min-width: 1920px) {
    left: 90%;
  }
`;

export const StyledDescription = styled.img`
  position: absolute;
  left: 18%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 45%;
  }

  @media screen and (min-width: 916px) and (max-width: 1199px) {
    width: 50%;
    height: 60%;
    left: 12%;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    left: 7%;
    width: 55%;
  }
`;

export const StyledContent = styled.div`
  position: absolute;
  width: 63.1%;
  height: 46%;
  top: 47%;
  left: 18.5%;

  @media screen and (min-width: 1920px) {
    width: 100%;
    left: 0%;
  }
`;

export const StyledImageMenu1 = styled.img`
  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 65%;
  }

  @media screen and (min-width: 916px) and (max-width: 1199px) {
    width: 100%;
    height: 60%;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    left: 7%;
    width: 100%;
  }

  
`;

export const StyledImageMenu2 = styled.img`
  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 65%;
  }

  @media screen and (min-width: 916px) and (max-width: 1199px) {
    width: 100%;
    height: 60%;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    left: 7%;
    width: 100%;
  }
`;

export const StyledImageMenu3 = styled.img`
  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 65%;
  }

  @media screen and (min-width: 916px) and (max-width: 1199px) {
    width: 100%;
    height: 60%;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    left: 7%;
    width: 100%;
  }
`;

export const StyledVideoModal = styled.video`
  position: fixed;
  z-index: 1;
  top: 21.9%;
  width: 1200px;
  height: 77.5vh;
  background: black;
`;

export const StyleImageModal = styled.img`
  position: absolute;
  z-index: 1;
  top: 0%;
  width: 1024px;
  height: 100vh;

  right: 18.7%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    top: 0%;
    width: 100%;
    height: 100vh;
    right: 0%;
  }

  @media screen and (min-width: 916px) and (max-width: 1199px) {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    height: 100%;
    right: 0%;
  }

  @media screen and (min-width: 1920px) {
    width: 1200px;
    right: 0%;
  }
`;

export const StyledCloseModal = styled.div`
  width: 3.6%;
  height: 7%;
  position: fixed;
  top: 27.4%;
  right: 22%;
  z-index: 2;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    top: 27.4%;
    right: 6.8%;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    right: 17%;
  }
`;

export const Styledpop5 = styled.div`
  position: absolute;
  top: 5%;
  left: 67.8%;
  width: 21%;
  height: 19%;

  @media (min-width: 1280px) and (max-width: 1919px) {
    top: 8.6%;
    left: 69.3%;
    width: 28%;
    height: 20%;
  }

  @media (min-width: 1920px){
    top: 5%;
    left: 68.3%;
    width: 20%;
    height: 15.4%;
  }
`;

export const Styledpop6 = styled.div`
  position: absolute;
  top: 26%;
  left: 67.8%;
  width: 21%;
  height: 18%;

  @media (min-width: 1280px) and (max-width: 1919px) {
    top: 31.4%;
    left: 68.5%;
    width: 29.7%;
    height: 21.4%;
  }

  @media (min-width: 1920px){
    top: 22.4%;
    left: 67.7%;
    width: 20%;
    height: 15.4%;
  }
`;

export const Styledpop7 = styled.div`
  position: absolute;
  top: 46%;
  left: 67.8%;
  width: 21%;
  height: 18%;

  @media (min-width: 1280px) and (max-width: 1919px) {
    top: 55.9%;
    left: 68.5%;
    width: 29.6%;
    height: 21.4%;
  }

  @media (min-width: 1920px){
    top: 40%;
    left: 67.8%;
    width: 19.8%;
    height: 15.1%;
  }
`;
