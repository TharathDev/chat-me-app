import { Button } from "@/components/ui/button";
import Image from "next/image";

import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

const ChatBodyHeader = () => {
  return (
    <div className="flex flex-row h-20 px-4 py-2 fixed w-10/12 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300">
      <div>
        <Image
          src="/animoji-avatars/Number=1.png"
          width={64}
          height={64}
          style={{ borderRadius: "50%" }}
          className="mx-3"
          alt="Picture of the author"
        />
      </div>
      <div className="flex items-center justify-between w-3/5 my-1 px-1">
        <p>name</p>
        <Button variant="ghost" size="icon">
          <PiDotsThreeOutlineVerticalFill className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ChatBodyHeader;
