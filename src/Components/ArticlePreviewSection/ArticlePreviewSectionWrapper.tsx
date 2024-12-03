import { GetPosts } from "@/lib/api/getPosts";
import ArticlePreviewSection from "./ArticlePreviewSection";

export default async function ArticlePreviewSectionWrapper({
  category,
  tag,
}: {
  category: string;
  tag: string;
}) {
  const postsData = await GetPosts(category, tag);
  return <ArticlePreviewSection posts={postsData} />;
}
