import { Col, Row } from "antd";
import React from "react";

const About = () => {
  return (
    <div>
      <Row>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 3 }}
        >
          <div className="title-style">
            About<span className="dot">.</span>
          </div>
        </Col>
        <Col
          className="w-full flex justify-center items-center"
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 21 }}
        >
          <div className="bg-white h-[1px] w-full ml-4 mt-4"></div>
        </Col>
      </Row>
      <div>
        <Row>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 16 }}
          >
            <div className="text-base">
              <p>
                Hey! I'm Bob, if you haven't already gathered that by now. I'm a
                painter turned software engineer from Daytona, Florida. I
                specialize in the backend, primarily Node and Rust, but love
                building with whatever tools are right for the job.
              </p>
              <p>
                I currently work for Google on Google Photos. I also toss in my
                ¢2 with the design systems teams from time to time (once an
                artist, always an artist, amirite?).
              </p>
              <p>
                Outside of work, I still love to paint. Any given Sunday you'll
                find me scribbling some happy clouds with my son ☁️ I even teach
                courses online if you're looking to learn!
              </p>
              <p>
                I'm passively looking for new positions where I can merge my
                love for code with my love for the canvas. If you think you've
                got an opening that I might like, let's connect
              </p>
            </div>
          </Col>
          <Col
            className=""
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 8 }}
          >
            <div>
              <div>
                <h3>Use at work</h3>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
