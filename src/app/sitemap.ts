import { CATEGORIES } from "@/lib/constants";
import { getBlogPosts } from "./blog/utils";

export const baseURl = "https://anis-benamara.vercel.app/";

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
      url: `${baseURl}/blog/${post.metadata.category}/${post.slug}`,
      lastModified: post.metadata.publishedAt,
    }));

  const routes = CATEGORIES.map((route) => ({
    url: `${baseURl}/${route.href}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...blogs, ...routes];
}
