import { Col, Row } from "antd";
import React from "react";
import { AddAnimation } from "../components";
import TitleComponent from "./TitleComponent";
import ProjectCard, { IProjectProps } from "./ProjectCard";

const Project = () => {
  return (
    <div>
      <TitleComponent title="Projects" isReverse={true} />

      <Row gutter={[16, 16]}>
        {projectData.map((item: IProjectProps) => (
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 12 }}
          >
            <ProjectCard
              title={item.title}
              techStack={item.techStack}
              description={item.description}
              imageLink={item.imageLink}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Project;

const workSkill = [
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "React",
  "Redux",
  "NodeJS",
  "Express",
  "Postgres",
  "MongoDB",
  "GitHub",
  "Jira",
  "Heroku",
  "AWS",
];

const projectData: IProjectProps[] = [
  {
    title: "Genocide Museum",
    techStack: ["abc", "dsw", "sde"],
    description:
      "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own",
    imageLink: "/projectImage.jpg",
  },
  {
    title: "Genocide Museum",
    techStack: ["abc", "dsw", "sde"],
    description:
      "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own",
    imageLink: "/projectImage.jpg",
  },
  {
    title: "Genocide Museum",
    techStack: ["abc", "dsw", "sde"],
    description:
      "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own",
    imageLink: "/projectImage.jpg",
  },
  {
    title: "Genocide Museum",
    techStack: ["abc", "dsw", "sde"],
    description:
      "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own",
    imageLink: "/projectImage.jpg",
  },
];
