import { Col, Row } from "antd";
import React from "react";
import { AddAnimation } from "../components";
import TitleComponent from "./TitleComponent";
import ProjectCard, { IProjectProps } from "./ProjectCard";

const Project = () => {
  return (
    <div className="mt-40">
      <TitleComponent
        title="Projects"
        isReverse={true}
        firstColumn={5}
        secondColumn={19}
      />

      <Row gutter={[16, 16]}>
        {projectData.map((item: IProjectProps) => (
          <Col
            key={item.title}
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
              liveLink={item.liveLink}
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
    techStack: [
      "Tailwind CSS",
      "TypeScript",
      "SASS",
      "NextJs",
      "Ant Design",
      "ReduxJs",
      "ReactJs",
    ],
    description:
      "Introducing the Genocide Museum Bangladesh website - a poignant online platform preserving the history of the 1971 war. Explore pinned locations of genocide and mass killings, gaining insight from survivors' accounts. Discover a rich collection of journals, notices, and archival materials, shedding light on the aftermath. Support the museum's mission by purchasing books from the dedicated bookstore. The gallery showcases evocative videos and photos, offering a profound understanding of the war's impact. Join us in commemorating history, promoting remembrance, education, and healing.",
    imageLink: "/projectImage.jpeg",
    liveLink: "https://genocidemuseum.org.bd/",
  },
];
