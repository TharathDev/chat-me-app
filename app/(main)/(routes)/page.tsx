import InitialModal from "@/components/modals/initial-modal";
import { db } from "@/lib/db";
import { ProfileInit } from "@/lib/profile-init";

const HomePage = async () => {
  const profile = await ProfileInit();

  const inboxes = await db.inbox.findFirst({
    where: {
      participants: {
        some: {
          id: profile.id,
        },
      },
    },
  });
  if (!inboxes) {
    console.log("Inbox", inboxes);
  }
  return (
    <div>
      <InitialModal />
    </div>
  );
};

export default HomePage;
