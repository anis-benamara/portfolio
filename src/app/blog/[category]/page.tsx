import { notFound } from "next/navigation";
import { getBlogPosts } from "../utils";
import Link from "next/link";
import Container from "@/components/Container";
import CardCategory from "@/components/CardCategory";
import Header from "@/components/Header";

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({
    category: post.metadata.category,
  }));
}

export function generateMetadata({ params }: { params: { category: string } }) {
  const { category } = params;

  return {
    title: category.toLocaleUpperCase(),
    description: `All ${category} posts`,
  }
}

export default function Page({ params }: { params: { category: string } }) {
  const posts = getBlogPosts().filter(
    (post) => post.metadata.category === params.category
  );

  if (!posts || posts.length === 0) {
    notFound();
  }
  return (
    <>
      <Header>
        <Container>
          <h1 className="title font-semibold text-2xl tracking-wider mt-4 uppercase">{params.category}</h1>
        </Container>
      </Header>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {posts
            .sort((a, b) => {
              if (
                new Date(a.metadata.publishedAt) >
                new Date(b.metadata.publishedAt)
              ) {
                return -1;
              } else {
                return 1;
              }
            })
            .map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.metadata.category}/${post.slug}`}
              >
                <CardCategory title={post.metadata.title} summary={post.metadata.summary} date={post.metadata.publishedAt} />
              </Link>
            ))}
        </div>
      </Container>
    </>
  );
}
