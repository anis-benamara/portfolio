import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { CATEGORIES } from "@/lib/constants";

// Get all the mdx files from the directory
function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}
// Read data from these files
function readMDXFile(filePath: fs.PathOrFileDescriptor) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return matter(rawContent);
}
// Present the mdx data and metadata
function getMDXData(dir: string) {
  return getMDXFiles(dir).map((file) => {
    const filePath = path.join(dir, file);
    const { data: metadata, content } = readMDXFile(filePath);
    const slug = path.basename(file, ".mdx");
    return {
      metadata,
      content,
      slug,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "src", "app", "blog", "contents"));
}

export function getTermsOfServices() {
  return getMDXData(
    path.join(process.cwd(), "src", "app", "terms-of-services")
  );
}

export function getPrivacyPolicy() {
  return getMDXData(path.join(process.cwd(), "src", "app", "privacy-policy"));
}

export function formatDate(date: string, includeRelative: boolean = false) {
  const currentDate = new Date();

  if (!date.includes("T")) {
    date = `${date}T00:00:00.000Z`;
  }

  const targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo} year${yearsAgo > 1 ? "s" : ""} ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo} month${monthsAgo > 1 ? "s" : ""} ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo} day${daysAgo > 1 ? "s" : ""} ago`;
  } else {
    formattedDate = "Today";
  }

  let fullDate = targetDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  } else {
    return `${fullDate} (${formattedDate})`;
  }
}

export function doesCategoryHasBlogPosts(category: string) {
  const blogPosts = getBlogPosts();
  return (
    blogPosts.filter((post) => post.metadata.category === category).length > 0
  );
}

export const ACTIVE_CATEGORIES = CATEGORIES.filter(({ slug }) => doesCategoryHasBlogPosts(slug));

