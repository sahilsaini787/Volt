import Link from "next/link";
import styles from "@/Components/CategoriesBar/CategoriesBar.module.scss";

const CategoriesBar = ({}) => {
  return (
    <div className={styles.categoreisBarContainer}>
      <ul className={styles.categoriesBarList}>
        <li className={styles.categoriesListItem}>
          <Link href="/automotive" className={styles.categoriesListItemLink}>
            Automotive
          </Link>
        </li>
        <li className={styles.categoriesListItem}>
          <Link href="/electronics" className={styles.categoriesListItemLink}>
            Electronics
          </Link>
        </li>
        <li className={styles.categoriesListItem}>
          <Link href="/gadgets" className={styles.categoriesListItemLink}>
            Gadgets
          </Link>
        </li>
        <li className={styles.categoriesListItem}>
          <Link href="/history" className={styles.categoriesListItemLink}>
            History
          </Link>
        </li>
        <li className={styles.categoriesListItem}>
          <Link href="/manufacturing" className={styles.categoriesListItemLink}>
            Manufacturing
          </Link>
        </li>
        <li className={styles.categoriesListItem}>
          <Link href="/technology" className={styles.categoriesListItemLink}>
            Technology
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CategoriesBar;
