import HeroSection from "@/components/sections/HeroSection/HeroSection"
import MainFilterSection from "@/components/sections/MainFilterSection/MainFilterSection"
import ServerSection from "@/components/sections/ServerSection/ServerSection"

export default function Home() {
    return (
        <main id="home" className="bg-[#1F2120] min-h-screen">
            <HeroSection />
            <ServerSection />
            {/* <MainFilterSection />
            <ServerSection /> */}
        </main>
    )
}