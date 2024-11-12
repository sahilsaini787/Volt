import Link from "next/link";
import styles from "@/Components/CategoriesBar/CategoriesBar.module.scss";

import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "@/graphql/queries/getCategories";

const CategoriesBar = () => {
  //   const { data, loading, error } = useQuery(GET_CATEGORIES);

  return (
    <div className={styles.categoreisBarContainer}>
      <ul className={styles.categoriesBarList}>
        {/* {data?.categories.nodes.map((category: any) => (
          <li key={category.id}>
            <Link href={category.link}>{category.name}</Link>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default CategoriesBar;
