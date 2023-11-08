import { Col, Row } from "antd";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FC } from "react";
import { AddAnimation } from "../components";
import Image from "next/image";
export type IProjectProps = {
  title: string;
  techStack: string[];
  description: string;
  imageLink: string;
  githubLink?: string;
  liveLink?: string;
};
const ProjectCard: FC<IProjectProps> = ({
  title,
  techStack,
  description,
  imageLink,
  githubLink,
  liveLink,
}) => {
  return (
    <div>
      <AddAnimation>
        <div className="bg-slate-500 w-full aspect-video p-10">
          <img src={imageLink} alt="Project image" />
        </div>
      </AddAnimation>

      <div>
        <AddAnimation>
          <h1 className="mt-4">{title}</h1>
        </AddAnimation>
        <AddAnimation>
          <div className="my-2 text-base text-primary">
            {techStack.join(" - ")}
          </div>
        </AddAnimation>

        <AddAnimation>
          <p className="text-base">
            {description}.
            <span className="text-primary  flex gap-1 items-center">
              Learn more <MdKeyboardArrowRight />
            </span>
          </p>
        </AddAnimation>
      </div>
    </div>
  );
};

export default ProjectCard;
