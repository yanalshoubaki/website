import { Repo } from "types/github";
import React from "react";
import GithubIcon from "@images/icons/github.svg";

type Props = {
  data: Repo;
};

const RepoCard = ({ data }: Props) => {
  return (
    <div className="mx-auto rounded-md p-4 w-full z-[2] cursor-pointer relative group overflow-hidden">
      <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-primary-main/10 dark:group-hover:bg-secondary-main/10" />
      <div className="relative flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-primary-dark -mt-1 dark:text-secondary-light">
              {data.name}
            </h2>
          </div>
          <p className="mt-3 text-primary-main dark:text-secondary-main text-sm">{data.description}</p>
        </div>
        <div className="mt-2 flex items-center">
          <div className="mr-4 text-primary-main dark:text-secondary-maintext-sm flex flex-row items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="fill-primary-light stroke-none  dark:fill-secondary-main w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>

            <span className="text-primary-light  dark:text-secondary-main">
              {data.stargazers_count}
            </span>
          </div>
          <div className="flex mr-2 text-gray-700 text-sm">
            <a href={data.url} className="flex flex-row gap-2 items-center ">
              <GithubIcon className="fill-primary-light  dark:fill-secondary-main" />
              <span className="text-primary-light  dark:text-secondary-main">
                Github
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
