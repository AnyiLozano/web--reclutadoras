import React, { useState } from "react";
import {
  StyledContainer,
  StyledLinkSubmenu1,
  StyledLinkSubmenu2,
  StyledLinkSubmenu3,
  StyledLinkSubmenu10,
  StyledLinkSubmenu4,
  StyledLinkSubmenu5,
  StyledLinkSubmenu6,
  StyledLinkSubmenu7,
  StyledLinkSubmenu8,
  StyledLinkSubmenu9,
  StyledSubmenu1Container,
  StyledSubmenu2Container,
  StyledSubmenu3Container,
  StyledSubmenu4Container,
  StyledFirstMenu,
  StyledSecondMenu,
  StyledThirdMenu,
  StyledFourthMenu,
  StyledContainerSubmenus,
  StyledSubmenuImage,
  StyledRow,
  StyledHome,
} from "./navbar.style";
import "animate.css";

const Navbar = () => {
  /** States */
  const [submenu1, setSubmenu1] = useState(false);
  const [submenu2, setSubmenu2] = useState(false);
  const [submenu3, setSubmenu3] = useState(false);
  const [submenu4, setSubmenu4] = useState(false);

  return (
    <React.Fragment>
      <StyledContainerSubmenus>
        <StyledRow>
          <StyledSubmenu1Container active={submenu1}>
            {submenu1 ? (
              <React.Fragment>
                <StyledSubmenuImage
                  src={require("../../assets/images/submenu1.png")}
                  className="animate__animated animate__fadeIn"
                  alt="Click here!"
                />
                <StyledLinkSubmenu1
                  onClick={() => setSubmenu1(false)}
                  to="/chapter-1"
                ></StyledLinkSubmenu1>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {window.location.pathname === "/" && (
                  <img
                    src={require("../../assets/images/click-here.png")}
                    alt="Submenu path 1"
                    style={{ marginBottom: "1%" }}
                  />
                )}
              </React.Fragment>
            )}
          </StyledSubmenu1Container>
          <StyledSubmenu2Container>
            {submenu2 && (
              <React.Fragment>
                <StyledSubmenuImage
                  src={require("../../assets/images/submenu2.png")}
                  className="animate__animated animate__fadeIn"
                  alt="Click here!"
                />
                <StyledLinkSubmenu2
                  onClick={() => setSubmenu2(false)}
                  to="/chapter-2"
                ></StyledLinkSubmenu2>
                <StyledLinkSubmenu3
                  onClick={() => setSubmenu2(false)}
                  to="/chapter-3"
                ></StyledLinkSubmenu3>
              </React.Fragment>
            )}
          </StyledSubmenu2Container>
          <StyledSubmenu3Container>
            {submenu3 && (
              <React.Fragment>
                <StyledSubmenuImage
                  src={require("../../assets/images/submenu3.png")}
                  className="animate__animated animate__fadeIn"
                  alt="Click here!"
                />
                <StyledLinkSubmenu4
                  onClick={() => setSubmenu3(false)}
                  to="/chapter-4"
                ></StyledLinkSubmenu4>
                <StyledLinkSubmenu5
                  onClick={() => setSubmenu3(false)}
                  to="/prueba5"
                ></StyledLinkSubmenu5>
                <StyledLinkSubmenu6
                  onClick={() => setSubmenu3(false)}
                  to="/prueba6"
                ></StyledLinkSubmenu6>
                <StyledLinkSubmenu7
                  onClick={() => setSubmenu3(false)}
                  to="/prueba7"
                ></StyledLinkSubmenu7>
              </React.Fragment>
            )}
          </StyledSubmenu3Container>
          <StyledSubmenu4Container>
            {submenu4 && (
              <React.Fragment>
                <StyledSubmenuImage
                  src={require("../../assets/images/submenu4.png")}
                  alt="Click here!"
                  className="animate__animated animate__fadeIn"
                />
                <StyledLinkSubmenu8
                  onClick={() => setSubmenu4(false)}
                  to="/prueba8"
                ></StyledLinkSubmenu8>
                <StyledLinkSubmenu9
                  onClick={() => setSubmenu4(false)}
                  to="/prueba9"
                ></StyledLinkSubmenu9>
                <StyledLinkSubmenu10
                  onClick={() => setSubmenu4(false)}
                  to="/prueba10"
                ></StyledLinkSubmenu10>
              </React.Fragment>
            )}
          </StyledSubmenu4Container>
        </StyledRow>
      </StyledContainerSubmenus>

      {/* Navbar Container */}
      <StyledContainer background={require("../../assets/images/navbar.png")}>
        <StyledHome to="/"></StyledHome>

        <StyledFirstMenu
          onClick={() => setSubmenu1(!submenu1)}
        ></StyledFirstMenu>
        <StyledSecondMenu
          onClick={() => setSubmenu2(!submenu2)}
        ></StyledSecondMenu>
        <StyledThirdMenu
          onClick={() => setSubmenu3(!submenu3)}
        ></StyledThirdMenu>
        <StyledFourthMenu
          onClick={() => setSubmenu4(!submenu4)}
        ></StyledFourthMenu>
      </StyledContainer>
    </React.Fragment>
  );
};

export default Navbar;
