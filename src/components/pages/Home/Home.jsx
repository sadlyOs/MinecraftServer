import HeroSection from "@/components/sections/HeroSection/HeroSection"
import MainFilterSection from "@/components/sections/MainFilterSection/MainFilterSection"

export default function Home() {
    return (
        <main className="bg-gray-100">
            <HeroSection />
            <MainFilterSection />
        </main>
    )
}