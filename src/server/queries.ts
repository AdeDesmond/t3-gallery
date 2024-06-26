import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export async function getMyImages() {
  const user = auth();
  if (!user.userId) throw new Error("Unathorized");
  return db.query.posts.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });
}

export async function getImage(id: number) {
  const user = auth();
  if (!user.userId) throw new Error("unAthorised");
  const image = await db.query.posts.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  if (!image) throw new Error("Image not found");
  if (image.userId !== user.userId) throw new Error("unauthorised");

  return image;
}
