import { getBlogPosts } from "../blog/utils";
import { baseURl } from "../sitemap";

export async function GET() {
  const allBlogs = getBlogPosts();

  const itemsXml = allBlogs
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1;
      }

      return 1;
    })
    .map(
      (post) => `
        <item>
            <title>${post.metadata.title}</title>
            <link>${baseURl}/blog/${post.metadata.category}/${post.slug}</link>
            <pubDate>${new Date(
              post.metadata.publishedAt
            ).toUTCString()}</pubDate>
            <description>${post.metadata.summary}</description>
        </item>
    `
    )
    .join("/n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
        <channel>
            <title>Blog</title>
            <link>${baseURl}/</link>
            <description>My blog</description>
            <language>en</language>
            <atom:link href="${baseURl}/rss" rel="self" type="application/rss+xml" />
            ${itemsXml}
            </channel>
    </rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/rss+xml",
    },
  });
}
