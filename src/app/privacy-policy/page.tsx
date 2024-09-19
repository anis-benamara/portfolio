import Container from "@/components/Container";
import { getPrivacyPolicy } from "../blog/utils";
import { CustomMDX } from "@/components/mdx";
import { Metadata } from "next";
import MainNavEnhanced from "@/components/MainNavEnhanced";

export const metadata: Metadata = {
  title: "Privary Policy",
  description: "This page explains the Privacy Policy of the site.",
};

export default function Page() {
  let post = getPrivacyPolicy().find((post) => post.slug === "privacy-policy");

  return (
    <Container>
      <MainNavEnhanced />
      <article className="prose">
        <CustomMDX source={post?.content} />
      </article>
    </Container>
  );
}
