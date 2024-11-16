import Link from "next/link";

import { fetchTags, fetchCategories } from "@/lib/api/fetcher";
import { TagsType } from "@/lib/types/tags";
import { CategoriesType } from "@/lib/types/categories";
import styles from "@/Components/Footer/Footer.module.scss";

export default async function Footer() {
  const tags: TagsType = await fetchTags();
  const categories: CategoriesType = await fetchCategories();

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerLogoContainer}>
        <div className={styles.footerLogoSVGContainer}>
          <svg viewBox="0 0 15 15" fill="none" className={styles.footerLogoSVG}>
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              <path
                d="M2.5 0C1.11929 0 0 1.11929 0 2.5C0 3.70948 0.85888 4.71836 2 4.94999V9.5C2 11.433 3.567 13 5.5 13H7.29289L6.14645 14.1464L6.85355 14.8536L9.20711 12.5L6.85355 10.1464L6.14645 10.8536L7.29289 12H5.5C4.11929 12 3 10.8807 3 9.5V4.94999C4.14112 4.71836 5 3.70948 5 2.5C5 1.11929 3.88071 0 2.5 0Z"
                fill="#1a2156"
              />
              <path
                d="M8.85355 0.853554L8.14645 0.146446L5.79289 2.5L8.14645 4.85355L8.85355 4.14645L7.70711 3H9.5C10.8807 3 12 4.11929 12 5.5V10.05C10.8589 10.2816 10 11.2905 10 12.5C10 13.8807 11.1193 15 12.5 15C13.8807 15 15 13.8807 15 12.5C15 11.2905 14.1411 10.2816 13 10.05V5.5C13 3.567 11.433 2 9.5 2H7.70711L8.85355 0.853554Z"
                fill="#1a2156"
              />
            </g>
          </svg>
        </div>
        <div className={styles.footerLogoText}>Volt</div>
      </div>

      {tags ? (
        <div className={styles.footer_popularTags}>
          <div className={styles.footer_tagsHeader}>
            <span>POPULAR TAGS</span>
          </div>
          <div className={styles.footer_tagsListContainer}>
            <ul className={styles.footer_tagsList}>
              {tags.map((tag) => (
                <li key={tag.id} className={styles.footer_tagItemContainer}>
                  <Link href="/tech" className={styles.footer_tagItem}>
                    {`${tag.name[0].toUpperCase()}${tag.name.slice(1).toLowerCase()}`}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}

      {categories ? (
        <div className={styles.footer_categories}>
          <div className={styles.footer_categoriesHeader}>
            <span>CATEGORIES</span>
          </div>
          <div className={styles.footer_categoriesListContainer}>
            <ul className={styles.footer_categoriesList}>
              {categories.map((category) =>
                category.name !== "Uncategorized" ? (
                  <li
                    key={category.id}
                    className={styles.footer_categoryItemContainer}
                  >
                    <Link
                      href={`/category/${category.slug}`}
                      className={styles.footer_categoryItem}
                    >
                      {`${category.name[0].toUpperCase()}${category.name.slice(1).toLowerCase()}`}
                    </Link>
                  </li>
                ) : null
              )}
            </ul>
          </div>
        </div>
      ) : null}

      <div className={styles.footer_resources}>
        <div className={styles.footer_resourcesHeader}>
          <span>RESOURCES</span>
        </div>
        <div className={styles.footer_resourcesListContainer}>
          <ul className={styles.footer_resourcesList}>
            <li>
              <Link
                href="/contact-us"
                className={styles.footer_resourceListItem}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/faqs" className={styles.footer_resourceListItem}>
                FAQs
              </Link>
            </li>
            <li>
              <Link
                href="/terms-and-conditions"
                className={styles.footer_resourceListItem}
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className={styles.footer_resourceListItem}
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/about-us" className={styles.footerResourceLink}>
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
