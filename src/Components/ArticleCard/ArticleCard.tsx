import styles from "@/Components/ArticleCard/ArticleCard.module.scss";
import Image from "next/image";
import { ArticleCardPropsType } from "@/Components/ArticleGrid/ArticleGrid";
import he from "he";

const parseHTMLparagraph = (articleContent: string) => {
  const regex = /<p[^>]*>(.*?)<\/p>/gi;
  const matches = [];
  let match;

  while ((match = regex.exec(articleContent)) !== null) {
    const decodedText = he.decode(match[1].trim());
    matches.push(decodedText);
  }
  return matches;
};

function parseDate(publishDate: string) {
  const dateObject = new Date(publishDate);
  const publishDateFormat = dateObject.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return publishDateFormat;
}

function extractParagraphTextList(articleContent: string): string[] {
  const articleContentTextList = parseHTMLparagraph(articleContent);

  const paragraphTextList = articleContentTextList.filter(
    (text) => text.trim() !== ""
  );
  return paragraphTextList;
}

function calculateTimeToReadArticle(articleContent: string) {
  const readSpeed = 235; //normal human reading speed per minute

  return Math.ceil(
    extractParagraphTextList(articleContent)
      .map((paragraphText: string) => paragraphText.trim().split(/\s+/).length)
      .reduce(
        (accumulatedLength: number, curLength: number) =>
          accumulatedLength + curLength,
        0
      ) / readSpeed
  );
}

const ArticleCard = ({ postData }: { postData: ArticleCardPropsType }) => {
  const {
    featuredImage: {
      node: { mediaItemUrl: thumbnailURL, altText: thumbnailAltText },
    },
    date: publishDate,
    title: articleTitle,
    excerpt: articleExcerpt,
    content: articleContent,
  } = postData;

  const publishDateFormat = parseDate(publishDate);
  const timeToRead = calculateTimeToReadArticle(articleContent);
  const articleExcerptText = parseHTMLparagraph(articleExcerpt)[0];

  return (
    <div className={styles.articleCardContainer}>
      <div className={styles.articleCardThumbnailContainer}>
        <Image
          src={thumbnailURL}
          fill={true}
          style={{ objectFit: "cover" }}
          alt={thumbnailAltText}
          className={styles.articleCardThumbnail}
        />
      </div>
      <div className={styles.articleMeta}>
        <div className={styles.articlePublishDate}>{publishDateFormat}</div>
        <div className={styles.articleTimeToRead}>
          {timeToRead} {timeToRead === 1 ? "min" : "mins"}
        </div>
      </div>
      <div className={styles.articleMainPreview}>
        <div className={styles.articleTitlePreview}>{articleTitle}</div>
        <div className={styles.articleContentPreview}>{articleExcerptText}</div>
      </div>
    </div>
  );
};

export default ArticleCard;
