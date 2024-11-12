import ArticleCard from "@/Components/ArticleCard/ArticleCard";
import styles from "@/Components/ArticleGrid/ArticleGrid.module.scss";

const ArticleGrid = () => {
  return (
    <div className={styles.articleGridContainer}>
      <ul className={styles.articleList}>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </ul>
    </div>
  );
};

export default ArticleGrid;
