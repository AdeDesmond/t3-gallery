import { Modal } from "./modal";
import FullPageImageView from "~/app/components/full-image-page";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <Modal>
      <FullPageImageView photoId={parseInt(photoId)} />
    </Modal>
  );
}
