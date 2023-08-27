import { UserButton } from "@clerk/nextjs";
import { BiSolidMessageDetail } from "react-icons/bi";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { FaSignOutAlt } from "react-icons/fa";
const MenuModal = () => {
  return (
    <div className="bg-indigo-400 text-white h-screen w-full pt-6">
      <div>
        <UserButton
          showName
          appearance={{
            elements: {
              userButtonBox: "flex flex-row-reverse h-16 mb-6 ml-8",
              userButtonOuterIdentifier: "text-white",
            },
          }}
        />
      </div>
      <div className="flex w-full h-16 hover:bg-indigo-500 items-center">
        <BiSolidMessageDetail className="w-5 h-5 ml-8" />
        <p className="ml-2">Message</p>
      </div>
      <div className="flex w-full h-16 hover:bg-indigo-500 items-center">
        <BsFillPersonVcardFill className="w-5 h-5 ml-8" />
        <p className="ml-2">Contact</p>
      </div>
      <div className="flex w-full h-16 hover:bg-indigo-500 items-center">
        <AiFillSetting className="w-5 h-5 ml-8" />
        <p className="ml-2">Setting</p>
      </div>
      <div className="flex w-full h-16 hover:bg-indigo-500 items-center">
        <FaSignOutAlt className="w-5 h-5 ml-8" />
        <p className="ml-2">Sign Out</p>
      </div>
    </div>
  );
};

export default MenuModal;
