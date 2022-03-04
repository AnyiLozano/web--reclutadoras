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
  top: 46%;
  left: 28%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 43%;
  }
`;

export const StyledImageButton = styled.img`
  position: absolute;
  top: 75%;
  left: 47%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 7%;
  }
`;
