import { Col, Modal, Row } from "antd";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FC, useState } from "react";
import { AddAnimation } from "../components";
import Image from "next/image";
import ProjectDetails from "./ProjectDetails";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  console.log("my live link is = ", liveLink);

  return (
    <div>
      <AddAnimation>
        <div className="bg-slate-500 w-full h-72 p-6">
          <img src={imageLink} alt="Project image" />
        </div>
      </AddAnimation>

      <div>
        <AddAnimation>
          <h1 className="mt-4 text-xl font-bold">{title}</h1>
        </AddAnimation>
        <AddAnimation>
          <div className="my-2 text-base text-primary">
            {techStack.join(" - ")}
          </div>
        </AddAnimation>

        <AddAnimation>
          <div>
            <p className="text-base line-clamp-2">{description}</p>
            <span
              onClick={showModal}
              className="text-primary flex gap-1 items-center text-base cursor-pointer"
            >
              Learn more <MdKeyboardArrowRight />
            </span>
          </div>
        </AddAnimation>
      </div>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <ProjectDetails
          title={title}
          description={description}
          techStack={techStack}
          imageLink={imageLink}
          liveLink={liveLink}
        />
      </Modal>
    </div>
  );
};

export default ProjectCard;
