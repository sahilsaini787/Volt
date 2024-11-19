"use client";

import Link from "next/link";
import styles from "@/Components/CategoriesBar/CategoriesBar.module.scss";
import { CategoriesType, CategoryType } from "@/lib/types/categories";
import { useState } from "react";

const CategoriesBar = ({ categories }: { categories: CategoriesType }) => {
  const [showDropdownMenu, setShowDorpdownMenu] = useState<boolean>(false);

  return (
    <div className={styles.categoreisBarContainer}>
      <div
        className={styles.showCategoriesBarBtnContainer}
        onPointerOver={() => setShowDorpdownMenu(true)}
        onPointerOut={() => setShowDorpdownMenu(false)}
      >
        <button
          className={styles.showCategoriesBarBtn}
          onClick={() => setShowDorpdownMenu(!showDropdownMenu)}
        >
          Categories
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`${styles.dropdownBtnSVG} ${showDropdownMenu ? styles.animateDropdownSVG_Up : styles.animateDropdownSVG_Down}`}
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <ul
          className={`${styles.categoriesBarList} 
            ${showDropdownMenu ? styles.showCategoriesBarList : styles.removeCategoriesBarList}
            ${showDropdownMenu ? styles.showCategoriesListAnimation : styles.removeCategoriesListAnimation}`}
        >
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
    </div>
  );
};

export default CategoriesBar;
