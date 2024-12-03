"use client";

import ArticleCard from "@/Components/ArticleCard/ArticleCard";
import styles from "@/Components/ArticlePreviewSection/ArticlePreviewSection.module.scss";
import { useUserContext } from "@/context/UserPrefsContext";
import { PostType } from "@/lib/types/postsType";

const ArticlePreviewSection = ({ posts }: { posts: PostType[] }) => {
  const { layoutStyle } = useUserContext();

  return (
    <div className={styles.articleContainer}>
      <ul
        className={`${layoutStyle === "grid" ? styles.articleGrid : styles.articleList}`}
      >
        {posts ? (
          posts.map((postData: PostType) =>
            postData.categories.nodes[0].name !== "Learning" ? (
              <ArticleCard
                key={postData.id}
                postData={postData}
                layoutStyle={layoutStyle}
              />
            ) : null
          )
        ) : (
          <span>Loading Articles...</span>
        )}
      </ul>
    </div>
  );
};

export default ArticlePreviewSection;
