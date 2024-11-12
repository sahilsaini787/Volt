import styles from "./page.module.css";
import Navbar from "@/Components/Navbar/Navbar";
import ArticleGrid from "@/Components/ArticleGrid/ArticleGrid";
import CategoriesBar from "@/Components/CategoriesBar/CategoriesBar";

import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apolloClient";

export default function Home() {
  return (
    // <ApolloProvider client={client}>
    <div className={styles.page}>
      <Navbar />
      <CategoriesBar />
      <ArticleGrid />
    </div>
    // </ApolloProvider>
  );
}
