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
  top: 50%;
  left: 25%;
  width: 50%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 40%;
    top: 55%;
    left: 29%;
  }
`;

export const StyledImageButton = styled.img`
  position: absolute;
  top: 73%;
  left: 47%;
  width: 10%;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 10%;
    left: 45%;
    top: 78%;
  }
`;
