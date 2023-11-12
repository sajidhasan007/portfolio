import React, { FC } from "react";
import { IProjectProps } from "./ProjectCard";
import Link from "next/link";
import { LuArrowRightFromLine } from "react-icons/lu";

const ProjectDetails: FC<IProjectProps> = ({
  title,
  techStack,
  description,
  imageLink,
  githubLink,
  liveLink,
}) => {
  return (
    <div>
      <div className="text-white">
        <img
          src={imageLink}
          alt="Project Image"
          className="shadow-2xl border border-white"
        />
        <div className="mt-5">
          <h1 className="text-xl font-bold">{title}</h1>
          <div className="my-2 text-base text-primary">
            {techStack.join(" - ")}
          </div>
          <p>{description}</p>
          <div className="mt-5">
            <h2 className="text-lg font-bold">Project Links</h2>
            <div className=" text-primary mt-2">
              {liveLink && (
                <Link
                  target="_blank"
                  href={(liveLink as string) && (liveLink as string)}
                  className="flex items-center gap-2"
                >
                  <LuArrowRightFromLine />
                  liveLink
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
