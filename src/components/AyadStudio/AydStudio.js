import React, { useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { Container, Row, Col, Stack, Card, Image } from "react-bootstrap";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import ayd1 from "../../Assets/Projects/ayd1.jpg";
import ayd13 from "../../Assets/Projects/ayd13.jpg";
// import ayd13 from "../../Assets/Projects/ayd13.png";
import ayd14 from "../../Assets/Projects/ayd14.jpg";
import ayd15 from "../../Assets/Projects/ayd15.jpg";
import ayd16 from "../../Assets/Projects/ayd16.jpg";
import ayd17 from "../../Assets/Projects/ayd17.jpg";
import ayd18 from "../../Assets/Projects/ayd18.jpg";
import ayd19 from "../../Assets/Projects/ayd19.jpg";
import ayd21 from "../../Assets/Projects/ayd21.jpg";
import ayd22 from "../../Assets/Projects/ayd22.jpg";
import ayd23 from "../../Assets/Projects/ayd23.jpg";
import ayd24 from "../../Assets/Projects/ayd24.jpg";
import ayd25 from "../../Assets/Projects/ayd25.jpg";
import ayd26 from "../../Assets/Projects/ayd26.jpg";

import ayd28 from "../../Assets/Projects/ayd28.gif";
import ayd37 from "../../Assets/Projects/ayd37.png";
import ayd36 from "../../Assets/Projects/ayd36.jpg";
import ayd29 from "../../Assets/Projects/ayd29.gif";
import ayd30 from "../../Assets/Projects/ayd30.gif";
import ayd31 from "../../Assets/Projects/ayd31.gif";
import ayd32 from "../../Assets/Projects/ayd32.gif";
import ayd33 from "../../Assets/Projects/ayd33.gif";

import ayd34 from "../../Assets/Projects/ayd34.jpg";
import ayd35 from "../../Assets/Projects/ayd35.jpg";

import ayd0 from "../../Assets/Projects/ayd0.jpg";
// import ayd1 from "../../Assets/Projects/ayd1.jpg";

import useSize from "./useSize";
import ayd10 from "../../Assets/Projects/ayd10.jpg";
import ayd3 from "../../Assets/Projects/ayd3.jpg";
import ayd4 from "../../Assets/Projects/ayd4.jpg";
import ayd5 from "../../Assets/Projects/ayd5.jpg";
import ayd6 from "../../Assets/Projects/ayd6.jpg";
import ayd9 from "../../Assets/Projects/ayd9.jpg";
import ayd11 from "../../Assets/Projects/ayd11.png";
import ayd12 from "../../Assets/Projects/ayd12.png";
// import ayd13 from "../../Assets/Projects/ayd13.png";
import { Gallery, ThumbnailImageProps } from "react-grid-gallery";

const images2 = [{ src: ayd11 }, { src: ayd35 }, {}, {}];

const images1 = [
  { src: ayd37 },
  { src: ayd28 },
  { src: ayd23 },
  // { src: ayd4 },
  { src: ayd1 },
  { src: ayd26 },
  { src: ayd36 },
  { src: ayd33 },
  // { src: ayd0  },
  { src: ayd3 },
  // { src: ayd32 },
  { src: ayd13 },
  // { src: ayd10 },
  { src: ayd31 },
  { src: ayd29 },
  { src: ayd30 },
  { src: ayd5 },
  // { src: ayd6 },
  { src: ayd9 },
  { src: ayd11 },
  { src: ayd12 },
  // { src: ayd16 },
  // { src: ayd17 },
  // { src: ayd13 },
  // { src: ayd14 },
  { src: ayd18 },
  { src: ayd19 },
  // { src: ayd21 },
  { src: ayd22 },
  { src: ayd24 },
  { src: ayd25 },
];

function AydStudio() {
  const windowsize = useSize();
  return (
    <Container fluid className="project-section" style={{ padding: 40 }} md="6">
      <Row>
        <div className="App">
          <div className="window">
            Width : <span>{windowsize[0]}</span>
          </div>
          <div className="window">
            Height : <span>{windowsize[1]}</span>
          </div>
        </div>
        {windowsize[0] < 500 ? (
          <img src={ayd37}></img>
        ) : (
          <Gallery
            rowHeight={400}
            enableImageSelection={false}
            margin={2}
            images={images2}
          />
        )}
      </Row>
      <Row>
        <Col md={8}>
          <p className="home-about-body">
            Passionné d'architecture, Guillaume s'amuse à recréer en 3D les
            monuments parisiens qui l'inspirent. Par pur hasard, il découvre un
            moyen de transformer ces modèles en saisissants dessins 2D. Comme
            par magie, ces œuvres prennent vie, et Guillaume affine ses
            techniques pour donner l'illusion que chaque trait est tracé à la
            main. Un talent créatif et une passion architecturale fusionnent
            dans ses créations uniques.
          </p>
        </Col>
        <Col>
          {/* <img src={ayd11} alt="Montmartre" className="img-fluid"></img> */}
        </Col>
      </Row>
      <br></br>
      <Row>
        <Gallery
          enableImageSelection={false}
          margin={2}
          images={images1}
          rowHeight={windowsize[0] < 500 ? 100 : 300}
        />
      </Row>
    </Container>
  );
}

export default AydStudio;
