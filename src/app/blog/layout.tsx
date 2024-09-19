import Container from "@/components/Container";
import MainNavEnhanced from "@/components/MainNavEnhanced";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="bg-gray-100 dark:bg-gray-800">
                <Container>
                    <MainNavEnhanced />
                </Container>
            </div>
            {children}
        </>
    )
}