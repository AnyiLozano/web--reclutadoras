import styled from "styled-components";

export const StyledContainer = styled.div.attrs({
  className: "container-image",
})`
  ${({ background }) => `background: url("${background}");`}
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
`;

export const StyledContent = styled.div.attrs({
  className: "content-area d-flex align-items-center",
})`
  position: absolute;
  top: 37%;
  left: 18.7%;
  width: 1200px;
  height: 55%;

  @media screen and (min-width: 325px) and (max-width: 1190px) {
    width: 100%;
    left: 0%;
  }

  @media screen and (min-width: 1366px) and (max-width: 1900px) {
    width: 100%;
    left: 0%;
  }
`;

export const StyledImageText = styled.img`
  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 50%;
  }
`;

export const StyledImageButton = styled.img``;

export const StyledImage = styled.img`
  width: 1200px;
  height: 100vh;
  ${({ active }) => (active ? "position: fixed; z-index: 1;" : "")}

  @media screen and (min-width: 325px) and (max-width: 915px) {
    width: 100%;
  }
`;
