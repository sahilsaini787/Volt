import { notFound } from "next/navigation";
import styles from "@/app/page.module.scss";
import CategoriesBar from "@/Components/CategoriesBar/CategoriesBar";
import PopularTagsWrapper from "@/Components/PopularTags/PopularTagsWrapper";
import { GetArticle } from "@/lib/api/getArticle";
import ArticlePage from "@/Components/ArticlePage/ArticlePage";
import { CategoriesType } from "@/lib/types/categories";
import { GetCategories } from "@/lib/api/getCategory";
import { articlePageType } from "@/lib/types/articlePageType";
import { ParamsType } from "@/lib/types/paramsType";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: ParamsType): Promise<Metadata> {
  const id = (await params).id;
  const articlePage: articlePageType = await GetArticle(id);

  if (!articlePage) {
    return {};
  }

  const ogImageUrl = `/api/opengraph/article/${id}`;
  const siteUrl = process.env.SITE_URL || "";

  return {
    metadataBase: new URL(siteUrl), // Set metadataBase
    title: articlePage.title || "Untitled Article",
    description: "Stay up to date with the latest news.",
    openGraph: {
      title: articlePage.title || "",
      description: `Stay up to date with the latest news.`,
      images: [
        {
          url: ogImageUrl,
          width: 640,
          height: 320,
          alt: articlePage.featuredImage.node.altText || "Article Image",
        },
      ],
    },
  };
}

const displayArticle = async ({ params }: ParamsType) => {
  const id = (await params).id;
  const articlePage: articlePageType = await GetArticle(id);
  if (!articlePage) {
    notFound();
  }

  const categories: CategoriesType = await GetCategories();

  return (
    <div className={styles.contentWrapper}>
      <CategoriesBar categories={categories} />
      <div className={styles.page}>
        <ArticlePage articlePage={articlePage} />
        <PopularTagsWrapper />
      </div>
    </div>
  );
};

export default displayArticle;
