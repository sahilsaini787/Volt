import styles from "./page.module.scss";
import ArticleGrid from "@/Components/ArticleGrid/ArticleGrid";

export default async function Home() {
  return (
    <div className={styles.page}>
      <ArticleGrid />
    </div>
  );
}
