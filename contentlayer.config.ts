import { defineDocumentType, makeSource } from "contentlayer/source-files";
import dayjs from "dayjs";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { HEADING_LINK_ANCHOR } from "./lib/constants";
import {
  rehypePrettyCodeClasses,
  rehypePrettyCodeOptions,
} from "./lib/rehyePrettyCode";
import GithubSlugger from "github-slugger";

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  contentType: "mdx",
  filePathPattern: `*.mdx`,
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    description: { type: "string" },
    status: { type: "enum", options: ["draft", "published"], required: true },
  },
  computedFields: {
    headings: {
      type: "json",
      resolve: async (doc) => {
        const slugger = new GithubSlugger();
        const regexp = /(?<flag>#{1,6})\s+(?<content>.+)/g;
        console.log(doc.body.raw);
        const headings = Array.from(doc.body.raw.matchAll(regexp)).map(
          ({ groups }) => {
            const flag = groups?.flag;
            const content = groups?.content;
            return {
              heading: flag?.length,
              text: content,
              slug: content ? slugger.slug(content) : undefined,
            };
          }
        );

        return headings;
      },
    },

    publishedAtFormatted: {
      type: "string",
      resolve: (doc) => {
        return dayjs(doc.publishedAt).format("MMMM D, YYYY");
      },
    },
    slug: {
      type: "string",
      resolve: (doc) => `/blogs/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "blogs",
  documentTypes: [Blog],
  mdx: {
    esbuildOptions(options) {
      options.target = "esnext";
      return options;
    },
    remarkPlugins: [[remarkGfm]],
    rehypePlugins: [
      [rehypeSlug],
      [rehypePrettyCode, rehypePrettyCodeOptions],
      [rehypePrettyCodeClasses],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: [HEADING_LINK_ANCHOR],
          },
        },
      ],
    ],
  },
});
