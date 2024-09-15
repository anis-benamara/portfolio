import { notFound } from "next/navigation";
import { formatDate, getBlogPosts } from "../../utils";
import Header from "@/components/Header";
import Container from "@/components/Container";
import { BreadcrumbWithCustomSeparator } from "@/components/Breadcrumb";
import { CustomMDX } from "@/components/mdx";
import ReportViews from "@/components/ReportViews";
import { baseURl } from "@/app/sitemap";

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) return;

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;

  const ogTimage = image
    ? image
    : `${baseURl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${baseURl}/blog/${params.category}/${params.slug}`,
      type: "article",
      publishedTime,
      images: [
        {
          url: ogTimage,
          width: 800,
          height: 600,
          alt: title,
        },
      ],
    },
  };
}

export default function Page({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }
  return (
    <>
      <ReportViews
        category={post.metadata.category}
        title={post.metadata.title}
        slug={post.slug}
      />
      <Header>
        <Container>
          <BreadcrumbWithCustomSeparator
            category={post.metadata.category}
            slug={post.slug}
          />
          <h1 className="title font-semibold text-2xl tracking-tighter mt-4">
            {post.metadata.title}
          </h1>
          <div className="flex justify-between items-center mt-2 mb-4 text-sm">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              {formatDate(post.metadata.publishedAt)}
            </p>
          </div>
        </Container>
      </Header>
      <Container>
        <article className="prose dark:prose-invert">
          <CustomMDX source={post.content} />
        </article>
      </Container>
    </>
  );
}
