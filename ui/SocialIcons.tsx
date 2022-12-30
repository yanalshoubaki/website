import React from "react";

import FacebookIcon from "@images/icons/facebook.svg";
import GithubIcon from "@images/icons/github.svg";
import LinkedinIcon from "@images/icons/linkedin.svg";

const SocialIconsData = [
  {
    name: "Facebook",
    icon: (
      <FacebookIcon className="fill-primary-main dark:fill-secondary-main" />
    ),
    url: "https://www.facebook.com/yanalalshoubaki",
  },
  {
    name: "Github",
    icon: <GithubIcon className="fill-primary-main dark:fill-secondary-main" />,
    url: "https://github.com/yanalshoubaki",
  },
  {
    name: "Linkedin",
    icon: (
      <LinkedinIcon className="fill-primary-main dark:fill-secondary-main" />
    ),
    url: "https://www.linkedin.com/in/yanalshoubaki/",
  },
];

const SocialIcons = () => {
  return (
    <div className="flex items-center mt-4 space-x-2">
      {SocialIconsData.map((item, index) => {
        return (
          <div key={index}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default SocialIcons;
