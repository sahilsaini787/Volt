"use client";

import styles from "@/Components/PopularTags/PopularTags.module.scss";
import Link from "next/link";
import { TagsType } from "@/lib/types/tags";
import { useUserContext } from "@/context/UserPrefsContext";
import { useState } from "react";

const PopularTags = ({ tags }: { tags: TagsType }) => {
  const { themeMode } = useUserContext();
  const [activeTag, setActiveTag] = useState<string>("");

  function handleActiveTag(slug: string) {
    setActiveTag(slug);
  }

  return (
    <div
      className={`${styles.popularTagsContainer} ${themeMode === "light" ? styles.lightMode : styles.darkMode}`}
    >
      {tags ? (
        <>
          <div className={styles.popularTagsHeader}>
            <span>POPULAR TAGS</span>
          </div>
          <div className={styles.tagsListContainer}>
            <ul className={styles.tagsList}>
              {tags.map((tag) => (
                <li key={tag.id} className={`${styles.tagsListItem}`}>
                  <Link
                    href={`/tag/${tag.slug}`}
                    className={`${styles.tagsListItemLink} ${activeTag === tag.slug ? styles.setActiveTag : ""}`}
                    onClick={() => handleActiveTag(tag.slug)}
                  >
                    {tag.name} · {tag.count}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default PopularTags;
