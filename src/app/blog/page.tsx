import LatestPosts from "@/components/home/LatestPosts";
import PopularPosts from "@/components/home/PopularPosts";
import TopCategories from "@/components/home/TopCategories";
import React from "react";

const Blog = () => {
  return (
    <main className="flex flex-col items-start justify-evenly mt-16 md:flex-row">
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
    </main>
  );
};

export default Blog;
