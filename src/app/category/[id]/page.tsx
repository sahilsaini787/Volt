import ArticlePreviewSection from "@/Components/ArticlePreviewSection/ArticlePreviewSection";
import { notFound } from "next/navigation";
import styles from "@/app/page.module.scss";
import CategoriesBar from "@/Components/CategoriesBar/CategoriesBar";
import PopularTags from "@/Components/PopularTags/PopularTags";

type ParamsType = {
  params: Promise<{ id: string }>;
};

const DisplayPostsByCategory = async ({ params }: ParamsType) => {
  const id = (await params).id;
  if (!id) {
    notFound();
  }

  return (
    <div className={styles.contentWrapper}>
      <CategoriesBar />
      <div className={styles.page}>
        <ArticlePreviewSection category={id} tag="" />
        <PopularTags />
      </div>
    </div>
  );
};

export default DisplayPostsByCategory;
