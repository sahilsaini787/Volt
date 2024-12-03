import { notFound } from "next/navigation";
import styles from "@/app/page.module.scss";
import CategoriesBar from "@/Components/CategoriesBar/CategoriesBar";
import PopularTagsWrapper from "@/Components/PopularTags/PopularTagsWrapper";
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
  return (
    <div className={styles.contentWrapper}>
      <CategoriesBar categories={categories} />
      <div className={styles.page}>
        <ArticlePreviewSectionWrapper category={id} tag="" />
        <PopularTagsWrapper />
      </div>
    </div>
  );
};

export default DisplayPostsByCategory;
