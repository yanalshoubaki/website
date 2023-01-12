// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import dayjs from "dayjs";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

// lib/constants.ts
var HEADING_LINK_ANCHOR = `before:content-['#'] before:absolute before:-ml-[1em] dark:before:text-secondary-main dark:hover:before:text-secondary-main before:text-primary-main hover:before:text-primary-main pl-[1em] -ml-[1em]`;

// lib/rehyePrettyCode.ts
import { visit } from "unist-util-visit";
var BLOCK = "overflow-hidden rounded-lg bg-primary-dark shadow-md  shadow-surface-elevation-low ring-1 ring-primary-main/[3%] ring-inset";
var TITLE = "mb-0.5  bg-primary-light   px-3 py-1 font-mono text-xs text-secondary-main shadow-sm";
var PRE = "overflow-x-auto p-2 text-[13px] leading-6";
var CODE = "grid [&>span]:border-l-4 [&>span]:border-l-transparent [&>span]:pl-2 [&>span]:pr-3";
var INLINE_BLOCK = "whitespace-nowrap border border-primary-main/10 px-1.5 py-px text-[12px] rounded-full bg-seconday-main/5 whitespace-nowrap text-primary-main dark:text-secondary-main";
var INLINE_CODE = "";
var NUMBERED_LINES = "[counter-reset:line] before:[&>span]:mr-3 before:[&>span]:inline-block before:[&>span]:w-4 before:[&>span]:text-right before:[&>span]:text-white/20 before:[&>span]:![content:counter(line)] before:[&>span]:[counter-increment:line]";
var HIGHLIGHTED_LINE = "!border-l-primary-main/70 bg-primary-main/10 before:!text-seconday-main/70";
function rehypePrettyCodeClasses() {
  return (tree) => {
    visit(
      tree,
      (node) => Boolean(
        node.tagName === "code" && Object.keys(node.properties).length === 0 && node.children.some((n) => n.type === "text")
      ),
      (node) => {
        const textNode = node.children.find((n) => n.type === "text");
        textNode.type = "element";
        textNode.tagName = "code";
        textNode.properties = { className: [INLINE_CODE] };
        textNode.children = [{ type: "text", value: textNode.value }];
        node.properties.className = [INLINE_BLOCK];
        node.tagName = "span";
      }
    );
    visit(
      tree,
      (node) => Boolean(
        typeof node?.properties?.["data-rehype-pretty-code-fragment"] !== "undefined"
      ),
      (node) => {
        if (node.tagName === "span") {
          node.properties.className = [
            ...node.properties.className || [],
            INLINE_BLOCK
          ];
          node.children[0].properties.className = [
            ...node.children[0].properties.className || [],
            INLINE_CODE
          ];
          return node;
        }
        if (node.tagName === "div") {
          node.properties.className = [
            ...node.properties.className || [],
            BLOCK
          ];
          node.children = node.children.map((node2) => {
            if (node2.tagName === "div" && typeof node2.properties?.["data-rehype-pretty-code-title"] !== "undefined") {
              node2.properties.className = [
                ...node2.properties.className || [],
                TITLE
              ];
            }
            if (node2.tagName === "pre") {
              node2.properties.className = [PRE];
              if (node2.children[0].tagName === "code") {
                node2.children[0].properties.className = [
                  ...node2.children[0].properties.className || [],
                  CODE
                ];
                if (typeof node2.children[0].properties["data-line-numbers"] !== "undefined") {
                  node2.children[0].properties.className.push(NUMBERED_LINES);
                }
              }
            }
            return node2;
          });
          return node;
        }
      }
    );
  };
}
var rehypePrettyCodeOptions = {
  theme: "one-dark-pro",
  tokensMap: {
    fn: "entity.name.function",
    objKey: "meta.object-literal.key"
  },
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
    node.properties.className = [""];
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted " + HIGHLIGHTED_LINE);
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["word"];
  }
};

// contentlayer.config.ts
import GithubSlugger from "github-slugger";
var Blog = defineDocumentType(() => ({
  name: "Blog",
  contentType: "mdx",
  filePathPattern: `*.mdx`,
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    description: { type: "string" },
    status: { type: "enum", options: ["draft", "published"], required: true }
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
              slug: content ? slugger.slug(content) : void 0
            };
          }
        );
        return headings;
      }
    },
    publishedAtFormatted: {
      type: "string",
      resolve: (doc) => {
        return dayjs(doc.publishedAt).format("MMMM D, YYYY");
      }
    },
    slug: {
      type: "string",
      resolve: (doc) => `/blogs/${doc._raw.flattenedPath}`
    }
  }
}));
var contentlayer_config_default = makeSource({
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
            className: [HEADING_LINK_ANCHOR]
          }
        }
      ]
    ]
  }
});
export {
  Blog,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-IGXH3WNU.mjs.map
