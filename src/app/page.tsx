import styles from "./page.module.css";
import Navbar from "@/Components/Navbar/Navbar";
import ArticleGrid from "@/Components/ArticleGrid/ArticleGrid";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <ArticleGrid />
    </div>
  );
}
