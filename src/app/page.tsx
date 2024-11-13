import PopularTags from "@/Components/PopularTags/PopularTags";
import styles from "./page.module.scss";
import ArticleGrid from "@/Components/ArticleGrid/ArticleGrid";

async function fetchTags() {
  const apiURL = process.env.GRAPHQL_API_URL;
  if (!apiURL) {
    throw new Error("GRAPHQL_API_URL is not defined.");
  }

  try {
    const response = await fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query getTags {
            tags(where: {orderby: COUNT, order: DESC}, first: 10) {
              nodes {
                name
                id
                slug
                count
              }
            }
          }`,
      }),
      cache: "no-store",
    });

    const { data } = await response.json();
    return data.tags.nodes;
  } catch (error) {
    console.log("FETCH ERROR: " + error);
  }
}

export default async function Home() {
  const tags = await fetchTags();

  return (
    <div className={styles.page}>
      <ArticleGrid />
      <PopularTags tags={tags} />
    </div>
  );
}
