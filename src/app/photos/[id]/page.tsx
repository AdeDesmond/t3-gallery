import FullPageImageView from "~/app/components/full-image-page";

interface PhotoPageProps {
  params: {
    id: string;
  };
}

export default function PhotoPage({ params }: PhotoPageProps) {
  return (
    <div className="h-full">
      <FullPageImageView photoId={parseInt(params.id)} />
    </div>
  );
}
