import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/thabang_resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Machine Learning Research Scientist intern [IBM Research, JHB]"
              date="Mar 2020 - Present"
              content={[
                "Working on a climate science project, which is a collaboration between several research laboratories and researchers from the United States, Brazil, South Africa and the United Kingdom. This work forms an integral part of a larger initiative by IBM which is to create a suite of services that focus on food and manufacturing supply-chains, climate impact modelling as well a framework to evaluate the risk and resiliency of food  and other commodities at a global scale.",
                "Development of machine/deep learning and data-driven pipelines on Petabytes of data for making long-range seasonal forecast of temperature and precipitation.",
                "Integration and deployment of machine learning seasonal forecasts into IBM PAIRS",
                "Involved in the initial development of the Covid-19 dashboard used by Gauteng Premier.",
                "Technical team lead for the South African team in a international weather forecast project for a week.",
                "Assist with ad-hoc training, code reviews and tutorials as required for new team members.",
              ]}
            />
              <Resumecontent
              title="Data Scienstist Itern [Business Intelligence Service (Wits), JHB]"
              date="Jun 2018 - Mar 2020"
              content={[
                "Worked for a central unit for that organize information and make it available to management for the purpose of understanding, planning, managing and running the university and its processes.",
                "Implemented an end-end course recommendation system for 1st year students. The system uses K-modes clustering to group students into 3 clusters below average, average and above average students based on their matric marks, each of these cluster is associated with university courses that have atleast 80% pass rate percentile. The model achieved a silhoutte score of 90% and was deployed through PowerBI.",
                "Development of feature engineering and model training pipelines",
                "Introduction of data lake concepts through open-source framework called Kylo",
                "Facilitation of workshops for teaching and training co-workers and vacation students in Data science related topics.",
                "Reports based on business requirements using SQL, SAP BO and OBIEE."
              
              ]}
            />
            <Resumecontent
              title="Data Scientist and Software Engineer Intern [CSIR, PTA]"
              date="Nov 2017 - Jan 2018"
              content={[
              "Implemented Support Vector Machines with 75% accuracy to aid municipalities of South Africa to improve their service delivery, efficiency through a predictive profiling approach.",
              "Used Principal Component Analysis to identify top 5 factors out of 50 that cause youth unemployment per municipality. Then a Random Forest with a accuracy of 70% was used to predict the youth unemployment rate.",
              "The system was deployed with a Django backend, Postgresql database and CSS/HTML front-end to be used by municipal managers for the city of Cape Town",
              ]}
            />
            <Resumecontent
              title="System Analyst and Support Intern [ZARX, JHB]"
              date="Jun 2017 - Oct 2017"
              content={[
                "Troubleshooting and testing of trading systems. Modify and update system reports.",
                "Testing newly developed trading systems and documentation the entire process to improve existing methods and systems."
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Freelance Web Developer [Kasilam Projects]"
              content={[
                "Kasilam Projects is a movement and I started that focuses on branding, webdesign and photography for kasi businesses. The aim is to helped kasi business go online using free hosting platforms.",
              ]}
            />
            <Resumecontent
              title="Science Communicator and Stargazer [Wits Planetarium]"
              content={[
                "Engage with the general public about science and perform star, moon and planet gazing, using a Newtonian telescope.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="MSC Computer Science [University of the Watersrand]"
              date="2018 - Present"
              content={['Learning Level Set Method by Echo State Network for Image Segmentation',
              'Working on finding computational cheaper techniques for training Recurrent neural networks.'
              // `CGPA: ${cgpa} (Till ${sem}th Sem)`
            ]}
            />
            <Resumecontent
              title="BSC Hons Computer Science [University of the Watersrand]"
              date="2017"
              content={['Wildfire Estimation Using Kernel Density Estimators.', "Predicting wildfire occurrence in South Africa using unsupervised machine learning"]}
            />
            <Resumecontent
              title="BSC Astronomy and Astrophysics, Computational and Appled Mathematics [University of the Watersrand] "
              date="2014 - 2016"
              content={[]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "Co-founder of Wits Astronomy Club",
                // "Feature on Mail and Guardian for t"
                // `Current rank in Spoj ${spojRank}`,
                // `Current rank in HackerRank  ${hackerrank}`,
                // "Top Performer in Code-Break 1.0",
                // "Participant in Hack-A-Bit 2019",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
