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
    height: auto;
`;

export const StyledDescription1 = styled.img`
  ${({ styles }) => styles}
  @media screen and (min-width: 325px) and (max-width: 915px) {
    width: 50%;
  }

  @media screen and (min-width: 916px) and (max-width: 1199px) {
    width: 65%;
    height: auto;
  }

  @media (min-width: 1280px) and (max-width: 1919px){
    width: 60%;
  }
`;

export const StyledImageMenu33 = styled.img`
  margin-right: 20px;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 70%;
    height: 60%;
  }
`;

export const StyledImageMenu1 = styled.img`
  margin-right: 20px;

  @media screen and (min-width: 325px) and (max-width: 915px) {
    width: 17%;
    height: 80%;
  }

  @media screen and (min-width: 916px) and (max-width: 1199px) {
    width: 30%;
    height: 80%;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    width: 20%;
  }
`;

export const StyledImageMenu2 = styled.img`
  margin-right: 20px;

  @media screen and (min-width: 325px) and (max-width: 915px) {
    width: 17%;
    height: 80%;

  }

  @media screen and (min-width: 916px) and (max-width: 1199px) {
    width: 30%;
    height: 80%;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    width: 20%;
  }
`;

export const StyledImageMenu3 = styled.img`
  margin-right: 20px;

  @media screen and (min-width: 325px) and (max-width: 915px) {
    width: 17%;
    height: 80%;

  }

  @media screen and (min-width: 916px) and (max-width: 1199px) {
    width: 40%;
    height: 80%;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    width: 20%;
  }
`;

export const StyleImageModal = styled.img`
  position: fixed;
  z-index: 1;
  top: 0%;
  width: 63.1%;
  height: 100vh;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 100%;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    position: fixed;
    z-index: 1;
    top: 0%;
    width: 75%;
    height: 100vh;
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
    width: 5%;
    height: 10%;
    position: fixed;
    top: 26%;
    right: 6%;
    z-index: 2;
  }

  @media (min-width: 1280px) and (max-width: 1919px) {
    right: 16.4%;
  }
`;

export const StyledOpenModal1 = styled.div`
  position: absolute;
  top: 0%;
  left: 14%;
  width: 11%;
  height: 40%;

  @media (min-width: 1280px) and (max-width: 1919px) {
    top: 37.6%;
    left: 7.8%;
    width: 22.6%;
    height: 15.5%;
  }
`;

export const StyledOpenModal2 = styled.div`
  position: absolute;
  top: 0%;
  left: 27%;
  width: 11%;
  height: 40%;

  @media (min-width: 1280px) and (max-width: 1919px) {
    top: 37.8%;
    left: 69.7%;
    width: 22.5%;
    height: 15.2%;
    background: red;
  }
`;

export const StyledOpenModal3 = styled.div`
  position: absolute;
  top: 0%;
  left: 40.8%;
  width: 11%;
  height: 40%;
  background: red;
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
  top: 55%;
  left: 18.8%;
  width: 19%;
  height: 44%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    top: 49%;
    left: 9.2%;
    width: 24.7%;
    height: 30%;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    top: 59%;
    left: 17.9%;
    width: 19.3%;
    height: 40.5%;
  }
`;

export const Styledpop9 = styled.div`
  position: absolute;
  top: 56%;
  left: 39.8%;
  width: 19%;
  height: 45%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    top: 50%;
    left: 36.5%;
    width: 24.6%;
    height: 29%;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    top: 59%;
    left: 39.3%;
    width: 19.3%;
    height: 40.5%;
  }
`;

export const Styledpop10 = styled.div`
  position: absolute;
  top: 55%;
  left: 60.8%;
  width: 19%;
  height: 45%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    top: 49%;
    left: 63.8%;
    width: 24.6%;
    height: 30%;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    top: 59%;
    left: 60.9%;
    width: 19.3%;
    height: 40.5%;
  }
`;

export const Styledpop11 = styled.div`
  position: absolute;
  top: 38%;
  left: 13.8%;
  width: 19%;
  height: 15%;

  @media screen and (min-width: 325px) and (max-width: 915px) {
    top: 31%;
    left: 29.1%;
    width: 11%;
    height: 13.2%;
  }

  @media screen and (min-width: 916px) and (max-width: 1199px) {
    width: 20%;
    height: 20%;
    top: 32%;
    left: 20%;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    top: 35.7%;
    left: 20.9%;
    width: 15.3%;
    height: 14.6%;
  }
`;

export const Styledpop12 = styled.div`
  position: absolute;
  top: 37%;
  left: 66.8%;
  width: 20%;
  height: 17%;

  @media screen and (min-width: 325px) and (max-width: 1915px) {
    top: 30.5%;
    left: 59.9%;
    width: 10.9%;
    height: 13.2%;
  }

  @media screen and (min-width: 916px) and (max-width: 1199px) {
    width: 20%;
    height: 20%;
    top: 32%;
    left: 60%;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    width: 15.5%;
    height: 14.4%;
    top: 36%;
    left: 63.7%;
  }
`;
