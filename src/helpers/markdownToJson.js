import { marked } from "marked";
import { htmlStringToDocument } from "contentful-rich-text-html-parser";

const markdownToJson = (markdown) => {
  try {
    const html = marked.parse(markdown);
    return htmlStringToDocument(html);
  } catch (error) {
    console.error(
      "Error converting markdown to JSON in `markdownToJson.js`",
      error,
    );
    throw error;
  }
};

export default markdownToJson;
