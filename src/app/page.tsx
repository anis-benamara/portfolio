import Container from "@/components/Container";
import MainNavEnhanced from "@/components/MainNavEnhanced";
import { Metadata } from "next";

export const metadata: Metadata = {
  description: "Anis B Amara blog",
};

export default function Home() {
  return (
    <Container>
      <MainNavEnhanced />
      <main className="flex flex-col items-start justify-evenly mt-16 md:flex-row">
        <div>Main</div>
      </main>
    </Container>
  );
}
