import React from "react";
import Image from "next/image";
import AvatarImage from "@images/avatar.jpg";
import Link from "next/link";

const Avatar = () => {
  return (
    <Link href="/">
      <div className="flex flex-row items-center justify-center p-4 space-x-2 cursor-pointer">
        <div className="rounded-full bg-gradient-to-tl from-primary-main/60 to-primary-main/60 shadow-lg p-[3px] ring-[5px] ring-primary-main/10">
          <div className="rounded-full p-px h-[64px] w-[64px] relative">
            <Image
              src={AvatarImage.src}
              layout="fill"
              className="inline-block rounded-full"
              alt="Yanal Shoubaki"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Avatar;
