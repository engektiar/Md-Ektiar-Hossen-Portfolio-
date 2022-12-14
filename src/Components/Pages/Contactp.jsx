import { Container, Grid, TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";
import c2 from "../Images/c2-min.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import InputField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
const Section = styled.section`
  padding-bottom: 50px;
  .contactpage {
    height: 640px;
    margin-top: 50px;
  }
  .thumbnail {
    display: flex;
    justify-content: center;
  }
  .contactimg {
    height: 250px;
    width: 100%;
  }
  .title {
    font-size: 29px;
    margin-bottom: 20px;
    color: #1d2024;
    text-transform: capitalize;
  }
  .contact-about-area {
    background: #f9fbfb;
    border-radius: 10px;
    padding: 10px 20px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    height: 600px;
  }

  .formsecton {
    background: #f9fbfb;
    border-radius: 10px;
    padding: 10px 20px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    height: 600px;
  }

  .title-area {
    line-height: 10px;
  }
  .description {
    margin-top: 20px;
    font-size: 18px;
    color: #787a7d;
  }
  .name {
    display: inline-block;
  }
  .contactnumber {
    margin-bottom: 15px;
  }
  .contact {
    color: #787a7d;
    margin-left: 8px;
    transition: 0.3s;
  }
  .contact:hover {
    color: red;
  }
  .name {
    text-transform: uppercase;
    font-size: 14px;
    color: #787a7d;
    margin-bottom: 15px;
  }
  .social-icone {
    margin-top: 5px;
    display: flex;
    justify-content: left;
    margin-left: -15px;
  }
  .icon {
    padding: 15px;
    border-radius: 5px;
    margin-left: 15px;
    background: #ecf0f3;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    transition: 0.5s;
  }
  .icon:hover {
    background: #dd1023;
    transform: translateY(-5px);
    color: #fff;
  }
  .contIcon {
    color: #787a7d;
    font-size: 35px;
  }
  .contIcon:hover {
    color: #fff;
  }
  /* from area start */

  .fromtitle {
    font-size: 12px;
    text-transform: uppercase;
    margin-bottom: 15px;
    font-weight: 700;
  }
  .fromdescripton {
    width: 100%;
    margin-bottom: 20px;
  }
  .inputfild {
    margin: 10px 0px;
    width: 100%;
    outline: none;
  }

  .submit {
    background: #ecf0f3;
    text-align: center;
    height: 50px;
    border-radius: 5px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  }

  .button {
    width: 100%;
    color: red;
    transition: 0.3s;
    margin-top: 4px;
  }
  .button:hover {
    color: #fff;
    background: #dd1023;
    padding: 10px;
  }
  .textdanger {
    color: red;
    font-size: 14px;
  }

  /* from area End */
`;

const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  color: #333;
  font-weight: 600;
  letter-spacing: 5px;
  position: relative;
  /* margin: 60px 0px;  */
  text-transform: capitalize;
  &:after {
    position: absolute;
    content: "";
    width: 33%;
    height: 3px;
    background: #ea3a60;
    left: 33%;
    bottom: -18%;
  }
`;

function Mycontact(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Section>
      <Container>
        <Title>Contact With Me</Title>
        <div className="contactpage">
          <Grid container spacing={2}>
            <Grid item md={6}>
              <div className="contact-about-area">
                <div className="thumbnail">
                  <img src={c2} alt="" className="contactimg" />
                </div>
                <div className="title-area">
                  <h4 className="title">Md Ektiar Hossen</h4>
                  <span>Junior Front End Developer</span>
                </div>
                <div className="description">
                  <p>I am available for freelance work. Connect with me via and call in to my account.</p>
                  <div className="contactnumber">
                    <div>
                      <span className="names">
                        Phone:
                        <a href="#" className="contact">
                          +01628414116
                        </a>
                      </span>
                    </div>
                    <div>
                      <span className="names">
                        Email:
                        <a href="#" className="contact">
                          eng.ektiar@gmail.com
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="social-area">
                  <div className="name">FIND WITH ME</div>
                  <div className="social-icone">
                    <div className="icon">
                      <a href="https://www.facebook.com/profile.php?id=100004813563045">
                        <FacebookIcon className="contIcon" />
                      </a>
                    </div>
                    <div className="icon">
                      <a href="https://www.linkedin.com/in/md-ektiar-hossen-667a90194/">
                        <LinkedInIcon className="contIcon" />
                      </a>
                    </div>
                    <div className="icon">
                      <a href="#">
                        <WhatsAppIcon className="contIcon" />
                      </a>
                    </div>

                    <div className="icon">
                      <a href="#">
                        <InstagramIcon className="contIcon" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item md={6}>
              <div className="formsecton">
                <form>
                  <label className="fromtitle">Your Name </label>
                  <InputField
                    type="text"
                    id="outlined-basic"
                    placeholder="Please Enter your name"
                    {...register("name", { required: true })}
                    className={errors.name ? "from-control is-invalid" : "inputfild"}
                  />
                  {errors.name?.type === "required" && (
                    <p className="textdanger" role="alert">
                      First name is required
                    </p>
                  )}
                  <label className="fromtitle">Your Gmail </label>
                  <InputField type="email" className="inputfild" id="outlined-basic" placeholder="Enter your Gmail" />

                  <label className="fromtitle">Your Phone Number </label>
                  <InputField type="text" className="inputfild" id="outlined-basic" placeholder="Enter Your Phone Number" />

                  <label className="fromtitle"> Subject </label>
                  <InputField type="text" className="inputfild" id="outlined-basic" placeholder="Enter Your Phone Number" />

                  <TextField className="fromdescripton" id="standard-multiline-static" multiline rows={4} />

                  <div className="submit">
                    <Button className="button" type="submit">
                      SEND MESSAGE
                      <ArrowForwardIcon />
                    </Button>
                  </div>
                </form>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Section>
  );
}

export default Mycontact;
