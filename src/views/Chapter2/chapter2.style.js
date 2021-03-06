import styled from "styled-components";

export const StyledImage = styled.img`
  width: 1024px;
  height: 100%;
  ${({ active }) => (active ? "position: fixed; z-index: 1;" : "")}

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 1920px) {
    width: 1200px;
    height: 100vh;
  }
`;

export const StyledImageText = styled.img`
  position: absolute;
  top: 50%;
  left: 25%;
  width: 50%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 30%;
    top: 61%;
    left: 34%;
  }
`;

export const StyledImageButton = styled.img`
  position: absolute;
  top: 73%;
  left: 47%;
  width: 10%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 7%;
    left: 45%;
    top: 81%;
  }
`;
