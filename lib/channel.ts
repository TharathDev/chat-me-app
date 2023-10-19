import { db } from "@/lib/db";

export const getOrCreateChannel = async (userOneId: string, userTwoId: string) => {
  let channel = await findChannel(userOneId, userTwoId) || await findChannel(userTwoId, userOneId);

  if (!channel) {
    channel = await createNewChannel(userOneId, userTwoId);
  }

  return channel;
}

const findChannel = async (userOneId: string, userTwoId: string) => {
  try {
    return await db.channel.findFirst({
      where: {
        AND: [
          { userOneId: userOneId },
          { userTwoId: userTwoId },
        ]
      },
      include: {
        userOne: {
          include: {
            profile: true,
          }
        },
        userTwo: {
          include: {
            profile: true,
          }
        }
      }
    });
  } catch {
    return null;
  }
}

const createNewChannel = async (userOneId: string, userTwoId: string) => {
  try {
    return await db.channel.create({
      data: {
        userOneId,
        userTwoId,
      },
      include: {
        userOne: {
          include: {
            profile: true,
          }
        },
        userTwo: {
          include: {
            profile: true,
          }
        }
      }
    })
  } catch {
    return null;
  }
}