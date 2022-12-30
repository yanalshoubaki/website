import { FOCUS_VISIBLE_OUTLINE, LINK_STYLES } from "@lib/constants";
import { Aside } from "@ui/Aside";
import cx from "clsx";
import NextLink from "next/link";
import React from "react";

export const components = {
  Aside,
  h1: (props: any) => (
    <h2
      className="relative mt-3 text-xl font-bold  pt-9 text-primary-main dark:text-secondary-main sm:text-3xl"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h3
      className="relative mt-3 text-lg font-medium text-primary-main dark:text-secondary-main sm:text-2xl"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h4
      className="text-xl font-medium text-primary-main dark:text-secondary-main"
      {...props}
    />
  ),
  h4: (props: any) => (
    <h5
      className="text-lg font-medium text-primary-main dark:text-secondary-main"
      {...props}
    />
  ),
  hr: (props: any) => (
    <hr
      className="relative border-t-2 border-primary-main dark:border-secondary-main pt-9 sm:pt-10"
      {...props}
    />
  ),
  a: ({ href = "", ...props }) => {
    if (href.startsWith("http") || href.startsWith("#")) {
      return (
        <a
          className={cx(LINK_STYLES, FOCUS_VISIBLE_OUTLINE)}
          href={href}
          rel="noopener"
          {...props}
        />
      );
    }

    return (
      <NextLink href={href} passHref>
        <span className={cx(LINK_STYLES, FOCUS_VISIBLE_OUTLINE)} {...props} />
      </NextLink>
    );
  },
  ul: (props: any) => (
    <ul
      className="space-y-3 dark:text-secondary-main text-primary-main [li>&]:mt-3 [&>li]:relative [&>li]:pl-7 before:[&>li]:absolute before:[&>li]:left-1 before:[&>li]:top-3 before:[&>li]:h-1.5 before:[&>li]:w-1.5 before:[&>li]:rounded-full before:[&>li]:bg-primary-main dark:before:[&>li]:bg-secondary-main"
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol className="pl-10 space-y-3 list-decimal" {...props} />
  ),
  strong: (props: any) => <strong className="font-semibold" {...props} />,
  blockquote: (props: any) => (
    <blockquote
      className="border-l-2 border-primary-main dark:border-secondary-main pl-4 text-xl italic xl:!col-start-2 xl:!col-end-3"
      {...props}
    />
  ),
  del: (props: any) => (
    <del
      className="line-through text-primary-main dark:text-secondary-main"
      {...props}
    />
  ),
  p: (props: any) => (
    <p
      className="text-base text-primary-main dark:text-secondary-main"
      {...props}
    />
  ),
};
