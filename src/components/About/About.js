import React from "react";
// import { stackList } from "../../data/ProjectData";
import { Image, ContactWrapper } from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image src="/ankit.jpg" alt="Ankit " />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              <br />
              <br />
              Hi! My name is <strong>Ankit Kumar</strong>, and I'm from Jamui,
              Bihar. I am currently pursuing a B.Tech in Computer Science and
              Engineering (CSE) at NIT Nagaland. I specialize in problem-solving
              and have a strong command of Java, Data Structures, and
              Algorithms. I am passionate about building dynamic and responsive
              web applications, and I enjoy working with technologies like
              React, Express, and MongoDB. My goal is to continuously improve my
              skills and contribute to innovative projects.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              <strong> In Free Time</strong>
              <br /> I have a passion for several activities that bring joy and
              relaxation to my life. I find great pleasure in playing cricket
              and chess, which not only enhance my strategic skills but also
              offer a refreshing break from the screen.
            </ScrollAnimation>

            <br />
            <br />
            {/* 
            <ScrollAnimation animateIn="fadeInLeft">
              Working collaboratively within a team towards a shared objective
              has been an incredibly rewarding and unique experience for me. I
              am eager to continue exploring exciting projects in the future,
              with a particular interest in web development and cross-platform
              mobile development.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation> */}

            {/* <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies> */}
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
