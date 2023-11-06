import { FC, ReactNode, useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { title } from "process";

interface RootLayoutProps {
  children: ReactNode;
}
export const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="flex text-white ">
        <div className="bg-black w-12 h-screen fixed z-10">
          {/* <div className="vertical-div hover:border border-red-500">
            hi this is me
          </div> */}
        </div>
        <div className="w-full bg-[#232323]">
          <div className="w-full h-12 flex justify-between items-center p-4 fixed">
            <div className="flex gap-2">
              {mySocialLinks.map((item: any) => (
                <Link
                  href={item.link}
                  target="_blank"
                  className="text-2xl hover:text-primary"
                >
                  {item.icon}
                </Link>
              ))}
            </div>

            <Link href={"/CV_Sajid_Hasan.pdf"}>
              <div className="px-4 py-2 rounded-lg text-primary border border-primary hover:bg-primary hover:text-black ">
                My Resume
              </div>
            </Link>
          </div>
          <main className="main-container">{children}</main>
        </div>
      </div>
    </>
  );
};

const mySocialLinks = [
  {
    icon: <FaGithub />,
    link: "https://github.com/sajidhasan007",
  },
  {
    icon: <FaGithub />,
    link: "https://github.com/sajidhasan007",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/sajid007/",
  },
  {
    icon: <FaFacebook />,
    link: "https://www.facebook.com/sajidhasan1997/",
  },
];
