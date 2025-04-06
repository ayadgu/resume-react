import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.png";
import myImg from "../../Assets/portrait-crop.png";
import port_bot_1 from "../../Assets/Projects/PortugueseBot/photo1.jpg";
import port_bot_2 from "../../Assets/Projects/PortugueseBot/photo2.jpg";
import mistral_log0 from "../../Assets/Projects/Mistral/img0.png";
import port_bot_3 from "../../Assets/Projects/PortugueseBot/photo3.jpg";
import port_bot_4 from "../../Assets/Projects/PortugueseBot/photo4.jpg";
import port_bot_5 from "../../Assets/Projects/PortugueseBot/photo5.jpg";
import port_bot_6 from "../../Assets/Projects/PortugueseBot/photo6.jpg";
import portraitImg from "../../Assets/portrait-crop.png";

import Tilt from "react-parallax-tilt";

// With these icons from the AI set:
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineRobot,
  AiOutlineScan,
  AiOutlineLink,
  AiOutlineGlobal,
  AiFillGithub,
  AiOutlineCode,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
// In your main component or App.js
function ProjectImageGallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="project-gallery">
      <div className="gallery-container">
        <img
          src={images[currentIndex]}
          alt={`Project screenshot ${currentIndex + 1}`}
          className="img-fluid rounded shadow"
        />

        <div className="gallery-nav">
          <button className="gallery-btn prev-btn" onClick={goToPrevious}>
            <AiOutlineLeft />
          </button>
          <div className="gallery-indicators">
            {images.map((_, index) => (
              <span
                key={index}
                className={`gallery-dot ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          <button className="gallery-btn next-btn" onClick={goToNext}>
            <AiOutlineRight />
          </button>
        </div>
      </div>
    </div>
  );
}
function ProjectCard({
  title,
  icon,
  image,
  description,
  technologies,
  githubLink,
  demoLink,
}) {
  return (
    <Col md={6} className="mb-6">
      <div className="project-card ">
        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          className="project-image-container"
        >
          <img src={image} alt={title} className="img-fluid rounded" />
        </a>
        <div className="project-header">
          {/* {icon} */}
          <h4>{title}</h4>
        </div>
        <div className="project-content">
          <div className="tech-stack">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
          <p className="project-description">{description}</p>
          {/* 
          <div className="project-links mt-3">
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-sm me-2"
            >
              <AiFillGithub /> Source Code
            </a>
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary btn-sm"
              >
                <AiOutlineGlobal /> Démo
              </a>
            )}
          </div>
           */}
        </div>
      </div>
    </Col>
  );
}

function Home2() {
  // Sample image URLs - replace with your actual project images
  const telegramBotImages = [
    // port_bot_1,
    port_bot_2,
    port_bot_3,
    port_bot_4,
  ];

  const mistralZendeskImages = [
    // port_bot_1,
  ];

  const ocrSystemImages = [
    "../../Assets/portrait-crop.png",
    "../../Assets/portrait-crop.png",
    "../../Assets/portrait-crop.png",
  ];
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Passionné par la tech, je me spécialise dans l'optimisation des
              outils pour rendre l'expérience utilisateur plus fluide et
              performante. Avec <b className="purple">5 ans d'expérience</b> en
              Transformation Digitale et support applicatif chez{" "}
              <b className="purple">Accenture</b>,{" "}
              <b className="purple">Sopra Steria</b> et{" "}
              <b className="purple">Praxedo</b>, j'ai acquis une expertise en
              gestion des demandes, automatisation et analyse de logs.
              <br></br>
              <br></br>
              Curieux, je me plonge dans l'intelligence artificielle et la
              cybersécurité, domaines qui redéfinissent le support et l'analyse
              technique. Je maîtrise <b className="purple">Python</b>,{" "}
              <b className="purple">JavaScript</b>,{" "}
              <b className="purple">SQL</b>, ainsi que des outils comme{" "}
              <b className="purple">Zendesk</b>, <b className="purple">Jira</b>,{" "}
              <b className="purple">Kibana</b> et{" "}
              <b className="purple">ElasticSearch</b>. Toujours en veille, je
              suis prêt à relever de nouveaux défis.
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
        {/* Projects Section Header */}
        <Row className="mt-5 mb-4">
          <Col md={12} className="text-center">
            <h1 className="project-heading">Réalisations</h1>
            <p>
              Voici un aperçu de mes réalisations récentes et de mes compétences
              techniques.
            </p>
          </Col>
        </Row>

        {/* Projects Grid - 3 per row */}
        <Row>
          <ProjectCard
            title="Telegram Portuguese Bot"
            icon={<AiOutlineRobot className="project-icon" />}
            image={port_bot_2}
            description="Un bot Telegram d'assistance pour apprendre le portugais qui aide les utilisateurs à pratiquer leurs compétences linguistiques."
            technologies={["Python", "Telegram API", "NLP", "PostgreSQL"]}
            githubLink="https://github.com/ayadgu/bot_port"
            demoLink="#"
          />

          <ProjectCard
            title="Mistral x Zendesk Assistant"
            icon={<AiOutlineCode className="project-icon" />}
            image={mistral_log0}
            description="Une interface basée sur l'intelligence artificielle Ollama et Mistral pour automatiser le traitement des tickets."
            technologies={["Ollama", "Mistral", "API Zendesk", "Python"]}
            githubLink="https://github.com/ayadgu/Mistral_Projects_Public"
            demoLink="#"
          />
          {/* 
          <ProjectCard
            title="En construction..."
            icon={<AiOutlineCode className="project-icon" />}
            // image={portraitImg}
            // description="To be continued..."
            technologies={[]}
            // githubLink="https://github.com/yourusername/project3"
            demoLink="#"
          /> */}
        </Row>

        {/* Socials */}

        <Row>
          <Col md={12} className="home-about-social">
            {/* <h1>FIND ME ON</h1> */}
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
