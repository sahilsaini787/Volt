import ArticleGrid from "@/Components/ArticleGrid/ArticleGrid";
import { notFound } from "next/navigation";

type ParamsType = {
  params: Promise<{ id: string }>;
};

const page = async ({ params }: ParamsType) => {
  const id = (await params).id;
  if (!id) {
    notFound();
  }
  return <ArticleGrid />;
};

export default page;
