import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Kasilam from "../../Assets/Projects/Kasilam.png";
import rc from "../../Assets/Projects/rc.PNG";
import mn from "../../Assets/Projects/mn.png";
import pairs from "../../Assets/Projects/pairs.png";
import covid from "../../Assets/Projects/covid.jpg";
import msc from "../../Assets/Projects/msc.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pairs}
              isBlog={false}
              title="IBM PAIRS"
              description="Developed Tensorflow 2.0 framework (2D-CNN, UNET, PCA-LSTM and 3D-CNN)and deployment deep learning models for seasonal forecast to be used in an IBM suite of services that focus on food and manufacturing supply-chains, climate impact modelling as well a framework to evaluate the risk and resiliency of food  and other commodities at a global scale.."
              link="https://www.ibm.com/products/environmental-intelligence-suite"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid}
              isBlog={false}
              title="Covid-19 Visualization Tool"
              description="Implemented a heatmap functionality using Folium and Leaflet python libaries to display the case numbers and the placemenent of the IBM Logo. The system was/is used by the Gauteng province to identify new Covid-19 hotspots in Gauteng."
              link="https://gpcoronavirus.co.za/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rc}
              isBlog={false}
              title="Course Recommendation System"
              description="Implemented and deployed a course recommnedation system using K-modes clustering to recommend new 1st year students course combinations that maximise completing 1st succefully. The model achieved a Silhouette score of 80% and was deployed as PowerBI dashboard. The system was used by the faculty of humanities at the University of the Witwatersrand for the  general bachelor of arts degree. [PRIVATE REPO]"
              link="https://github.com/LeparaLaMapara/Wits-Recommendation-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={msc}
              isBlog={false}
              title="Masters Project"
              description="The is my master research project, where I develop a novel approach that is computationally cheaper alternative to train RNNs and perform iterative image segmentation."
              link="https://github.com/LeparaLaMapara/ESNIterativeSegmentation/tree/master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mn}
              isBlog={false}
              title="Municipal Money and Youth Explorer"
              description="Implemented a AI system that assist South African Municipalities improve their service delivary and effieicncy by profiling them using SVM with a accuracy of 75%. Used PCA to identify factors that cause youth unemployment and predict youth unemployemnt rate using random forest with accuracy of 70%. The dashbaord  used a Django backend, Postgresql database, CSS/HTML front-end. This solution was developed for the municipality of Cape Town."
              link="https://github.com/LeparaLaMapara/DSIDE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Kasilam}
              isBlog={false}
              title="Kasilam Projects"
              description="This a movement that I started with my younger brother that focuses on branding, webdesign and photography for kasi businesses. The aim is to helped kasi business go online using free hosting platforms."
              link="https://github.com/LeparaLaMapara/KasiLam"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
