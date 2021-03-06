import React from 'react';
import { animated, useSpring } from 'react-spring';
import TextTransition, { presets } from 'react-text-transition';
import './css/shaper.css';
import './css/home.css';
import { Row, Col } from 'react-bootstrap';
import { DiCode } from 'react-icons/di';
import { Icon } from 'semantic-ui-react';
import { TEXTS, profession } from '../constants';
import {
  trans, calc,
} from '../utils';

function Home() {
  const index = 1;
  const fade = useSpring(
    {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
  );
  const [props, set] = useSpring(() => (
    {
      xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 },
    }));
  const { xys } = props;

  return (
    <div className="custom-shape-divider-top-1598650042 intro" id="homepage">

      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill" />
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill" />
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill" />
      </svg>

      <span role="img" id="greetings" aria-label="Greeting">
      
      {/* &#128075; */}
      
        <TextTransition
          text={TEXTS[index % TEXTS.length]}
          springConfig={presets.gentle}
          delay={300}
          inline
        />
       
      </span>

      

      <h3 id="name">
        <TextTransition
          text={TEXTS[(index + 1) % TEXTS.length]}
          springConfig={presets.wobbly}
          delay={1000}
          inline
        />
      </h3>

      <div className="container intro-img" style={fade}>

        <animated.img
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: xys.interpolate(trans) }}
          className="img-fluid"
          src="./images/intro.jpg"
        />

        <Row>
          <div className="container">
            <h3 style={{ textAlign: 'center' }} id="connect">Connect With me Now ! </h3>
            <ul id="social-icons">
              <li>
                <a rel="noopener noreferrer" href="https://github.com/thebinsohail" target="_blank">
                  <Icon aria-label="github" name="github" color="black" size="huge" />
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="https://www.facebook.com/anasbinsohail/" target="_blank">
                  <Icon aria-label="facebook" name="facebook" color="blue" size="huge" />
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="https://www.instagram.com/thebinsohail" target="_blank">
                  <Icon aria-label="instagram" name="instagram" color="red" size="huge" />
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="anassohail.as@gmail.com">
                  <Icon aria-label="mail" name="mail" color="orange" size="huge" />
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="https://twitter.com/thebinsohail" target="_blank">
                  <Icon aria-label="twitter" name="twitter" color="blue" size="huge" />
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/anasbinsohail/" target="_blank">
                  <Icon aria-label="linkedin" name="linkedin" color="blue" size="huge" />
                </a>
              </li>
            </ul>
          </div>

          <Col lg={12}>
            <h3 id="profession">{profession}</h3>
          </Col>

          <DiCode size="2em" color="black" />

        </Row>

        <div id="aboutme" />

        <div id="cv-btn">
          <a href="./CV/cv.pdf" download="CV"><button type="button" className="btn btn-danger">Download CV</button></a>
        </div>
      </div>

    </div>
  );
}
export default Home;
