import ArticleCard from "@/Components/ArticleCard/ArticleCard";
import styles from "@/Components/ArticlePreviewSection/ArticlePreviewSection.module.scss";
import { fetchPosts } from "@/lib/api/postsFetcher";

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

const ArticlePreviewSection = async ({
  category,
  tag,
}: {
  category: string;
  tag: string;
}) => {
  const articlesData = await fetchPosts(category, tag);
  return (
    <div className={styles.articleGridContainer}>
      <ul className={styles.articleList}>
        {articlesData ? (
          articlesData.map((articleData: ArticleCardPropsType) => (
            <ArticleCard key={articleData.id} postData={articleData} />
          ))
        ) : (
          <span>Loading Articles...</span>
        )}
      </ul>
    </div>
  );
};

export default ArticlePreviewSection;
