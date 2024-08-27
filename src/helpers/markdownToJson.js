import { marked } from "marked";
import { htmlStringToDocument } from "contentful-rich-text-html-parser";

const markdownToJson = (markdown) => {
  if (markdown === undefined) {
    return;
  }

  try {
    const html = marked.parse(markdown);
    const json = htmlStringToDocument(html);

    // remove empty text nodes added in the conversion process
    json.content = json.content.filter(noTextTypeNodes);
    return json;
  } catch (error) {
    console.error(
      "Error converting markdown to JSON in `markdownToJson.js`",
      error,
    );
    throw error;
  }
};

const noTextTypeNodes = (node) => {
  return node.nodeType !== "text";
};

export default markdownToJson;
