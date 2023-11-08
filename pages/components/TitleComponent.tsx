import { Col, Row } from "antd";
import { FC } from "react";

type ITitleOrder = {
  isReverse?: boolean;
};

const TitleComponent: FC<ITitleOrder> = ({ isReverse = false }) => {
  return (
    <Row>
      <Col
        xs={{ span: 24 }}
        sm={{ span: 24 }}
        md={{ span: 24 }}
        lg={{ span: 3 }}
        order={isReverse ? 1 : 0}
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
        order={isReverse ? 0 : 1}
      >
        <div className={`bg-white h-[1px] w-full mt-4 ml-4`}></div>
      </Col>
    </Row>
  );
};

export default TitleComponent;
