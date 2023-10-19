import { Input } from "@/components/ui/input";

import { BiSearch } from "react-icons/bi";
import ChatChannelsModal from "./chat-channels-modal";
import { Fragment } from "react";
import { Channel, Profile } from "@prisma/client";
import { ProfileInit } from "@/lib/profile-init";

type ChannelWithProfile = Channel & {
  channel: Channel & {
    profile: Profile;
  };
};
interface LeftModelProps {
  channels: ChannelWithProfile[];
  params: string;
}

const LeftModal = async ({ channels, params }: LeftModelProps) => {
  console.log("channels", channels);
  const profile = await ProfileInit();

  return (
    <div className="bg-gray-200 h-screen">
      <div className=" p-4 pt-6">
        <BiSearch className="relative top-7 left-3" />
        <Input type="text" placeholder="Search" className="indent-4" />
      </div>
      <div>
        {channels?.map((channel, i) => (
          <Fragment key={i}>
            <ChatChannelsModal
              userId={
                channel.userOneId !== profile.id
                  ? channel.userOneId
                  : channel.userTwoId
              }
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default LeftModal;
