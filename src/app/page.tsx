import PopularTags from "@/Components/PopularTags/PopularTags";
import styles from "./page.module.scss";
import ArticlePreviewSection from "@/Components/ArticlePreviewSection/ArticlePreviewSection";
import CategoriesBar from "@/Components/CategoriesBar/CategoriesBar";

export default async function Home() {
  return (
    <div className={styles.contentWrapper}>
      <CategoriesBar />
      <div className={styles.page}>
        <ArticlePreviewSection category="" tag="" />
        <PopularTags />
      </div>
    </div>
  );
}
