import React from "react";

import HeroCard from "@/components/HeroCard";
import LatestPosts from "@/components/home/LatestPosts";
import PopularPosts from "@/components/home/PopularPosts";
import TopCategories from "@/components/home/TopCategories";

const Blog = () => {
  return (
    <main className="flex flex-col">
      <section className="bg-coral-500 dark:bg-gray-800">
        <HeroCard />
      </section>
      <section className="flex flex-col items-start justify-evenly pt-16 md:flex-row bg-coral-800 dark:bg-gray-800">
        <div>
          <LatestPosts />
        </div>
        <div className="h-screen">
          <div>
            <h2 className="font-bold mb-4">TOP CATEGORIES</h2>
            <TopCategories />
          </div>
          <div className="mt-10 sticky top-0">
            <h2 className="font-bold mb-4">POPULAR POSTS</h2>
            <PopularPosts />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
