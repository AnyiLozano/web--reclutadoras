import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  StyledContainer,
  StyledContent,
  StyledImageLeft,
  StyledImageRight,
  StyledViewContainer,
} from "./chapter-1-2.style";
import FirstComponent from "./components/FirstComponent/firstComponent";
import FourthComponent from "./components/FourthComponent/FourthComponent";
import SecondComponent from "./components/SecondComponent/SecondComponent";
import ThirdComponent from "./components/ThirdComponent/ThirdComponent";

const Chapter44 = () => {
  const { search } = useLocation();

  /** States */
  const [views, setViews] = useState(
    search === "?1" ? 2 : search === "?3" ? 3 : 1
  );
  const [setModal] = useState(null);

  const navigate = useNavigate();

  console.log(views);

  return (
    <React.Fragment>
      <StyledViewContainer
        background={
          views === 4
            ? require("../../assets/images/fondo53.png")
            : require("../../assets/images/chater4.png")
        }
      >
        <StyledContainer>
          <StyledImageLeft
            src={require("../../assets/images/back.png")}
            alt="Back Button"
            onClick={() => {
              if (views === 1) {
                navigate("/chapter-4");
              } else if (views === 2) {
                navigate("/chapter-4");
              } else if (views === 3) {
                setViews(2);
              } else if (views === 4) {
                setViews(3);
              }
            }}
          />
          {views !== 1 && views !== 4 && (
            <StyledImageRight
              isBold={views === 2 ? true : false}
              src={
                views === 2
                  ? require("../../assets/images/right.png")
                  : require("../../assets/images/next.png")
              }
              alt="Next Button"
              onClick={() => {
                if (views === 1) {
                  setViews(2);
                } else if (views === 2) {
                  setViews(3);
                } else if (views === 3) {
                  setViews(4);
                }
              }}
            />
          )}
          <StyledContent>
            {views === 1 ? (
              <FirstComponent setViews={setViews} setModal={setModal} />
            ) : views === 2 ? (
              <SecondComponent setViews={setViews} />
            ) : views === 3 ? (
              <ThirdComponent setViews={setViews} setModal={setModal} />
            ) : (
              <FourthComponent />
            )}
          </StyledContent>
        </StyledContainer>
      </StyledViewContainer>
      {/* <StyledBackgroundImage
        src={
          views === 4
            ? require("../../assets/images/fondo53.png")
            : require("../../assets/images/chater4.png")
        }
        alt="Background"
      />
      <StyledContainer>
        <StyledImageLeft
          src={require("../../assets/images/back.png")}
          alt="Back Button"
          onClick={() => {
            if (views === 1) {
              navigate("/chapter-4");
            } else if (views === 2) {
              navigate("/chapter-4");
            } else if (views === 3) {
              setViews(2);
            } else if (views === 4) {
              setViews(3);
            }
          }}
        />
        {views !== 1 && views !== 4 && (
          <StyledImageRight
            src={
              views === 2
                ? require("../../assets/images/right.png")
                : require("../../assets/images/next.png")
            }
            alt="Next Button"
            onClick={() => {
              if (views === 1) {
                setViews(2);
              } else if (views === 2) {
                setViews(3);
              } else if (views === 3) {
                setViews(4);
              }
            }}
          />
        )}
        <StyledContent>
          {views === 1 ? (
            <FirstComponent setViews={setViews} setModal={setModal} />
          ) : views === 2 ? (
            <SecondComponent setViews={setViews} />
          ) : views === 3 ? (
            <ThirdComponent setViews={setViews} setModal={setModal} />
          ) : (
            <FourthComponent />
          )}
        </StyledContent>
      </StyledContainer>
      {modal === 1 ? (
        <React.Fragment>
          <StyledModal1
            src={require("../../assets/images/modal1.png")}
            onClick={() => setShowVideo1(true)}
          />
          <StyledCloseModal1
            onClick={() => {
              setModal(null);
            }}
          ></StyledCloseModal1>
          <StyledLink1
            href="https://en.jobs.sanofi.com/sanofi-gm"
            target="_blank"
          ></StyledLink1>
          <StyledLink2
            href="https://www.youtube.com/watch?v=_LlqwjM9h_k"
            target="_blank"
          ></StyledLink2>
        </React.Fragment>
      ) : modal === 2 ? (
        <React.Fragment>
          <StyledModal1
            src={require("../../assets/images/modal2.png")}
            onClick={() => setShowVideo1(true)}
          />
          <StyledCloseModal1
            onClick={() => {
              setModal(null);
            }}
          ></StyledCloseModal1>
          <StyledLink3
            href="https://www.sanofi.com/en/your-health/specialty-care"
            target="_blank"
          ></StyledLink3>
          <StyledLink4
            href="https://www.youtube.com/watch?v=jQnFjbk_l2I&t=76s"
            target="_blank"
          ></StyledLink4>
        </React.Fragment>
      ) : modal === 3 ? (
        <React.Fragment>
          <StyledModal1
            src={require("../../assets/images/modal3.png")}
            onClick={() => setShowVideo1(true)}
          />
          <StyledCloseModal1
            onClick={() => {
              setModal(null);
            }}
          ></StyledCloseModal1>
          <StyledLink5
            href="https://en.jobs.sanofi.com/pasteur"
            target="_blank"
          ></StyledLink5>
          <StyledLink6
            href="https://www.youtube.com/watch?v=fhP2r-z8Z-E"
            target="_blank"
          ></StyledLink6>
        </React.Fragment>
      ) : modal === 4 ? (
        <React.Fragment>
          <StyledModal1
            src={require("../../assets/images/modal4.png")}
            onClick={() => setShowVideo1(true)}
          />
          <StyledCloseModal1
            onClick={() => {
              setModal(null);
            }}
          ></StyledCloseModal1>
          <StyledLink7
            href="https://en.jobs.sanofi.com/sanofi-chc"
            target="_blank"
          ></StyledLink7>
        </React.Fragment>
      ) : (
        ""
      )} */}
    </React.Fragment>
  );
};

export default Chapter44;
