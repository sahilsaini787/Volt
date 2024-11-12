import styles from "@/Components/ArticleCard/ArticleCard.module.scss";
import Image from "next/image";

const ArticleCard = ({}) => {
  return (
    <div className={styles.articleCardContainer}>
      <div className={styles.articleCardThumbnailContainer}>
        <Image
          src="/image.png"
          fill={true}
          style={{ objectFit: "cover" }}
          alt="Article_Thumbnail"
          className={styles.articleCardThumbnail}
        />
      </div>
      <div className={styles.articleMeta}>
        <div className={styles.articlePublishDate}>November 10, 2024</div>
        <div className={styles.articleTimeToRead}>4 mins</div>
      </div>
      <div className={styles.articleMainPreview}>
        <div className={styles.articleTitlePreview}>
          AMD’s Ryzen 7 7800X3D: Redefining Gaming...
        </div>
        <div className={styles.articleContentPreview}>
          Introduction In the world of gaming, the quest for power and
          performance never ceases...
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
