import { Col, Row } from "antd";
import React from "react";
import { BsCodeSquare } from "react-icons/bs";
import { TbBrandFunimation } from "react-icons/tb";
import { AiOutlineArrowRight } from "react-icons/ai";
import { mySocialLinks } from "../layouts/RootLayout";
import Link from "next/link";
import { AddAnimation } from "../components";
import TitleComponent from "./TitleComponent";

const About = () => {
  return (
    <div>
      <TitleComponent title="About" />
      <div>
        <Row gutter={[16, 16]}>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 16 }}
          >
            <div className="text-base">
              <AddAnimation>
                <p className="mb-4">
                  Hey! Im Bob, if you havent already gathered that by now. Im a
                  painter turned software engineer from Daytona, Florida. I
                  specialize in the backend, primarily Node and Rust, but love
                  building with whatever tools are right for the job.
                </p>
              </AddAnimation>
              <AddAnimation>
                <p className="mb-4">
                  I currently work for Google on Google Photos. I also toss in
                  my ¢2 with the design systems teams from time to time (once an
                  artist, always an artist, amirite?).
                </p>
              </AddAnimation>
              <AddAnimation>
                <p className="mb-4">
                  Outside of work, I still love to paint. Any given Sunday youll
                  find me scribbling some happy clouds with my son ☁️ I even
                  teach courses online if youre looking to learn!
                </p>
              </AddAnimation>

              <AddAnimation>
                <p className="mb-4">
                  Outside of work, I still love to paint. Any given Sunday youll
                  find me scribbling some happy clouds with my son ☁️ I even
                  teach courses online if youre looking to learn!
                </p>
              </AddAnimation>
              <AddAnimation>
                <p className="mb-4">
                  Im passively looking for new positions where I can merge my
                  love for code with my love for the canvas. If you think youve
                  got an opening that I might like, lets connect
                </p>
              </AddAnimation>

              <AddAnimation>
                <div className="flex gap-2 items-center mt-4">
                  <p className="flex items-center gap-2 text-primary ">
                    My links <AiOutlineArrowRight />
                  </p>
                  <div className="flex gap-2">
                    {mySocialLinks.map((item: any) => (
                      <Link
                        key={item.link}
                        href={item.link}
                        target="_blank"
                        className="text-xl hover:text-primary"
                      >
                        {item.icon}
                      </Link>
                    ))}
                  </div>
                </div>
              </AddAnimation>
            </div>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 8 }}
          >
            <div>
              <div className="mb-12">
                <AddAnimation>
                  <div className="flex gap-2 items-center mb-4 text-2xl">
                    <span className="text-primary">
                      <BsCodeSquare />
                    </span>
                    <h3 className="font-bold ">Use at work</h3>
                  </div>
                </AddAnimation>
                <AddAnimation>
                  <div className="flex gap-2 flex-wrap">
                    {workSkill.map((item: string) => (
                      <div
                        key={item}
                        className="bg-[#383838] rounded-xl w-auto px-2 py-1 text-base "
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </AddAnimation>
              </div>

              <div>
                <AddAnimation>
                  <div className="flex gap-2 items-center mb-4 text-2xl">
                    <span className="text-primary">
                      <TbBrandFunimation />
                    </span>
                    <h3 className="font-bold ">Use for Fun</h3>
                  </div>
                </AddAnimation>
                <AddAnimation>
                  <div className="flex gap-2 flex-wrap">
                    {workSkill.map((item: string) => (
                      <div
                        key={item}
                        className="bg-[#383838] rounded-xl w-auto px-2 py-1 text-base "
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </AddAnimation>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;

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
