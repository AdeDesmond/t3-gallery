import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const image = await getImage(parseInt(photoId));
  return <img src={image.url} alt="image" className="w-96" />;
}
