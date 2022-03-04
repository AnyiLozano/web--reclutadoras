import styled from "styled-components";

export const StyledContainer = styled.div.attrs({
  className: "d-flex justify-content-center align-items-center",
})`
  ${({ background }) => `background: url("${background}");`}
  width: 1024px;
  height: 100vh;
  background-size: 100% 100%;
  background-repeat: no-repeat;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 100%;
  }

  @media screen and (min-width: 1920px) {
    width: 1200px;
  }
`;

export const StyledImageTitle = styled.img`
  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 60%;
  }
`;
