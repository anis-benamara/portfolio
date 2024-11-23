import React from "react";

import Image from "next/image";

const HeroCard = () => {
  return (
    <div className="max-w-screen-md mx-auto pt-10 pb-16">
      <Image
        src="/blog/cubic.jpeg"
        alt="hero"
        width={500}
        height={500}
        quality={100}
        className=" object-cover  aspect-auto size-full rounded-lg"
      />
      <div className="mt-6 flex flex-col items-center gap-2">
      <h1 className="text-3xl font-bold">Cubic Blog</h1>
      <p>November 30, 2024</p>
      <p className="text-lg text-center">A place to share knowledge and experiences with others around the world.
        Read our latest blog posts and stay up-to-date with the latest news and insights from our community.
      </p>
    <button className="btn btn-primary btn-sm bg-primary rounded-xl py-2 px-8 mt-4">Read More</button>
      </div>
    </div>
  );
};

export default HeroCard;
