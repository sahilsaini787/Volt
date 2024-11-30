"use client";

import ArticleCard from "@/Components/ArticleCard/ArticleCard";
import styles from "@/Components/ArticlePreviewSection/ArticlePreviewSection.module.scss";
import { useUserContext } from "@/context/UserPrefsContext";

export type ArticleCardPropsType = {
  featuredImage: {
    node: {
      altText: string;
      mediaItemUrl: string;
      mediaDetails: {
        sizes: Array<{
          sourceUrl: string;
          height: number;
          width: number;
        }>;
      };
    };
  };
  id: string;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  tags: {
    nodes: Array<{ name: string }>;
  };
  author: {
    node: {
      firstName: string;
      lastName: string;
      slug: string;
    };
  };
  date: string;
  modified: string;
  categories: {
    nodes: Array<{ name: string }>;
  };
};

const ArticlePreviewSection = ({
  articlesData,
}: {
  articlesData: ArticleCardPropsType[];
}) => {
  const { layoutStyle } = useUserContext();

  return (
    <div className={styles.articleContainer}>
      <ul
        className={`${layoutStyle === "grid" ? styles.articleGrid : styles.articleList}`}
      >
        {articlesData ? (
          articlesData.map((articleData: ArticleCardPropsType) => (
            <ArticleCard
              key={articleData.id}
              postData={articleData}
              layoutStyle={layoutStyle}
            />
          ))
        ) : (
          <span>Loading Articles...</span>
        )}
      </ul>
    </div>
  );
};

export default ArticlePreviewSection;
