import { notFound } from "next/navigation";
import styles from "@/app/page.module.scss";
import CategoriesBar from "@/Components/CategoriesBar/CategoriesBar";
import PopularTags from "@/Components/PopularTags/PopularTags";
import { fetchArticle } from "@/lib/api/articleFetcher";
import ArticlePage from "@/Components/ArticlePage/ArticlePage";
import { CategoriesType } from "@/lib/types/categories";
import { fetchCategories } from "@/lib/api/categoryFetcher";
import { articleType } from "@/lib/types/articleType";

type ParamsType = {
  params: Promise<{ id: string }>;
};

const displayArticle = async ({ params }: ParamsType) => {
  const id = (await params).id;
  if (!id) {
    notFound();
  }
  const article: articleType = await fetchArticle(id);
  const cateogries: CategoriesType = await fetchCategories();
  return (
    <div className={styles.contentWrapper}>
      <CategoriesBar categories={cateogries} />
      <div className={styles.page}>
        <ArticlePage article={article} />
        <PopularTags />
      </div>
    </div>
  );
};

export default displayArticle;
