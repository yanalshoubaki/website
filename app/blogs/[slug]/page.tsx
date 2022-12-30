"use client";
import { allBlogs, Blog as BlogType } from "contentlayer/generated";
import { getPartialBlog } from "@lib/contentLayer";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { useRouter } from "next/router";
import { components } from "@ui/MdxComponents";
function fetchBlog(slug: string) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === slug);
  if (!blog) {
    throw new Error("Blog not found");
  }

  const blogData = getPartialBlog(blog);
  return blogData;
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const blog = fetchBlog(slug);
  const MDXContent = useMDXComponent(blog.body.code);

  const path = `${blog.slug}`;

  const url = `https://yanalshoubaki.com${path}`;
  const title = `${blog.title} | Yanal Shoubaki`;
  return (
    <div className="relative min-h-screen w-3/4 md:w-full mx-auto">
      <div className="relative z-[1]">
        <div className="flex items-center justify-center my-4">
          <div className="flex flex-col items-start justify-start w-full max-w-2xl p-4 space-y-4">
            <div className="flex flex-col items-center justify-center w-full space-y-2 text-center">
              <h1 className="text-5xl font-bold text-primary-main dark:text-white">
                {blog.title}
              </h1>
              <div className="flex text-primary-main dark:text-white">
                {blog.publishedAtFormatted}
              </div>
            </div>
          </div>
        </div>
        <main className="relative z-10 text-primary-main dark:text-secondary-main grid grid-cols-[1fr,min(640px,100%),1fr] gap-y-8 px-4 pb-12 text-lg text-primary-main xl:grid-cols-[1fr,minmax(auto,240px),min(640px,100%),minmax(auto,240px),1fr] xl:gap-x-9 xl:px-0 [&>*]:col-start-2 xl:[&>*]:col-start-3">
          <div className="sticky top-6 hidden h-0 xl:!col-start-4 xl:row-start-2 xl:block">
            <div className="space-y-6">
              {blog.headings ? (
                <div className="space-y-2 text-sm">
                  <div className="uppercase text-primary-main dark:text-secondary-main">
                    On this page
                  </div>

                  {blog.headings.map((heading: any) => {
                    return (
                      <div key={heading.slug}>
                        <a
                          href={`#${heading.slug}`}
                          className={clsx(
                            "block text-primary-main dark:text-secondary-main underline-offset-2 transition-all hover:underline hover:decoration-dark dark:hover:decoration-light",
                            {
                              "pl-2": heading.heading === 2,
                              "pl-4": heading.heading === 3,
                            }
                          )}
                        >
                          {heading.text}
                        </a>
                      </div>
                    );
                  })}
                </div>
              ) : null}

              <div className="border-t border-primary-main dark:border-secondary-main"></div>
              <div className="flex items-center justify-between">
                <div className="">
                  <button
                    className="text-sm text-primary-main dark:text-secondary-main"
                    onClick={() => {
                      window.scrollTo({ top: 0 });
                    }}
                  >
                    Back to top
                  </button>
                </div>
              </div>
            </div>
          </div>
          <MDXContent components={components} />
        </main>
      </div>
    </div>
  );
}
