import { HiOutlineMail } from "react-icons/hi";
import { AddAnimation } from ".";
const Contact = () => {
  return (
    <div className="flex justify-center mt-40">
      <div className="text-center">
        <AddAnimation>
          <h1 className="text-[70px] font-black text-center">Contact</h1>
        </AddAnimation>
        <AddAnimation>
          <p className="text-base text-center">
            Shoot me an email if you want to connect! You can also find me on
            Linkedin or Twitter if that is more your speed.
          </p>
        </AddAnimation>

        <AddAnimation>
          <div className="flex items-center justify-center gap-2 text-center">
            <HiOutlineMail />

            <p
              className="font-bold text-xl cursor-pointer"
              onClick={(e) => {
                window.location.href = "mailto:sajid.hasan.cit@gmail.com";
              }}
            >
              {" "}
              sajid.hasan.cit@gmail.com{" "}
            </p>
          </div>
        </AddAnimation>
      </div>
    </div>
  );
};

export default Contact;
