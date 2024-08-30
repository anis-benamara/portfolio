import Container from "@/components/Container";
import LatestPosts from "@/components/home/LatestPosts";
import { MainNav } from "@/components/MainNav";

export default function Home() {
  return (
    <Container>
      <MainNav />
      <main>
        <div>
          <LatestPosts />
        </div>
      </main>
    </Container>
  );
}
