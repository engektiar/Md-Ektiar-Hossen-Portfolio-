import { Button, Container, Grid, Typography } from "@mui/material";
import { FaDownload } from "react-icons/fa";
import { MdDoubleArrow } from "react-icons/md";
import styled from "styled-components";
import ektiar from "../assets/images/ektiar.png";
import Typewriter from "typewriter-effect";
import Social from "../SocialIcone/Social";
import Resume from "../CV/ektiarHossen.pdf";
import abicon from "../assets/images/aboutsicon.svg";

const Section = styled.section`
  margin: 0 auto !important;

  .about {
    margin: 0 auto !important;
  }
  & h4 {
    font-size: 22px;
    line-height: 30px;
    text-transform: capitalize;
    font-weight: 600;
    color: #666;
    text-align: left;
  }
  & p {
    color: #666;
    margin: 1.5em 0;
    line-height: 28px;
    letter-spacing: 0.5px;
    font-size: 14px;
    text-align: left;
  }
  .autotyle {
    color: red;
    display: flex;
    margin-bottom: 15px;
  }
  .aboutimg {
    background-size: cover;
    background-position: center;
    z-index: 0;
    display: grid;
    align-items: center;
    height: 480px;
  }
  .aboutperson {
    display: flex;
    justify-content: right;
  }
  .resume {
    background-color: #ea3a60;
    border: none;
    font-size: 16px;
    text-transform: capitalize;
  }
  .mycv:hover {
    background-color: #ea3a60;
    
`;
const CustBtn = styled(Button)`
  color: #fff !important;
  background: #ea3a60 !important;
  border: 2px solid #333;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 1px;
  display: flex !important;
  border-radius: 19px !important;
  padding: 10px 30px !important;

  &:hover {
    background: #b11d3d !important;
  }
`;

const StrengthWrapper = styled.div`
  padding: 15px 0px;
`;
const StreangthArea = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  & .items {
    padding-left: 8px;
    font-weight: 500;
    font-size: 17px;
  }
`;
const ContentArea = styled.div`
  max-width: 480px;
  text-align: left;

  z-index: 999;
  & h1 {
    background: linear-gradient(90deg, #ff0000, #ffff00, #ff00f3, #0033ff, #ff00c4, #ff0000);
    background-size: 400%;
    font-size: 50px;
    font-weight: 700;
    word-spacing: 5px;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    animation: animate 10s linear infinite;
    text-transform: capitalize;
    margin: 0;
    @keyframes animate {
      0% {
        background-position: 0%;
      }
      100% {
        background-position: 400%;
      }
    }

    & span {
      color: #ea3a60;
      display: block;
    }
  }
  & h4 {
    font-size: 30px;
    font-weight: 500;
    text-decoration: underline;
    color: white;
    margin: 0px;
    text-decoration: none;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  color: #333;
  font-weight: 600;
  letter-spacing: 5px;
  position: relative;
  margin: 60px 0px;
  text-transform: capitalize;
  &:after {
    position: absolute;
    content: "";
    width: 15%;
    height: 3px;
    background: #ea3a60;
    left: 43%;
    bottom: -18%;
  }
`;

const About = () => {
  return (
    <Section className="sectionStart">
      <Container>
        {/* <div className="icons">
          <img className="titleicon" src={abicon} alt="" />
        </div> */}

        <Title>About</Title>

        <Grid container spacing={5} className="about">
          <Grid item md={5}>
            <ContentArea>
              <h2>
                <span style={{ color: "#ee0c0c", fontSize: "1.5em" }}> Hello, I???m </span>
              </h2>
              <h1>Md. Ektiar Hossen </h1>
              <h4 className="autotyle">
                I work with ,
                <span>
                  <Typewriter
                    options={{
                      strings: ["HTML", "CSS", "Scss", "Bootstrap", "JavaScrpt", "React Js"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h4>
              <Social />
            </ContentArea>

            <StrengthWrapper>
              <StreangthArea>
                <MdDoubleArrow />
                <Typography className="items" variant="p">
                  {" "}
                  Honest and dedicated
                </Typography>
              </StreangthArea>
              <StreangthArea>
                <MdDoubleArrow />
                <Typography className="items" variant="p">
                  {" "}
                  Able to meet deadline{" "}
                </Typography>
              </StreangthArea>
              <StreangthArea>
                <MdDoubleArrow />
                <Typography className="items" variant="p">
                  {" "}
                  BAffordable Security Packages & Detailed Results{" "}
                </Typography>
              </StreangthArea>
              <StreangthArea>
                <MdDoubleArrow />
                <Typography className="items" variant="p">
                  It is a long established fact that a reader will{" "}
                </Typography>
              </StreangthArea>
            </StrengthWrapper>
            <CustBtn>
              <a href={Resume} download className="mycv">
                <button className="button s-button resume">Download CV</button>
              </a>
            </CustBtn>
          </Grid>
          <Grid item md={5}>
            <div className="aboutperson">
              <img className="aboutimg" src={ektiar} alt="no img" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};
export default About;
