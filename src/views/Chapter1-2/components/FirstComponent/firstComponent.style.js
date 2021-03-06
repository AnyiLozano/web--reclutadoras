import styled from "styled-components";

export const StyledContainerText = styled.div.attrs({
  className: "d-flex justify-content-center",
})``;

export const StyledFirstText = styled.img.attrs({})``;

export const StyledDescription = styled.img`
  ${({ styles }) => styles}
  height: 100%;
  width: 70%;

  @media screen and (min-width: 325px) and (max-width: 915px) {
    width: 83%;
    height: 70%;
    margin-top: 0%;
  }

  @media screen and (min-width: 916px) and (max-width: 1199px) {
    width: 72%;
    height: 100%;
    margin-top: 0%;
  }

  @media screen and (min-width: 1920px) {
    
  }
`;
export const StyledDescription12 = styled.img`
  ${({ styles }) => styles}
  height: 100%;
  width: 70%;

  @media screen and (min-width: 325px) and (max-width: 915px) {
    width: 83%;
    height: 70%;
    margin-top: -3%;
  }
`;


export const StyledImageMenu1 = styled.img`
width: 40%;
  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 30%;
  }

  @media screen and (min-width: 1920px) {
    margin-top: 5%;
  }
`;

export const StyledImageMenu2 = styled.img`
width: 40%;
  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 30%;
  }

  @media screen and (min-width: 1920px) {
    margin-top: 2%;
  }
`;

export const StyledImageMenu3 = styled.img`
width: 40%;
  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 30%;
  }

  @media screen and (min-width: 1920px) {
    margin-top: 2%;
  }
`;

export const StyleImageModal = styled.img`
  position: absolute;
  z-index: 1;
  top: -592%;
  width: 1024px;
  height: 77.5vh;

  @media screen and (min-width: 1920px){
    position: absolute;
    z-index: 1;
    top: -883%;
    width: 1200px;
    height: 77.5vh;
  }

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    top: -679%;
    width: 100%;
    height: 100vh;
    left: 0%;
  }

`;

export const StyledVideoModal = styled.video`
  position: absolute;
  z-index: 1;
  top: -600%;
  width: 1024px;
  height: 77.5vh;
  background: black;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    top: -679%;
    width: 100%;
    height: 100vh;
    left: 0%;
  }
  @media screen and (min-width: 1920px){
    position: absolute;
    z-index: 1;
    top: -978%;
    width: 1200px;
    height: 80vh;
  }
`;

export const StyledCloseModal = styled.div`
  width: 5%;
  height: 300%;
  position: absolute;
  top: -582%;
  right: 6%;
  z-index: 1;

  @media screen and (min-width: 1920px){
    width: 5%;
    height: 300%;
    position: absolute;
    top: -882%;
    right: 6%;
    z-index: 1;
  }
`;

export const StyledOpenModal1 = styled.div`
position: absolute;
top: 16%;
left: 23%;
width: 9%;
height: 16%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    top: 15%;
    left: 28.6%;
    width: 6.6%;
    height: 20.2%;
  }

  @media screen and (min-width: 1920px) {
    top: 21%;
    left: 23.6%;
    width: 8.6%;
    height: 36.2%;
  }
`;

export const StyledOpenModal2 = styled.div`
position: absolute;
top: 16%;
left: 34%;
width: 9%;
height: 16%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    top: 16%;
    left: 37.5%;
    width: 6.2%;
    height: 20%;
  }

  @media screen and (min-width: 1920px) {
    top: 21%;
    left: 34.6%;
    width: 8.6%;
    height: 36.2%;
  }
`;

export const StyledOpenModal3 = styled.div`
position: absolute;
top: 16%;
left: 45%;
width: 9%;
height: 16%;


  @media screen and (min-width: 325px) and (max-width: 1199px) {
    top: 17%;
    left: 46.1%;
    width: 6.3%;
    height: 19%;
  }

  @media screen and (min-width: 1920px) {
    top: 21%;
    left: 45.6%;
    width: 8.6%;
    height: 36.2%;
  }
`;

export const StyledOpenModal4 = styled.div`
position: absolute;
top: 16%;
left: 56%;
width: 9%;
height: 16%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    top: 17%;
    left: 54.8%;
    width: 7%;
    height: 19%;
  }

  @media screen and (min-width: 1920px) {
    top: 21%;
    left: 55.6%;
    width: 10%;
    height: 36.2%;
  }
`;

export const StyledLink = styled.a`
position: absolute;
top: 53%;
left: 29.8%;
width: 11%;
height: 40%;


  @media screen and (min-width: 325px) and (max-width: 1199px) {
    top: 47%;
    left: 33.8%;
    width: 7%;
    height: 20%;
  }

  @media screen and (min-width: 1920px){
    top: 77%;
    left: 30.8%;
    width: 9%;
    height: 33%;
  }
`;

export const StyledLink1 = styled.a`
position: absolute;
top: 53%;
left: 42.8%;
width: 9%;
height: 40%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    top: 47%;
    left: 44%;
    width: 6%;
    height: 19%;
  }

  @media screen and (min-width: 1920px){
    top: 77%;
    left: 42.8%;
    width: 9%;
    height: 33%;
  }
`;

export const StyledLink2 = styled.a`
position: absolute;
top: 55%;
left: 54.8%;
width: 9%;
height: 40%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    top: 47%;
    left: 53.6%;
    width: 6%;
    height: 18%;
  }

  @media screen and (min-width: 1920px){
    top: 77%;
    left: 55.8%;
    width: 9%;
    height: 33%;
  }
`;

export const StyledContainer = styled.div.attrs({
  className: "col-md-12",
})`
  margin-left: 3rem;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    margin-left: 2rem;
  }

  
`;

export const StyledContainerSecondComponent = styled.div.attrs({
  className: "col-md-12",
})`
  margin-top: 3rem;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    margin-top: 1rem;
  }

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    margin-top: 0rem;
  }
`;

export const StyledContainerFourthComponent = styled.div.attrs({
  className: "container",
})`
  margin-top: 1.5rem;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    max-width: 100%;
    margin-top: -0.9rem;
  }
`;
