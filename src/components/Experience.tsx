import { Col, Row } from "antd";
import React from "react";
import TitleComponent from "./TitleComponent";
import { IProjectProps } from "./ProjectCard";
import ExperienceCard, { IExperienceCard } from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="mt-40">
      <TitleComponent title="Experience" firstColumn={6} secondColumn={18} />

      <Row gutter={[16, 16]}>
        {experienceData.map((item: IExperienceCard) => (
          <Col
            key={item.companyTitle}
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 24 }}
          >
            <ExperienceCard
              companyTitle={item.companyTitle}
              designation={item.designation}
              techStack={item.techStack}
              description={item.description}
              location={item.location}
              startYear={item.startYear}
              endYear={item.endYear}
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

const experienceData: IExperienceCard[] = [
  {
    companyTitle: "MISFIT Technology Ltd.",
    designation: "Jr. Software Engineer",
    techStack: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "React",
      "Redux",
      "GitHub",
      "Jira",
      "AWS",
    ],
    description:
      "I help build and scale Google Photos. Increased throughput of our primary services by 70%. Migrated backend service from Java to Go. Also helped make it look prettier.",
    location: "Dhaka",
    startYear: "2022",
    endYear: "Present",
  },
];
