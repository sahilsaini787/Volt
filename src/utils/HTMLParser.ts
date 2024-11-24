import { parseHTML } from "linkedom";

const parseHTMLParagraphList = (articleContent: string) => {
  const { document } = parseHTML(articleContent);
  const pTags = document.querySelectorAll("p");
  return Array.from(pTags).map((p) => p.textContent?.trim());
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

function calculateTimeToReadArticle(articleContent: string) {
  const readSpeed = 235; //normal human reading speed per minute

  return Math.ceil(
    parseHTMLParagraphList(articleContent)
      .filter(
        (paragraphText): paragraphText is string => paragraphText !== undefined
      )
      .map((paragraphText: string) => paragraphText.split(/\s+/).length)
      .reduce(
        (accumulatedLength: number, curLength: number) =>
          accumulatedLength + curLength,
        0
      ) / readSpeed
  );
}

export { calculateTimeToReadArticle, parseDate, parseHTMLParagraphList };
