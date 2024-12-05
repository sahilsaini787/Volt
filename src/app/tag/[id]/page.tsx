import ArticlePreviewSectionWrapper from "@/Components/ArticlePreviewSection/ArticlePreviewSectionWrapper";
import { notFound } from "next/navigation";
import { GetTags } from "@/lib/api/getTags";
import { TagType } from "@/lib/types/tags";
import { ParamsType } from "@/lib/types/paramsType";

const DisplayPostsByTags = async ({ params }: ParamsType) => {
  const tags = await GetTags();
  const id = (await params).id;

  if (!tags.some((tag: TagType) => tag.slug === id)) {
    notFound();
  }
  return (
    <ArticlePreviewSectionWrapper
      category=""
      tag={id}
      categoryToExclude={[""]}
    />
  );
};

export default DisplayPostsByTags;
