import { notFound } from "next/navigation";
import styles from "@/app/page.module.scss";
import CategoriesBar from "@/Components/CategoriesBar/CategoriesBar";
import PopularTagsWrapper from "@/Components/PopularTags/PopularTagsWrapper";
import { fetchArticle } from "@/lib/api/articleFetcher";
import ArticlePage from "@/Components/ArticlePage/ArticlePage";
import { CategoriesType } from "@/lib/types/categories";
import { fetchCategories } from "@/lib/api/categoryFetcher";
import { articleType } from "@/lib/types/articleType";
import { ParamsType } from "@/lib/types/paramsType";

const displayArticle = async ({ params }: ParamsType) => {
  const id = (await params).id;
  const article: articleType = await fetchArticle(id);
  if (!article) {
    notFound();
  }

  const cateogries: CategoriesType = await fetchCategories();

  return (
    <div className={styles.contentWrapper}>
      <CategoriesBar categories={cateogries} />
      <div className={styles.page}>
        <ArticlePage article={article} />
        <PopularTagsWrapper />
      </div>
    </div>
  );
};

export default displayArticle;
