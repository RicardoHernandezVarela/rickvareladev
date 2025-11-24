import BlogEntry from "@/src/components/Layout/BlogEntry";

import useAlbumReview from "@/src/hooks/useAlbumReview";

function AlbumReviewPage() {
  const { status, review } = useAlbumReview();

  return <BlogEntry status={status} data={review} />;
}

export default AlbumReviewPage;
