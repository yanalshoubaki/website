import { Blog } from "contentlayer/generated";
import Link from "next/link";
import React from "react";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  const checkIfNewBlog = (date: string) => {
    const blogDate = new Date(date);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - blogDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7;
  };

  return (
    <Link href={blog.slug}>
      <article className="mx-auto rounded-md p-4 w-full md:w-3/4 z-[2] cursor-pointer relative group overflow-hidden">
        <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-primary-main/10 dark:group-hover:bg-secondary-main/10" />
        <div className="p-2 relative">
          <span className="mt-2 mb-4 block dark:text-secondary-dark  text-primary-light text-md">
            {blog.publishedAtFormatted}
            {checkIfNewBlog(blog.publishedAt) && (
              <span className="px-4 py-2 text-sm font-bold rounded-2xl mx-4 text-secondary-dark dark:text-primary-dark bg-primary-dark dark:bg-secondary-dark">
                New!
              </span>
            )}
          </span>
          <h1 className="mb-2 text-2xl font-bold tracking-tight dark:text-secondary-main  text-primary-main cursor-pointer  hover:underline">
            {blog.title}
          </h1>
          <p className="mb-3 font-normal dark:text-secondary-dark  text-primary-light">
            {blog.description}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
