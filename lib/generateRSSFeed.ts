import { allBlogs } from "contentlayer/generated";
import RSS from "rss";
import fs from "fs";

export default async function generateRssFeed() {
  const site_url = process.env.URL || "https://localhost:3000";

  const feedOptions = {
    title: "Blog posts | RSS Feed",
    description: "Welcome to this blog posts!",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    image_url: `${site_url}/logo.png`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Ibas`,
  };
  const feed = new RSS(feedOptions);
  allBlogs.map((blog) => {
    feed.item({
      title: blog.title,
      description: blog.description || "",
      url: `${site_url}${blog.slug}`,
      date: blog.publishedAtFormatted,
    });
  });
  fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
}
