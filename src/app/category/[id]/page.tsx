import { notFound } from "next/navigation";
import styles from "@/app/page.module.scss";
import CategoriesBar from "@/Components/CategoriesBar/CategoriesBar";
import PopularTagsWrapper from "@/Components/PopularTags/PopularTagsWrapper";
import { CategoriesType } from "@/lib/types/categories";
import { fetchCategories } from "@/lib/api/categoryFetcher";
import ArticlePreviewSectionWrapper from "@/Components/ArticlePreviewSection/ArticlePreviewSectionWrapper";

type ParamsType = {
  params: Promise<{ id: string }>;
};

const DisplayPostsByCategory = async ({ params }: ParamsType) => {
  const id = (await params).id;
  if (!id) {
    notFound();
  }

  const categories: CategoriesType = await fetchCategories();

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
