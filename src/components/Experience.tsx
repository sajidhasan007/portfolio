import { Col, Row } from "antd";
import React from "react";
import TitleComponent from "./TitleComponent";
import { IProjectProps } from "./ProjectCard";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="mt-40">
      <TitleComponent title="Exprrience" firstColumn={5} />

      <Row gutter={[16, 16]}>
        {projectData.map((item: IProjectProps) => (
          <Col
            key={item.title}
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 24 }}
          >
            <ExperienceCard
              companyTitle="MISFIT Technology Ltd."
              designation="Jr. Software Engineer"
              techStack={["React", "NextJs"]}
              description="I help build and scale Google Photos. Increased throughput of our primary services by 70%. Migrated backend service from Java to Go. Also helped make it look prettier."
              location="Dhaka"
              startYear="2022"
              endYear="Present"
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Experience;

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
