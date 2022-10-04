import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";

const RichTextRenderer = (props) => {
  const { content } = props;
  return (
    <Markdown rehypePlugins={[rehypeRaw, rehypeSanitize]}>{content}</Markdown>
  );
}

export default RichTextRenderer;
