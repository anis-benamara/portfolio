"use client";

import Link from "next/link";
import useSWR from "swr";

import { popularPosts } from "@/lib/placeholder-data";
import { fetcher, fetchUrl } from "@/lib/utils";

import { Icons } from "../Icons";
import { PopularPostsSkeleton } from "../skeleton/PopularPostsSkeleton";

export default function PopularPosts() {
  const { data, error, isLoading } = useSWR(fetchUrl, fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <PopularPostsSkeleton />;
  return (
    <ul className="overflow-auto">
      {data?.map((post) => (
        <Link href={`/blog/${post.category}/${post.slug}`} key={post.title}>
          <li className="flex items-center group gap-2 cursor-pointer py-2">
            <Icons.arrowRight className="h-6 w-6 group-hover:translate-x-1 transition-all" />
            <span>{post.title}</span>
          </li>
        </Link>
      ))}
    </ul>
  );
}
