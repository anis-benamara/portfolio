import Container from "@/components/Container";
import { getTermsOfServices } from "../blog/utils";
import { CustomMDX } from "@/components/mdx";
import { Metadata } from "next";
import MainNavEnhanced from "@/components/MainNavEnhanced";

export const metadata: Metadata = {
  title: "Terms Of Services",
  description: "This page explains the terms of use of the site.",
};

export default function Page() {
  let post = getTermsOfServices().find(
    (post) => post.slug === "terms-of-services"
  );

  return (
    <Container>
      <MainNavEnhanced />
      <article className="prose">
        <CustomMDX source={post?.content} />
      </article>
    </Container>
  );
}