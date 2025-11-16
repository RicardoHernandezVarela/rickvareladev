import BlogEntry from "@/src/components/Layout/BlogEntry";

import useSanityData from "@/src/hooks/useSanityData";

function BootCampProjectPage() {
  const { data, status } = useSanityData({
    dataItem: "bootcamp-project",
  });

  return <BlogEntry status={status} data={data?.[0] || {}} />;
}

export default BootCampProjectPage;
