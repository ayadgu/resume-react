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
            <p className="home-about-body">
              Passionné de technologie et animé par la volonté de simplifier
              l'expérience utilisateur, j'aime résoudre des problèmes et
              optimiser les processus pour rendre les outils plus intuitifs et
              performants. Offrir un support efficace ne se limite pas à
              dépanner, c'est aussi améliorer continuellement les solutions
              existantes et anticiper les besoins.
              <br></br>
              <br></br>
              Avec <b className="purple">5 ans d'expérience</b> en tant que
              consultant en Transformation Digitale et support applicatif chez{" "}
              <b className="purple">Accenture</b>,{" "}
              <b className="purple">Sopra Steria</b> et{" "}
              <b className="purple">Praxedo</b>, j'ai acquis une solide
              expertise en gestion des demandes clients, analyse de logs,
              automatisation de tâches et collaboration avec les équipes de
              développement pour optimiser les produits.
              <br></br>
              <br></br>
              Curieux et toujours en quête d'amélioration, je m'intéresse aux
              technologies émergentes comme l'intelligence artificielle et la
              cybersécurité, deux domaines qui redéfinissent le futur du support
              et de l'analyse technique. J'aime relever des défis complexes et
              explorer de nouvelles approches pour améliorer l'efficacité des
              systèmes et des équipes.
              <br></br>
              <br></br>
              Je maîtrise <b className="purple">Python</b>,{" "}
              <b className="purple">JavaScript</b> et{" "}
              <b className="purple">SQL</b>, ainsi que des outils essentiels
              comme <b className="purple">Zendesk</b>,{" "}
              <b className="purple">Jira</b>, <b className="purple">Kibana</b>,{" "}
              <b className="purple">Postman</b> et{" "}
              <b className="purple">ElasticSearch</b>. Mon expertise couvre
              aussi les bases de données (<b className="purple">PostgreSQL</b>,{" "}
              <b className="purple">NoSQL</b>), l'automatisation via scripting
              et l'analyse avancée de logs. Toujours en veille, je suis prêt à
              relever de nouveaux défis pour évoluer dans un univers
              technologique en perpétuelle mutation.
            </p>

            <p className="home-about-body" hidden={true}>
              <br></br>
              <br></br>
              Tech enthusiast with a passion for simplifying technology and
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
              <b className="purple">Cybersecurity</b>.
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
