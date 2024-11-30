import { fetchTags } from "@/lib/api/tagsFetcher";
import PopularTags from "./PopularTags";
import { TagsType } from "@/lib/types/tags";

export default async function PopularTagsWrapper() {
  const tags: TagsType = await fetchTags();

  return <PopularTags tags={tags} />;
}
