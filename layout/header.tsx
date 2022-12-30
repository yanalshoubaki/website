import Image from "next/image";
import Link from "next/link";
import React from "react";
import AvatarImage from "@images/avatar.jpg";

const Header = () => {
  return (
    <div className="flex items-start sticky justify-start  z-[2]">
      <Link href="/">
        <div className="flex flex-row items-center justify-center p-4 space-x-2 cursor-pointer">
          <Image
            src={AvatarImage.src}
            width={50}
            height={50}
            className="inline-block rounded-full"
            alt="Yanal Shoubaki"
          />
          <div className="flex flex-col items-start justify-start w-full font-light text-left">
            <h1 className="text-xl font-bold dark:text-white text-primary-main">
              Yanal Shoubaki
            </h1>

            <p className="text-sm dark:text-white text-primary-main">
              Software Engineer
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Header;
