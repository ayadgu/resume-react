import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineRobot,
  AiOutlineCode,
  AiFillGithub,
  AiOutlineGlobal,
} from "react-icons/ai";

const ProjectCard = ({
  title,
  icon,
  image,
  description,
  features,
  technologies,
  githubLink,
  demoLink,
}) => {
  return (
    <Col md={4} className="mb-4">
      <div className="project-card h-100">
        <div className="project-header">
          {icon}
          <h4>{title}</h4>
        </div>

        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          className="project-image-container"
        >
          <img src={image} alt={title} className="project-image img-fluid" />
        </a>

        <div className="project-content">
          <p className="project-description">{description}</p>

          <h5>Fonctionnalités clés</h5>
          <ul className="project-features">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <div className="tech-stack">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>

          <div className="project-links">
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-sm me-2"
            >
              <AiFillGithub /> Code Source
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
        </div>
      </div>
    </Col>
  );
};

const PortfolioSection = () => {
  // Project data
  const projects = [
    {
      title: "Telegram Portuguese Bot",
      icon: <AiOutlineRobot className="project-icon" />,
      image: "/path/to/telegram-bot-image.jpg", // Replace with actual image path
      description:
        "Un bot Telegram d'assistance pour apprendre le portugais qui aide les utilisateurs à pratiquer leurs compétences linguistiques.",
      features: [
        "Traitement du langage naturel pour la pratique conversationnelle",
        "Exercices de vocabulaire personnalisés",
        "Correction de grammaire avec explications",
        "Suivi des progrès personnalisés",
      ],
      technologies: ["Python", "Telegram API", "NLP", "PostgreSQL"],
      githubLink: "https://github.com/ayadgu/bot_port",
      demoLink: "#",
    },
    {
      title: "Mistral x Zendesk Assistant",
      icon: <AiOutlineCode className="project-icon" />,
      image: "/path/to/mistral-zendesk-image.jpg", // Replace with actual image path
      description:
        "Une interface basée sur l'intelligence artificielle Ollama et Mistral pour automatiser le traitement des tickets.",
      features: [
        "Traitement automatique des tickets avec analyse contextuelle",
        "Réponses prédéfinies et suggestions intelligentes",
        "Classement et priorisation des tickets",
      ],
      technologies: ["Ollama", "Mistral", "API Zendesk", "Python"],
      githubLink: "https://github.com/ayadgu/bot_port",
      demoLink: "#",
    },
    {
      title: "Projet 3", // Example third project
      icon: <AiOutlineCode className="project-icon" />,
      image: "/path/to/project3-image.jpg", // Replace with actual image path
      description: "Description de votre troisième projet.",
      features: ["Fonctionnalité 1", "Fonctionnalité 2", "Fonctionnalité 3"],
      technologies: ["Tech 1", "Tech 2", "Tech 3"],
      githubLink: "https://github.com/yourusername/project3",
      demoLink: "#",
    },
  ];

  return (
    <Container fluid className="portfolio-section">
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
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Row>
    </Container>
  );
};

export default PortfolioSection;
