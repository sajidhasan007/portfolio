import { Col, Row } from "antd";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { AddAnimation } from ".";
import { motion, useAnimation, useInView } from "framer-motion";

const HeroSection = () => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  const mainContruls = useAnimation();
  const sliderContruls = useAnimation();

  useEffect(() => {
    if (isInview) {
      mainContruls.start("visible");
      sliderContruls.start("visible");
    }
  }, [isInview]);
  return (
    <Row className="h-full" ref={ref}>
      <Col
        xs={{ span: 24 }}
        sm={{ span: 24 }}
        md={{ span: 24 }}
        lg={{ span: 16 }}
        xl={{ span: 16 }}
        xxl={{ span: 16 }}
      >
        <div className="flex items-center h-screen">
          <div>
            <AddAnimation>
              <div className="text-[70px] font-black">
                Hey, I'm Sajid Hasan<span className="dot">.</span>
              </div>
            </AddAnimation>
            <AddAnimation>
              <h2 className="text-3xl my-2">
                I'm a{" "}
                <span className="font-bold text-primary">
                  Full Stack Developer
                </span>
              </h2>
            </AddAnimation>

            <AddAnimation>
              <p className="text-base mb-2">
                I've spent the last 2 years building and scaling software for
                some pretty cool clients. Let's connect!
              </p>
            </AddAnimation>
            <AddAnimation>
              <Link href={"#contact"}>
                <div className="px-4 py-2 w-32 text-center text-lg rounded-lg bg-primary hover:bg-primary_light text-black ">
                  Contact Me
                </div>
              </Link>
            </AddAnimation>
          </div>
        </div>
      </Col>
      <Col
        xs={{ span: 24 }}
        sm={{ span: 24 }}
        md={{ span: 24 }}
        lg={{ span: 8 }}
        xl={{ span: 8 }}
        xxl={{ span: 8 }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainContruls}
          transition={{ duration: 0.75, delay: 0.25 }}
        >
          <div className="flex justify-end items-center h-full ">
            <img
              src="/sajid_hasan.png"
              alt="Sajid Hasan's Image"
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300 "
            />
          </div>
        </motion.div>
      </Col>
    </Row>
  );
};

export default HeroSection;
