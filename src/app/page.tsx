import Image from "next/image";
import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/de90b2cb-0fbc-41ec-af1b-a54327558723-245n.png",
  "https://utfs.io/f/3ec5294d-9fed-438c-83cf-0eea97a73f13-pgh5fl.jpg",
  "https://utfs.io/f/10852a41-db18-49a9-90f5-0d3bd9581135-1z743.jpg",
  "https://utfs.io/f/5ceeb73e-7b1d-44af-96b6-0a8d83128fd9-1z748.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className=" w-48">
            <Image src={image.url} alt="image" width={300} height={60} />
          </div>
        ))}
      </div>
    </main>
  );
}
