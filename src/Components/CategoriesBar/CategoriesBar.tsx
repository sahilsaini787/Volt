import Link from "next/link";
import styles from "@/Components/CategoriesBar/CategoriesBar.module.scss";
import { CategoriesType, CategoryType } from "@/lib/types/categories";
import { fetchCategories } from "@/lib/api/categoryFetcher";

const CategoriesBar = async () => {
  const categories: CategoriesType = await fetchCategories();

  return (
    <div className={styles.categoreisBarContainer}>
      <ul className={styles.categoriesBarList}>
        {!categories ? (
          <div>Loading...</div>
        ) : (
          categories.map((category: CategoryType) =>
            category.name !== "Uncategorized" ? (
              <li key={category.id} className={styles.categoriesListItem}>
                <Link
                  href={`/category/${category.slug}`}
                  className={styles.categoriesListItemLink}
                >
                  {category.name}
                </Link>
              </li>
            ) : null
          )
        )}
      </ul>
    </div>
  );
};

export default CategoriesBar;
