import styles from "@/app/page.module.scss";
import CategoriesBar from "@/Components/CategoriesBar/CategoriesBar";
import PopularTagsWrapper from "@/Components/PopularTags/PopularTagsWrapper";
import { CategoriesType } from "@/lib/types/categories";
import { GetCategories } from "@/lib/api/getCategory";
import ArticlePreviewSectionWrapper from "@/Components/ArticlePreviewSection/ArticlePreviewSectionWrapper";
import { notFound } from "next/navigation";
import { ParamsType } from "@/lib/types/paramsType";

const DisplayPosts = async ({ params }: ParamsType) => {
  const categories: CategoriesType = await GetCategories();
  const id = (await params).id;
  switch (id) {
    case "":
      return (
        <div className={styles.contentWrapper}>
          <CategoriesBar categories={categories} />
          <div className={styles.page}>
            <ArticlePreviewSectionWrapper
              category=""
              tag=""
              categoryToExclude={["Learning"]}
            />
            <PopularTagsWrapper />
          </div>
        </div>
      );
    case "tools":
      return (
        <div className={styles.contentWrapper}>
          <div className={styles.page}>This is Tools Section</div>
        </div>
      );
    case "learn":
      return (
        <div className={styles.contentWrapper}>
          <div className={styles.page}>
            <ArticlePreviewSectionWrapper
              category="Learning"
              tag=""
              categoryToExclude={[""]}
            />
          </div>
        </div>
      );
    default:
      notFound();
  }
};

export default DisplayPosts;
