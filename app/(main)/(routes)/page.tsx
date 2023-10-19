import CenterModal from "@/components/modals/message/center-modal";
import LeftModal from "@/components/modals/message/left-modal";
import { db } from "@/lib/db";
import { ProfileInit } from "@/lib/profile-init";

const HomePage = async () => {
  const profile = await ProfileInit();

  const channels = await db.channel.findMany({
    where: {
      OR: [{ userOneId: profile.id }, { userTwoId: profile.id }],
    },
  });
  if (channels) {
    console.log("Inbox", channels);
  } else {
    console.log("errrors", channels);
  }
  return (
    <div>
      <div className="grid grid-cols-7">
        <div className="col-start-2 col-span-2">
          <LeftModal channels={channels} />
        </div>
        <div className="col-end-8 col-span-4">
          <CenterModal />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
