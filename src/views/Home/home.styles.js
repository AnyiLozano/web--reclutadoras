import styled from "styled-components";

export const StyledContainer = styled.div.attrs({
  className: "d-flex justify-content-center align-items-center",
})`
  ${({ background }) => `background: url("${background}");`}
  width: 1200px;
  height: 100vh;
  background-size: 100%;
  background-repeat: no-repeat;

  @media screen and (min-width: 325px) and (max-width: 915px) {
    width: 100%;
  }
`;

export const StyledImageTitle = styled.img`
  @media screen and (min-width: 325px) and (max-width: 915px) {
    width: 60%;
  }
`;
