import styles from "./page.module.css";
import Navbar from "@/Components/Navbar/Navbar";
import ArticleGrid from "@/Components/ArticleGrid/ArticleGrid";
import CategoriesBar from "@/Components/CategoriesBar/CategoriesBar";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <CategoriesBar />
      <ArticleGrid />
    </div>
  );
}
