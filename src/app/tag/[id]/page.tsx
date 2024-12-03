import ArticlePreviewSectionWrapper from "@/Components/ArticlePreviewSection/ArticlePreviewSectionWrapper";
import { notFound } from "next/navigation";
import styles from "@/app/page.module.scss";
import CategoriesBar from "@/Components/CategoriesBar/CategoriesBar";
import PopularTagsWrapper from "@/Components/PopularTags/PopularTagsWrapper";
import { CategoriesType } from "@/lib/types/categories";
import { GetCategories } from "@/lib/api/getCategory";
import { GetTags } from "@/lib/api/getTags";
import { TagType } from "@/lib/types/tags";
import { ParamsType } from "@/lib/types/paramsType";

const DisplayPostsByTags = async ({ params }: ParamsType) => {
  const tags = await GetTags();
  const id = (await params).id;

  if (!tags.some((tag: TagType) => tag.slug === id)) {
    notFound();
  }
  const categories: CategoriesType = await GetCategories();

  return (
    <div className={styles.contentWrapper}>
      <CategoriesBar categories={categories} />
      <div className={styles.page}>
        <ArticlePreviewSectionWrapper category="" tag={id} />
        <PopularTagsWrapper />
      </div>
    </div>
  );
};

export default DisplayPostsByTags;
