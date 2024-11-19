import PopularTags from "@/Components/PopularTags/PopularTags";
import styles from "./page.module.scss";
import ArticlePreviewSection from "@/Components/ArticlePreviewSection/ArticlePreviewSection";
import CategoriesBar from "@/Components/CategoriesBar/CategoriesBar";
import { fetchCategories } from "@/lib/api/categoryFetcher";
import { CategoriesType } from "@/lib/types/categories";

export default async function Home() {
  const categories: CategoriesType = await fetchCategories();

  return (
    <div className={styles.contentWrapper}>
      <CategoriesBar categories={categories} />
      <div className={styles.page}>
        <ArticlePreviewSection category="" tag="" />
        <PopularTags />
      </div>
    </div>
  );
}
