import { db } from "@/lib/db";

export const getUserProfile = async (userId: object) => {
  console.log("-----", userId);

  let profile = await db.profile.findUnique({
    where: {
      id: userId.userId,
    },
  });

  if (!profile) {
    console.log("no user profile");
  }

  return profile;
};
