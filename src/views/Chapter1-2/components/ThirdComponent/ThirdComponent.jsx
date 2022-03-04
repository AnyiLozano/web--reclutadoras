import React from "react";
import {
  StyledContainerSecondComponent,
  StyledDescription,
  StyledImageMenu1,
  StyledImageMenu2,
  StyledImageMenu3,
  StyledLink,
  StyledLink1,
  StyledLink2,
  StyledOpenModal1,
  StyledOpenModal2,
  StyledOpenModal3,
  StyledOpenModal4,
} from "../FirstComponent/firstComponent.style";

const ThirdComponent = (props) => {
  /** Props */
  const { setViews, setModal } = props;
  return (
    <StyledContainerSecondComponent>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-8 d-flex justify-content-end">
            <StyledDescription
              styles="width: 86%; margin-top: -5%;"
              src={require("../../../../assets/images/description-chapter1-view3.png")}
              alt="Description"
              className="animate__animated animate__fadeInLeft"
            />
            <StyledOpenModal1 onClick={() => setModal(1)}></StyledOpenModal1>
            <StyledOpenModal2 onClick={() => setModal(2)}></StyledOpenModal2>
            <StyledOpenModal3 onClick={() => setModal(3)}></StyledOpenModal3>
            <StyledOpenModal4 onClick={() => setModal(4)}></StyledOpenModal4>
            <StyledLink
              href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQFfGVar8LNUWwAAAX9A9bWYNd98QHPSZ1_m5EfAiQWUQSohjCKVnWTJC5AO0iJS2H9XUnsoskFpJOsVX1fpuN6quwNLziDIRegoFlVkOi0bsl__Xh1TkUybp6MfEMphO5oA3_0=&originalReferer=http://emlproyectos.com.co/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fsanofi"
              target="_blank"
            ></StyledLink>
            <StyledLink1
              href="https://www.sanofi.com/"
              target="_blank"
            ></StyledLink1>
            <StyledLink2
              href="https://www.sanofi.com/en/careers"
              target="_blank"
            ></StyledLink2>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="col-md-12 mb-2">
              <StyledImageMenu1
                src={require("../../../../assets/images/menu1-unselected.png")}
                alt="Description"
                className="animate__animated animate__fadeInRight"
                onClick={() => setViews(1)}
              />
            </div>
            <div className="col-md-12 mb-2">
              <StyledImageMenu2
                src={require("../../../../assets/images/menu2.png")}
                alt="Description"
                onClick={() => setViews(2)}
                className="animate__animated animate__fadeInRight"
              />
            </div>
            <div className="col-md-12 mb-2">
              <StyledImageMenu3
                src={require("../../../../assets/images/menu3-selected.png")}
                alt="Description"
                className="animate__animated animate__fadeInRight"
                onClick={() => setViews(3)}
              />
            </div>
          </div>
        </div>
      </div>
    </StyledContainerSecondComponent>
  );
};

export default ThirdComponent;
