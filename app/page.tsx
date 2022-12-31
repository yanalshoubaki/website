import Image from "next/image";
import AvatarImage from "@images/avatar.jpg";
import Link from "next/link";
import { Repo } from "types/github";
import RepoCard from "@components/RepoCard";

async function getData(): Promise<Repo[]> {
  const res = await fetch(process.env.APP_URL + "/api/repos", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page() {
  const repos = await getData();
  const title = "Hi 👋, I'm Yanal Shoubaki";
  const subtitle =
    "I'm a software developer at sprinitve,\n and living in Amman, JO.";
  return (
    <div>
      <div className="relative flex items-center justify-center my-8">
        <div className="flex flex-col items-center justify-center relative z-[2]">
          <div>
            <Image
              src={AvatarImage.src}
              width={150}
              height={150}
              className="inline-block rounded-full"
              alt="Yanal Shoubaki"
            />
          </div>
          <div className="flex flex-col mt-8 items-center justify-center w-full font-light text-center space-y-4">
            <h1 className="mb-2 text-3xl font-bold dark:text-secondary-main text-primary-main sm:text-4xl lg:text-5xl md:text-center">
              {title}
            </h1>
            {subtitle && (
              <p className="w-11/12 text-xl text-primary-main dark:text-secondary-main sm:text-2xl lg:text-3xl sm:w-5/6 md:w-11/12 lg:w-4/5 xl:w-3/5">
                {subtitle}
              </p>
            )}
            <Link href="/blogs">
              <span className="px-4 py-2 my-4 rounded-sm shadow-md bg-primary-main text-secondary-main dark:bg-secondary-main dark:text-primary-main">
                My Blog
              </span>
            </Link>
          </div>
        </div>
      </div>
      {repos.length > 0 && (
        <div className="flex flex-col items-center w-2/4 mx-auto  relative z-[3]">
          <h3 className="my-6 text-2xl font-bold  text-primary-main dark:text-secondary-main">
            Open Source Project
          </h3>
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-3  gap-2 md:grid-cols-2">
              {repos.map((repo) => (
                <RepoCard data={repo} key={repo.id} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
