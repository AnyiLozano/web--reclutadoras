import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledContainer = styled.div.attrs({
  className: "row",
})`
  ${({ background }) => `background: url("${background}");`}
  position: absolute;
  bottom: 0%;
  width: 1200px;
  height: 8vh;
  background-repeat: no-repeat;
  background-size: 100%;
  margin-right: 0;
  margin-left: 0;
  padding-right: 0;
  padding-left: 0;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 100%;
    height: 13vh;
  }
`;

export const StyledFirstMenu = styled.div.attrs({
  className: "first-menu",
})`
  width: 23.5%;
  height: 100%;
  margin-left: 0%;
`;

export const StyledSecondMenu = styled.div.attrs({
  className: "first-menu",
})`
  width: 23.5%;
  height: 100%;
  margin-left: 0.3%;
`;

export const StyledThirdMenu = styled.div.attrs({
  className: "first-menu",
})`
  width: 23.5%;
  height: 100%;
  margin-left: 0.3%;
`;

export const StyledFourthMenu = styled.div.attrs({
  className: "first-menu",
})`
  width: 23.2%;
  height: 100%;
  margin-left: 0.3%;
`;

export const StyledContainerSubmenus = styled.div`
  position: absolute;
  bottom: 7%;
  width: 1200px;

  @media screen and (min-width: 325px) and (max-width: 1199px) {
    width: 100%;
    bottom: 12.5%;
  }
`;

export const StyledSubmenu1Container = styled.div`
  position: absolute;
  bottom: 0%;
  width: 23.5%;
  margin-left: 5.4%;
  height: auto;
`;

export const StyledLinkSubmenu1 = styled(Link)`
  position: absolute;
  bottom: 0%;
  width: 86%;
  height: 100%;
  left: 7%;
`;

export const StyledSubmenuImage = styled.img.attrs({
  className: "submenu-1",
})`
  width: 100%;
`;

export const StyledSubmenu2Container = styled.div`
  position: absolute;
  bottom: 0%;
  left: 27%;
  width: 27.5%;
`;

export const StyledLinkSubmenu2 = styled(Link)`
  position: absolute;
  bottom: 47%;
  left: 7%;
  width: 85.6%;
  height: 45%;
`;

export const StyledLinkSubmenu3 = styled(Link)`
  position: absolute;
  bottom: 0%;
  left: 7%;
  width: 85.6%;
  height: 45%;
`;

export const StyledSubmenu3Container = styled.div`
  position: absolute;
  bottom: 0%;
  left: 46%;
  width: 37.5%;
`;

export const StyledLinkSubmenu4 = styled(Link)`
  position: absolute;
  bottom: 68%;
  left: 5%;
  width: 89%;
  height: 22%;
`;

export const StyledLinkSubmenu5 = styled(Link)`
  position: absolute;
  bottom: 45.5%;
  left: 5%;
  width: 89%;
  height: 22%;
`;

export const StyledLinkSubmenu6 = styled(Link)`
  position: absolute;
  bottom: 23%;
  left: 5%;
  width: 89%;
  height: 22%;
`;

export const StyledLinkSubmenu7 = styled(Link)`
  position: absolute;
  bottom: 0%;
  left: 5%;
  width: 89%;
  height: 22%;
`;

export const StyledSubmenu4Container = styled.div`
  position: absolute;
  bottom: 0%;
  right: 0%;
  width: 28.5%;
`;

export const StyledLinkSubmenu8 = styled(Link)`
  position: absolute;
  bottom: 61%;
  left: 7%;
  width: 87.6%;
  height: 29%;
`;

export const StyledLinkSubmenu9 = styled(Link)`
  position: absolute;
  bottom: 32%;
  left: 7%;
  width: 88.6%;
  height: 29%;
`;

export const StyledLinkSubmenu10 = styled(Link)`
  position: absolute;
  bottom: 3%;
  left: 7%;
  width: 87.6%;
  height: 29%;
`;

export const StyledRow = styled.div.attrs({
  className: "row",
})`
  margin-right: 0;
  margin-left: 0;
  padding-right: 0;
  padding-left: 0;
`;

export const StyledHomeIamge = styled.img`
  width: 100%;
`;

export const StyledContainerMenu1 = styled(Link)`
  width: 5.2%;
  height: 100%;
  position: absolute;
  top: 8%;
  left: 0.1%;
`;

export const StyledContainerMenu2 = styled.div`
  width: 23.6%;
  height: 57%;
  position: absolute;
  top: 8%;
  left: 5.5%;
`;

export const StyledContainerMenu3 = styled.div`
  width: 23.6%;
  height: 57%;
  position: absolute;
  top: 8%;
  left: 29%;
`;

export const StyledContainerMenu4 = styled.div`
  width: 23.6%;
  height: 57%;
  position: absolute;
  top: 8%;
  left: 53%;
`;

export const StyledContainerMenu5 = styled.div`
  width: 23.6%;
  height: 57%;
  position: absolute;
  top: 8%;
  left: 76.5%;
`;

export const StyledHome = styled(Link)`
  width: 5.4%;
  height: 94%;
`;
