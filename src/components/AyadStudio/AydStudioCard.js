import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function AydStudioCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {props.isGit && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}
        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {props.label}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default AydStudioCards;