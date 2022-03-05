import styled from "styled-components";

export const StyledContainer = styled.div`
  position: absolute;
  top: 36.9%;
  left: 0%;
  width: 1024px;
  height: 56%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 100%;
    left: 0%;
  }

  @media screen and (min-width: 1920px) {
    width: 1200px;
  }
`;

export const StyledBackgroundImage = styled.img`
  width: 100%;
  height: 100vh;
`;

export const StyledImageLeft = styled.img`
  position: absolute;
  top: 3%;
  left: 5%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    left: 3%;
    width: 4%;
    height: auto;
  }
`;

export const StyledImageRight = styled.img`
  position: absolute;
  top: 3%;
  right: 5%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    right: 3%;
    width: 4%;
    height: auto;
  }
`;

export const StyledContent = styled.div`
  position: absolute;
  top: 15%;
  width: 100%;
`;

export const StyledModal1 = styled.img`
  position: absolute;
  top: 0%;
  left: 18.5%;
  width: 1200px;
  z-index: 1;
  height: 100vh;
`;

export const StyledCloseModal1 = styled.div`
  position: absolute;
  top: 27.1%;
  right: 22%;
  width: 3.6%;
  height: 8%;
  z-index: 2;
`;

export const StyledVideo1 = styled.video`
  position: absolute;
  top: 36%;
  left: 34%;
  z-index: 2;
`;

export const StyledFourImage = styled.img`
  @media screen and (min-width: 325px) and (max-width: 915px) {
    width: 50%;
  }

  @media screen and (min-width: 916px) and (max-width: 1199px) {
    width: 70%;
    height: 70%;
  }

  @media (min-width: 1280px) and (max-width: 1919px){
    width: 65%;
  }

  @media (min-width: 1920px){
    width: 100%;
  }
`;

export const StyledLink1 = styled.a`
  position: absolute;
  width: 21%;
  height: 10%;
  top: 57%;
  z-index: 2;
  right: 29%;
`;

export const StyledLink2 = styled.a`
  position: absolute;
  width: 7%;
  height: 15%;
  top: 73%;
  z-index: 2;
  right: 36%;
`;

export const StyledLink3 = styled.a`
  position: absolute;
  width: 21%;
  height: 10%;
  top: 63%;
  z-index: 2;
  right: 29%;
`;

export const StyledLink4 = styled.a`
  position: absolute;
  width: 7%;
  height: 15%;
  top: 75%;
  z-index: 2;
  right: 32%;
`;

export const StyledLink5 = styled.a`
  position: absolute;
  width: 21%;
  height: 10%;
  top: 63%;
  z-index: 2;
  right: 29%;
`;

export const StyledLink6 = styled.a`
  position: absolute;
  width: 7%;
  height: 15%;
  top: 75%;
  z-index: 2;
  right: 35%;
`;

export const StyledLink7 = styled.a`
  position: absolute;
  width: 21%;
  height: 10%;
  top: 69%;
  z-index: 2;
  right: 29%;
`;
