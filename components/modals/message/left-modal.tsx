import { Input } from "@/components/ui/input";

import { BiSearch } from "react-icons/bi";
import ChatChannelsModal from "./chat-channels-modal";
import { Fragment } from "react";
const LeftModal = () => {
  const data = [
    {
      userid: 1,
      message: "Hello",
      username: "admin",
      createdAt: "2022-22-22",
    },
    {
      userid: 2,
      message: "Hello",
      username: "admin",
      createdAt: "2022-22-22",
    },
    {
      userid: 3,
      message: "Hello",
      username: "admin",
      createdAt: "2022-22-22",
    },
  ];
  return (
    <div className="bg-gray-200 h-screen">
      <div className=" p-4 pt-6">
        <BiSearch className="relative top-7 left-3" />
        <Input type="text" placeholder="Search" className="indent-4" />
      </div>
      <div>
        {data?.map((group, i) => (
          <Fragment key={i}>
            <ChatChannelsModal />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default LeftModal;
