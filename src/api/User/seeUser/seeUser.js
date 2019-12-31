import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeUser: (_, args, { reqeust }) => {
      const { id } = args;
      return prisma.user({ id });
    },
  },
};
