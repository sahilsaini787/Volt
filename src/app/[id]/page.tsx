import ArticlePreviewSection from "@/Components/ArticlePreviewSection/ArticlePreviewSection";
import { notFound } from "next/navigation";
import styles from "@/app/page.module.scss";
import CategoriesBar from "@/Components/CategoriesBar/CategoriesBar";
import PopularTags from "@/Components/PopularTags/PopularTags";
import { CategoriesType } from "@/lib/types/categories";
import { fetchCategories } from "@/lib/api/categoryFetcher";

type ParamsType = {
  params: Promise<{ id: string }>;
};

const DisplayPostsByCategory = async ({ params }: ParamsType) => {
  const id: string = (await params).id;
  if (!id) {
    notFound();
  }
  let categories: CategoriesType;
  categories = await fetchCategories();

  switch (id) {
    case "":
      return (
        <div className={styles.contentWrapper}>
          <CategoriesBar categories={categories} />
          <div className={styles.page}>
            <ArticlePreviewSection category={id} tag="" />
            <PopularTags />
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
          {/* <CategoriesBar categories={categories} /> */}
          <div className={styles.page}>This is Learn Section</div>
        </div>
      );
  }
};

export default DisplayPostsByCategory;
