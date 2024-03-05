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
              Tech enthusiast passionate about assisting end-users, my computer
              skills serve as a valuable tool in providing effective support.
              From troubleshooting to finding solutions, I take pleasure in
              making technology accessible and user-friendly for everyone.
              <br></br>
              <br></br>
              With over 4 years of experience as a Customer Care at{" "}
              <i>
                <b className="purple">Accenture and Sopra Steria</b>
              </i>
              , I've honed my skills in prioritizing and resolving customer
              tickets, reporting product bugs and anomalies to the technical
              team log analysis and programing skills.
              <br />
              <br />
              My commitment to user satisfaction goes beyond troubleshooting –
              it's about creating seamless experiences. Let's navigate the
              digital landscape together, embracing the thrill of solving
              challenges and staying ahead in the ever-evolving tech world!
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Python, Javascript and NoSQL</b>
              </i>{" "}
              and proficient in{" "}
              <i>
                <b className="purple"> Zendesk, Jira and ElasticSearch.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my curiosity for learning new
              things about Information Technology domains such as{" "}
              <i>
                <b className="purple">AI and Cybersecurity.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={myImg} className="img-fluid" alt="avatar" />
            <Tilt></Tilt>
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
