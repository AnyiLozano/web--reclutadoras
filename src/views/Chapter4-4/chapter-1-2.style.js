import styled from "styled-components";

export const StyledViewContainer = styled.div.attrs({
  className: "container-chapter-4",
})`
  width: 1200px;
  height: 100vh;
  ${({ background }) => `background: url("${background}");`}
  background-size: 100% 100%;
  background-repeat: no-repeat;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 100%;
  }
`;

export const StyledContainer = styled.div`
  position: absolute;
  top: 36.9%;
  left: 18.5%;
  width: 1200px;
  height: 56%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 100%;
    left: 0%;
  }
`;

export const StyledBackgroundImage = styled.img`
  width: 100%;
  height: 100vh;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 100%;
    height: 100%;
  }
`;

export const StyledImageLeft = styled.img`
  position: absolute;
  top: 3%;
  left: 5%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 6%;
    height: auto;
    left: 3%;
  }
`;

export const StyledImageRight = styled.img`
  position: absolute;
  top: 3%;
  right: 5%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    ${({ isBold }) => (isBold ? "width: 26%;" : "width: 6%;")}
    height: auto;
    right: 3%;
  }
`;

export const StyledContent = styled.div`
  position: absolute;
  top: 15%;
  width: 100%;
  height: 85%;
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
    width: 60%;
  }

  @media screen and (min-width: 916px) and (max-width: 1199px) {
    width: 75%;
    height: 100%;
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
