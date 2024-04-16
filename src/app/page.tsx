import Image from "next/image";
import { db } from "~/server/db";
export const dynamic = "force-dynamic";

//38 mins

export default async function HomePage() {
  const posts = await db.query.posts.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...posts, ...posts, ...posts].map((image, index) => (
          <div key={image.id + " " + index} className=" flex w-48 flex-col">
            <Image src={image.url} alt="image" width={300} height={60} />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
