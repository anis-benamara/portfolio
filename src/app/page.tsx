import Container from "@/components/Container";
import MainNavEnhanced from "@/components/MainNavEnhanced";
import { Metadata } from "next";

export const metadata: Metadata = {
  description: "Anis B Amara blog",
};

export default function Home() {
  return (
    <>
      <Container>
        <MainNavEnhanced />
      </Container>
      <main className="flex flex-col items-start flex-1 justify-evenly pt-16 md:flex-row bg-coral-500 dark:bg-gray-800">
        <div>Main</div>
      </main>
    </>
  );
}
