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
        <div className="flex items-center gap-2">
          <HiOutlineMail />
          <p className="font-bold text-xl">sajid.hasan.cit@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
