import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Thabang Mashinini </span>
            from <span className="purple"> JHB, South Africa.</span>
            <br />I am a PHD student at the University of the Witwatersrand. I was never the best at school or academics, 
             I’m just a super curious guy. I spend a lot of time building and learning about software, but there’s also a lot more to it. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Photography and Videography
            </li>
            <li className="about-activity">
              <ImPointRight /> Music Production
            </li>
            <li className="about-activity">
              <ImPointRight /> Tutoring
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Short Stories (Anime)
            </li>
            <li className="about-activity">
              <ImPointRight /> Calisthenics
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "One step at a time"{" "}
          </p>
          <footer className="blockquote-footer">Thabang</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
export default AboutCard;
