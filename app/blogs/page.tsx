"use client";

import React from "react";
import BlogCard from "components/BlogCard";
import { MDXProvider } from "@mdx-js/react";
import { allBlogs, Blog as BlogType } from "contentlayer/generated";
import dayjs from "dayjs";

function fetchBlogs(): BlogType[] {
  return allBlogs
    .filter((blog) => blog.type == "Blog" && blog.status == "published")
    .sort((a, b) => {
      return dayjs(b.publishedAt).unix() - dayjs(a.publishedAt).unix();
    });
}

export default function Blogs() {
  const blogs = fetchBlogs();
  return (
    <MDXProvider>
      <div className="relative min-h-screen">
        <div className="relative z-[2]">
          <div className="flex items-center justify-center mb-6">
            <div className="flex flex-col items-start justify-start w-full max-w-2xl p-4 space-y-4">
              <div className="flex flex-col items-center justify-center w-full space-y-2 text-center">
                <h1 className="text-5xl font-bold dark:text-secondary-light text-primary-main">
                  Latest Updates
                </h1>
                <p className="text-md dark:text-secondary-light text-primary-main">
                  I write about my experiences and what I learn.
                </p>
              </div>
            </div>
          </div>
          <div className="w-2/4 mx-auto">
            <div className="flex flex-col justify-center space-y-4">
              {blogs.map((blog: BlogType, index: number) => {
                return <BlogCard blog={blog} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </MDXProvider>
  );
}
