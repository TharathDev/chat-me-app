"use client";

import { UserButton } from "@clerk/nextjs";
import { BiSolidMessageDetail } from "react-icons/bi";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { FaSignOutAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
const MenuModal = () => {
  const pathname = usePathname();
  const menuLink = [
    {
      name: "Message",
      link: "/message",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Setting",
      link: "/setting",
    },
    {
      name: "Sign Out",
      link: "/message",
    },
  ];
  return (
    <div className="bg-indigo-400 text-white h-screen fixed w-[14.5%] pt-6">
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
      <Link href={"/"}>
        <div
          className={`
            flex w-full h-16 hover:bg-indigo-500 items-center ${
              pathname === "/" ? "bg-indigo-500" : ""
            }
          `}
        >
          <BiSolidMessageDetail className="w-5 h-5 ml-8" />
          <p className="ml-2">Message</p>
        </div>
      </Link>

      <Link
        href={"/contact"}
        className={`
            flex w-full h-16 hover:bg-indigo-500 items-center ${
              pathname === "/contact" ? "bg-indigo-500" : ""
            }
          `}
      >
        <div className="flex w-full h-16 hover:bg-indigo-500 items-center">
          <BsFillPersonVcardFill className="w-5 h-5 ml-8" />
          <p className="ml-2">Contact</p>
        </div>
      </Link>

      <Link href={"/setting"} className="">
        <div
          className={`
            flex w-full h-16 hover:bg-indigo-500 items-center ${
              pathname === "/setting" ? "bg-indigo-500" : ""
            }
          `}
        >
          <AiFillSetting className="w-5 h-5 ml-8" />
          <p className="ml-2">Setting</p>
        </div>
      </Link>
      <div className="flex w-full h-16 hover:bg-indigo-500 items-center">
        <FaSignOutAlt className="w-5 h-5 ml-8" />
        <p className="ml-2">Sign Out</p>
      </div>
      {menuLink.map(({ link, name }) => (
        <Link key={name} href={link} className=""></Link>
      ))}
    </div>
  );
};

export default MenuModal;
