import { Col, Row } from "antd";
import { FC } from "react";
import { AddAnimation } from "../components";

type ITitleOrder = {
  title: string;
  isReverse?: boolean;
  firstColumn?: number;
};

const TitleComponent: FC<ITitleOrder> = ({
  isReverse = false,
  title,
  firstColumn = 3,
}) => {
  return (
    <AddAnimation>
      <Row>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: firstColumn }}
          order={isReverse ? 1 : 0}
        >
          <div className="title-style">
            {title}
            <span className="dot">.</span>
          </div>
        </Col>
        <Col
          className="w-full flex justify-center items-center"
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 24 - firstColumn }}
          order={isReverse ? 0 : 1}
        >
          <div className={`bg-white h-[1px] w-full mt-4 ml-4`}></div>
        </Col>
      </Row>
    </AddAnimation>
  );
};

export default TitleComponent;
