import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
import digitalclock from "../../Assets/Projects/digitalclock.png";
import stopwatch from "../../Assets/Projects/stopwatch.png";
import todo from "../../Assets/Projects/todo.png";
import Cammarket from "../../Assets/Projects/Cammarket.png";
import Moovestudent from "../../Assets/Projects/Moovestudent.png";
import { BsStopwatch } from "react-icons/bs";
import Ecommerce from "../../Assets/Projects/Ecommerce.png";


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
    imgPath={Ecommerce} // replace with your eCommerce project's image path
    isBlog={false}
    title="Ecommerce-Platform" // replace with your eCommerce project's title
    description="A user-friendly eCommerce platform designed to provide an engaging shopping experience and modernized transaction processes." 
    ghLink="https://github.com/pentashi/ecommerce-" // replace with your GitHub link
    demoLink="https://ecommerce-omega-swart-83.vercel.app/" // replace with your demo link
  />
</Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Moovestudent}
              isBlog={false}
              title="Moove-Student"
              description="Landing page for a comprehensive solution for modernizing educational processes and enhancing student engagement."
              ghLink="https://github.com/pentashi/Moove-Student"
              demoLink="https://moove-student.vercel.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Cammarket}
              isBlog={false}
              title="Cammarket"
              description="Online market platform Landing page "
              ghLink="https://github.com/pentashi/Cammarket"
              demoLink="https://cammarket.vercel.app/"
            />
          </Col> */}
{/* 
          <Col md={4} className="Stop watch">
            <ProjectCard
              imgPath={stopwatch}
              isBlog={false}
              title="Stopwatch"
              description="Online Digital stopwatch"
              ghLink="https://github.com/pentashi/achapi-stop-watch"
              demoLink="https://achapi-stop-watch2.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={digitalclock}
              isBlog={false}
              title=" Modern Digital Clock"
              description="A modern digital clock built with react that permits you to see the time of various timezones"
              ghLink="https://github.com/pentashi/achapi-digital-clock"
              demoLink="https://achapi-digital-clock.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo"
              description="An App that helps you manage your task and Schedule activities"
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
               demoLink="https://task-management-ui-blond.vercel.app/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={SER}
              isBlog={false}
              title="Speech Emotion Detection"
              description="This is a speech emotion detection model i trained with tensorflow and saved in keras and integrated it into an android app to inteprete emotions in real time0"
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
