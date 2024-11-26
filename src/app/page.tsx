import PopularTags from "@/Components/PopularTags/PopularTags";
import styles from "./page.module.scss";
import CategoriesBar from "@/Components/CategoriesBar/CategoriesBar";
import { fetchCategories } from "@/lib/api/categoryFetcher";
import { CategoriesType } from "@/lib/types/categories";
import ArticlePreviewSectionWrapper from "@/Components/ArticlePreviewSection/ArticlePreviewSectionWrapper";

export default async function Home() {
  const categories: CategoriesType = await fetchCategories();

  return (
    <div className={styles.contentWrapper}>
      <CategoriesBar categories={categories} />
      <div className={styles.page}>
        <ArticlePreviewSectionWrapper category="" tag="" />
        <PopularTags />
      </div>
    </div>
  );
}
