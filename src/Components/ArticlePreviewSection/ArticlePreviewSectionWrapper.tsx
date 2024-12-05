import { GetPosts } from "@/lib/api/getPosts";
import ArticlePreviewSection from "./ArticlePreviewSection";

export default async function ArticlePreviewSectionWrapper({
  category,
  tag,
  categoryToExclude,
}: {
  category: string;
  tag: string;
  categoryToExclude: string[];
}) {
  //arguments :  GetPosts(category, tag, author, categoryToExclude)
  const postsData = await GetPosts(category, tag, "", categoryToExclude);
  return <ArticlePreviewSection posts={postsData} />;
}
