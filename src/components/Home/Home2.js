import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.png";
import myImg from "../../Assets/portrait-crop.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import CVViewer from "./CVViewer";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" hidden={true}>
              Passionné de technologie et enthousiaste à l'idée d'assister les
              utilisateurs, mes compétences en informatique sont un outil
              précieux pour offrir un support efficace. De la résolution de
              problèmes à la recherche de solutions, j'éprouve du plaisir à
              rendre la technologie accessible et conviviale pour tous.
              <br></br>
              <br></br>
              Fort de plus de 4 ans d'expérience en tant que consultant en
              Transformation Digitale chez{" "}
              <i>
                <b className="purple">Accenture et Sopra Steria</b>
              </i>
              , j'ai perfectionné mes compétences dans la priorisation et la
              résolution des demandes des clients, le signalement de bugs
              produits et d'anomalies à l'équipe technique, ainsi que l'analyse
              de logs et les compétences en programmation.
              <br />
              <br />
              Mon engagement envers la satisfaction des utilisateurs va au-delà
              du dépannage, il s'agit de créer des expériences fluides.
              Naviguons ensemble dans le paysage numérique, embrassant le
              plaisir de résoudre des défis et restant à la pointe dans le monde
              technologique en constante évolution !
              <br />
              <br />
              Je maîtrise des langages classiques tels que
              <i>
                <b className="purple"> Python, Javascript et NoSQL</b>
              </i>{" "}
              , et je suis compétent dans l'utilisation de Zendesk, Jira et
              ElasticSearch. Chaque fois que possible, j'applique également ma
              curiosité pour apprendre de nouvelles choses dans les domaines de
              la technologie de l'information, tels que l'{" "}
              <i>
                <b className="purple">IA et Cybersecurity.</b>
              </i>
            </p>
            <p className="home-about-body" hidden={false}>
              <br></br>
              <br></br>
              "Tech enthusiast with a passion for simplifying technology and
              empowering end-users. I leverage my{" "}
              <b className="purple">computer skills</b> to troubleshoot issues,
              identify solutions, and make technology more accessible for
              everyone.
              <br />
              <br />
              With over <b className="purple">4 years of experience</b> in
              Customer Care at <b className="purple">Accenture</b> and{" "}
              <b className="purple">Sopra Steria</b>, I’ve developed expertise
              in managing customer tickets, analyzing logs, reporting bugs, and
              applying <b className="purple">programming skills</b> to enhance
              support processes.
              <br />
              <br />
              My approach goes beyond solving problems—it’s about creating{" "}
              <b className="purple">
                seamless and user-friendly digital experiences
              </b>
              . Together, let’s tackle challenges and stay ahead in the
              ever-evolving tech world!
              <br />
              <br />
              I’m fluent in <b className="purple">Python</b>,{" "}
              <b className="purple">JavaScript</b>, and{" "}
              <b className="purple">NoSQL</b>, with hands-on experience in{" "}
              <b className="purple">Zendesk</b>, <b className="purple">Jira</b>,
              and <b className="purple">ElasticSearch</b>.<br />
              <br />
              In my spare time, I’m driven by curiosity to explore emerging IT
              fields like <b className="purple">AI</b> and{" "}
              <b className="purple">Cybersecurity</b>."
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={myImg} className="img-fluid" alt="avatar" />
            <Tilt></Tilt>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>{/* <CVViewer /> */}</div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ayadgu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="#"
                  // target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ayadgu/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="#"
                  // target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
