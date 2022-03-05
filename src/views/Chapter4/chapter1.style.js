import styled from "styled-components";

export const StyledImage = styled.img`
  width: 1200px;
  height: 100vh;
  ${({ active }) => (active ? "position: fixed; z-index: 1;" : "")}

  @media screen and (min-width: 325px) and (max-width: 915px) {
    width: 100%;
  }

  @media screen and (min-width: 916px) and (max-width: 1199px) {
    width: 100%;
    height: 100%;
  }
`;

export const StyledImageText = styled.img`
  position: absolute;
  top: 50%;
  left: 33%;
`;

export const StyledImageButton = styled.img`
  position: absolute;
  top: 39%;
  right: 22%;
  width: 3%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    right: 3%;
  }
`;

export const StyledDescription = styled.img`
  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 60%;
  }
`;

export const StyledContent = styled.div`
  position: absolute;
  width: 63.1%;
  height: 46%;
  top: 47%;
  left: 18.5%;
  display: flex;
  justify-content: center;
`;

export const StyledContainerButtons = styled.div.attrs({
  className: "col-md-12 d-flex justify-content-center",
})`
  margin-top: 3rem;
  @media screen and (min-width: 325px) and (max-width: 1199px) {
    margin-top: 2rem;
  }
`;

export const StyledImageMenu1 = styled.img`
  margin-right: 20px;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 40%;
    height: 75%;
  }
`;

export const StyledImageMenu2 = styled.img`
  margin-right: 20px;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 40%;
    height: 75%;
  }
`;

export const StyledImageMenu3 = styled.img`
  margin-right: 20px;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 40%;
    height: 75%;
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
  right: 18.4%;
`;

export const StyledCloseModal = styled.div`
  width: 3.6%;
  height: 7%;
  position: fixed;
  top: 27.4%;
  right: 22%;
  z-index: 2;
`;

export const Styledpop5 = styled.div`
  position: absolute;
  top: 26%;
  left: 16.2%;
  width: 21%;
  height: 23%;

  @media screen and (min-width: 325px) and (max-width: 915px) {
    top: 13.5%;
    left: -13.4%;
    width: 38%;
    height: 31%;
  }
  @media screen and (min-width: 916px) and (max-width: 1199px) {
    top: 13.5%;
    left: 1%;
    width: 30%;
    height: 31%;
  }
`;

export const Styledpop6 = styled.div`
  position: absolute;
  top: 26%;
  left: 38.8%;
  width: 21%;
  height: 23%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    top: 34%;
    left: 28.8%;
    width: 38%;
    height: 31%;
  }

  @media screen and (min-width: 916px) and (max-width: 1199px) {
    top: 13.5%;
    left: 33%;
    width: 30%;
    height: 31%;
  }
`;

export const Styledpop7 = styled.div`
  position: absolute;
  top: 26%;
  left: 61.3%;
  width: 21%;
  height: 23%;

  @media screen and (min-width: 325px) and (max-width: 915px) {
    top: 34%;
    left: 71.3%;
    width: 37.6%;
    height: 30.9%;
  }

  @media screen and (min-width: 916px) and (max-width: 1199px) {
    top: 13.5%;
    left: 65%;
    width: 30%;
    height: 31%;
  }
`;
