import { Col, Row } from "antd";
import React from "react";
import { BsCodeSquare } from "react-icons/bs";
import { TbBrandFunimation } from "react-icons/tb";
import { AiOutlineArrowRight } from "react-icons/ai";
import { mySocialLinks } from "../layouts/RootLayout";
import Link from "next/link";
import { AddAnimation } from "../components";
import TitleComponent from "./TitleComponent";

const Project = () => {
  return (
    <div>
      <TitleComponent />

      <Row gutter={[16, 16]}>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 12 }}
        >
          <h1>hello</h1>
        </Col>
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
