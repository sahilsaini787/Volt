import { notFound } from "next/navigation";
import { CategoriesType, CategoryType } from "@/lib/types/categories";
import { GetCategories } from "@/lib/api/getCategory";
import ArticlePreviewSectionWrapper from "@/Components/ArticlePreviewSection/ArticlePreviewSectionWrapper";
import { ParamsType } from "@/lib/types/paramsType";

const DisplayPostsByCategory = async ({ params }: ParamsType) => {
  const categories: CategoriesType = await GetCategories();
  const id = (await params).id;
  if (!categories.some((category: CategoryType) => category.slug === id)) {
    notFound();
  }
  return <ArticlePreviewSectionWrapper category={id} tag="" />;
};

export default DisplayPostsByCategory;
