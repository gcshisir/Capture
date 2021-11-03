import React, { useState } from "react";
// import icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
// Styles
import styled from "styled-components";
import { About, Description, Image } from "../styles";

import { useScroll } from "../hooks/useScroll";
import { scrollReveal } from "../animation";
const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variant={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          High <span>quality</span>services
        </h2>
        <Cards>
          <div className="card">
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="teamwork" />
              <h3>Team Work</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Diaphragm</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Affordable</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="camera" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 20rem;

  .icon {
    display: flex;
    align-items: center;

    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
