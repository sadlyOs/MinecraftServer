import HeroSection from "@/components/sections/HeroSection/HeroSection"
import MainFilterSection from "@/components/sections/MainFilterSection/MainFilterSection"
import ServerSection from "@/components/sections/ServerSection/ServerSection"

export default function Home() {
    return (
        <main className="bg-gray-100 min-h-screen">
            <HeroSection />
            <MainFilterSection />
            <ServerSection />
        </main>
    )
}