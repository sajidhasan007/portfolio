import { Col, Row } from "antd";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FC } from "react";
import { AddAnimation } from "../components";
import Image from "next/image";
export type IExperienceCard = {
  companyTitle: string;
  designation: string;
  techStack: string[];
  description: string;
  location: string;
  startYear: string;
  endYear?: string;
};
const ExperienceCard: FC<IExperienceCard> = ({
  companyTitle,
  designation,
  techStack,
  description,
  location,
  startYear,
  endYear,
}) => {
  return (
    <div className="border-b-2 border-[#383838] pb-4">
      <AddAnimation>
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold ">{companyTitle}</h1>
          <div className="flex items-center font-semibold text-base">
            <p>{startYear}</p> - <p>{endYear}</p>
          </div>
        </div>
      </AddAnimation>

      <AddAnimation>
        <div className="flex justify-between items-center my-4">
          <h1 className="text-lg font-bold text-primary">{designation}</h1>
          <div className="flex items-center font-semibold text-base">
            <p>{location}</p>
          </div>
        </div>
      </AddAnimation>

      <AddAnimation>
        <div className="text-base ">{description}</div>
      </AddAnimation>
      <div>
        <AddAnimation>
          <div className="flex gap-2 flex-wrap my-4">
            {techStack.map((item: string) => (
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
  );
};

export default ExperienceCard;
