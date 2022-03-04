import styled from "styled-components";

export const StyledImage = styled.img`
  width: 1200px;
  height: 100vh;
  ${({ active }) => (active ? "position: fixed; z-index: 1;" : "")}

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 100%;
  }
`;

export const StyledImageText = styled.img`
  position: absolute;
  top: 50%;
  left: 33%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 45%;
  }
`;

export const StyledImageButton = styled.img`
  position: absolute;
  top: 39%;
  left: 74%;
  width: 3%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    left: 92%;
  }
`;

export const StyledDescription = styled.img`
  position: absolute;
  left: 18%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 45%;
  }
`;

export const StyledContent = styled.div`
  position: absolute;
  width: 63.1%;
  height: 46%;
  top: 47%;
  left: 18.5%;
`;

export const StyledImageMenu1 = styled.img`
  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 65%;
  }
`;

export const StyledImageMenu2 = styled.img`
  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 65%;
  }
`;

export const StyledImageMenu3 = styled.img`
  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 65%;
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
  position: fixed;
  z-index: 1;
  top: 0%;
  width: 1201px;
  height: 100vh;

  right: 18.7%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    top: 0%;
    width: 100%;
    height: 100vh;
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
`;

export const Styledpop5 = styled.div`
  position: absolute;
  top: 5%;
  left: 67.8%;
  width: 21%;
  height: 19%;
`;

export const Styledpop6 = styled.div`
  position: absolute;
  top: 26%;
  left: 67.8%;
  width: 21%;
  height: 18%;
`;

export const Styledpop7 = styled.div`
  position: absolute;
  top: 46%;
  left: 67.8%;
  width: 21%;
  height: 18%;
`;
