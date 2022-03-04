import styled from "styled-components";

export const StyledContainer = styled.div`
  position: absolute;
  top: 36.9%;
  left: 0%;
  width: 1024px;
  height: 56%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    left: 0%;
    width: 100%;
  }

  @media screen and (min-width: 1920px) {
    left: 0%;
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

export const StyledContent = styled.div.attrs({
  className: "d-flex justify-content-center",
})`
  position: absolute;
  top: 15%;
  width: 100%;
`;

export const StyledModal1 = styled.img`
position: absolute;
top: 0%;
left: 0;
width: 1024px;
z-index: 1;
height: 101vh;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 100%;
    left: 0%;
  }

  @media screen and (min-width: 1920px) {
    width: 1200px;
    left: 0%;
  }
`;

export const StyledCloseModal1 = styled.div`
position: absolute;
top: 27.1%;
right: 5.3%;
width: 5.6%;
height: 8%;
z-index: 2;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    right: 5.6%;
    width: 5.6%;
  }

  
`;

export const StyledVideo1 = styled.video`
  position: absolute;
  top: 36%;
  left: 34%;
  z-index: 2;
`;

export const StyledFourImage = styled.img`
height: 80%;
width: 50%;
  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 40%;
  }

  @media screen and (min-width: 1920px) {
    width: 40%;
  }
`;

export const StyledLink1 = styled.a`
  position: absolute;
  width: 28%;
    height: 10%;
    top: 57%;
    z-index: 2;
    right: 21%;
`;

export const StyledLink2 = styled.a`
  position: absolute;
  width: 7%;
  height: 15%;
  top: 73%;
  z-index: 2;
  right: 31%;
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
  right: 24%;
`;

export const StyledLink5 = styled.a`
  position: absolute;
  width: 21%;
  height: 10%;
  top: 63%;
  z-index: 2;
  right: 24%;
`;

export const StyledLink6 = styled.a`
  position: absolute;
  width: 7%;
  height: 15%;
  top: 75%;
  z-index: 2;
  right: 28%;
`;

export const StyledLink7 = styled.a`
  position: absolute;
  width: 21%;
  height: 10%;
  top: 69%;
  z-index: 2;
  right: 29%;
`;
