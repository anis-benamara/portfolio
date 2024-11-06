import Container from "@/components/Container";
import MainNavEnhanced from "@/components/MainNavEnhanced";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <Container>
          <MainNavEnhanced />
        </Container>
      </div>
      {children}
    </>
  );
}
