import { prisma } from "@/lib/prisma";

interface createPostProps {
  title: string;
  content: string;
  userId: string;
}
export const createPost = async ({
  title,
  content,
  userId,
}: createPostProps) => {
  if (!userId) {
    throw new Error("ID de usuário inválido");
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new Error("Usuário não encontrado no banco de dados");
  }

  const post = await prisma.post.create({
    data: {
      title: title,
      content: content,
      userId: userId,
    },
  });
  return post;
};
