import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/landingpage.css';
import Logo from '../../components/Logo';
import Button1 from '../../components/Button';
import Fade from 'react-reveal/Fade';

function LandingPage() {
  return (
    <>
      <div id="landing-top">
        <div>
          <img
            src={require('./landing-top.svg')}
            id="landing-header-green"
            alt="Landing Page Green Header"
          />
          <Logo logoid={'landing-logo'} />
        </div>
        <div id="landing-top-description">
          <div>
            <Fade bottom distance="0.5em">
              <p
                className="uppercase gradient-color cmedium"
                id="landing-title1"
              >
                gpalculate
              </p>
            </Fade>
            <Fade bottom distance="0.5em" delay={1000}>
              <p className="grey" id="landing-desc">
                Easily calculate your GPA, save your records,
                <br />
                and plan your semester in advance
              </p>
            </Fade>
            <Link to="/gpaCalculator">
              <Button1 buttonid={'landing-button'} text={'Get Started'} />
            </Link>
          </div>
          <Fade bottom distance="0.5em" delay={1000}>
            <img
              src={require('./landing-preview.png')}
              id="landing-previewImg"
              alt="Landing Page Preview"
            />
          </Fade>
        </div>
      </div>
      <div id="landing-bottom">
        <Fade bottom distance="0.5em">
          <p className="grey" id="landing-bottom-title">
            <span
              className="uppercase gradient-color cmedium"
              id="landing-title2"
            >
              Gpalculate
            </span>{' '}
            is a personalized tool for calculating
            <br /> your GPA and individual course grades
          </p>
        </Fade>
        <Fade bottom distance="0.5em" delay={500}>
          <div id="landing-bottom-text">
            <div>
              <p className="gradient-color landing-bottom-text-title">
                Better decision on courses
              </p>
              <p className="grey">
                Decide which courses to take based on the checkbox tool. See how
                much impact the course can give.
              </p>
            </div>
            <div>
              <p className="gradient-color landing-bottom-text-title">
                Visually see records
              </p>
              <p className="grey">
                Gpalculate automatically calculates and shows records visually.
                Export your records as a pdf file for later use.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
}

export default LandingPage;
