import BlogEntry from "@/src/components/Layout/BlogEntry";

import useWorkExperienceItemPage from "../../src/hooks/useWorkExperienceItemPage";

function WorkExperienceItemPage() {
  const { status, data } = useWorkExperienceItemPage();

  return <BlogEntry status={status} data={data} title={data?.place} />;
}

export default WorkExperienceItemPage;
