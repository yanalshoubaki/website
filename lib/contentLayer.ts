import { Blog } from "contentlayer/generated";
export const getPartialBlog = ({
  title,
  slug,
  publishedAtFormatted,
  description,
  body,
  headings,
}: Blog) => ({
  title,
  slug,
  publishedAtFormatted,
  description: description ?? null,
  body: {
    code: body.code,
  },
  headings:
    (headings as { heading: number; text: string; slug: string }[]) ?? null,
});
