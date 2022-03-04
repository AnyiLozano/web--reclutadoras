import styled from "styled-components";

export const StyledImage = styled.img`
  width: 1024px;
  height: 100%;
  ${({ active }) => (active ? "position: fixed; z-index: 1;" : "")}

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 100%;
  }

  @media screen and (min-width: 1920px) {
    width: 1200px;
  }
`;

export const StyledImageText = styled.img`
  position: absolute;
  top: 46%;
  left: 25%;
  width: 50%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 43%;
  }
`;

export const StyledImageButton = styled.img`
  position: absolute;
  top: 73%;
  left: 47%;
  width: 10%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 7%;
  }
`;
