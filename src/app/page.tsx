import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";
export const dynamic = "force-dynamic";

/* 
course := https://youtu.be/d5x0JCZbAJs?list=PLL9Qm1L9sfSOIuxdd562eeAUYmtSvEEzU

timestamp := 1:31mins:42secs



*/

async function Images() {
  const posts = await getMyImages();
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {posts.map((image) => (
        <div key={image.id} className=" flex w-48 flex-col">
          <Link href={`/photos/${image.id}`}>
            <Image
              src={image.url}
              alt="image"
              style={{ objectFit: "contain" }}
              width={480}
              height={480}
            />
          </Link>
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">Please sign in</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
