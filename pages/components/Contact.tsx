import { HiOutlineMail } from "react-icons/hi";
const Contact = () => {
  return (
    <div className="flex justify-center">
      <div className="text-center">
        <h1 className="text-[70px] font-black">Contact</h1>
        <p className="text-base">
          Shoot me an email if you want to connect! You can also find me on
          Linkedin or Twitter if that is more your speed.
        </p>
        <div className="flex items-center justify-center gap-2 text-center">
          <HiOutlineMail />
          {/* <a  onClick={() => window.location = 'mailto:yourmail@domain.com'}> >
            sajid.hasan.cit@gmail.com
          </a> */}

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
      </div>
    </div>
  );
};

export default Contact;
