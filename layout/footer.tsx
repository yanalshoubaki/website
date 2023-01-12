import { LINK_STYLES } from "@lib/constants";
import SocialIcons from "@ui/SocialIcons";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center">
      <p className="mt-8 text-primary-main dark:text-secondary-light">
        Built with{" "}
        <a href="https://nextjs.org" className={LINK_STYLES}>
          Next.js
        </a>
        ,{" "}
        <a href="https://mdxjs.com" className={LINK_STYLES}>
          MDX
        </a>
        ,{" "}
        <a href="https://tailwindcss.com" className={LINK_STYLES}>
          Tailwind
        </a>{" "}
        and{" "}
        <a href="https://vercel.com" className={LINK_STYLES}>
          Vercel
        </a>
      </p>
      <div className="flex flex-col items-center justify-center p-4 space-y-4 text-center ">
        <SocialIcons />
        <div>
          <a
            href="mailto:me@yanalshoubaki.com"
            className="text-primary-main dark:text-secondary-main text-md"
          >
            me@yanalshoubaki.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
