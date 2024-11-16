import styles from "@/Components/PopularTags/PopularTags.module.scss";
import Link from "next/link";
import { fetchTags } from "@/lib/api/tagsFetcher";
import { TagsType } from "@/lib/types/tags";

const PopularTags = async () => {
  const tags: TagsType = await fetchTags();

  return (
    <div className={styles.popularTagsContainer}>
      {tags ? (
        <>
          <div className={styles.popularTagsHeader}>
            <h3>Popular Tags</h3>
          </div>
          <div className={styles.tagsListContainer}>
            <ul className={styles.tagsList}>
              {tags.map((tag) => (
                <li key={tag.id} className={styles.tagsListItem}>
                  <Link
                    href={`/tag/${tag.slug}`}
                    className={styles.tagsListItemLink}
                  >
                    {tag.name}
                  </Link>
                  <div className={styles.tagsCount}>· {tag.count}</div>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export default PopularTags;
