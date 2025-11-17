import HeroSection from "@/components/sections/HeroSection/HeroSection"
import MainFilterSection from "@/components/sections/MainFilterSection/MainFilterSection"
import ServerSection from "@/components/sections/ServerSection/ServerSection"
import './Home.css'

export default function Home() {
    return (
        <main id="home" className="bg-[#1F2120]">
            <div className="home">
                <HeroSection />
                <ServerSection />
            </div>
            {/* <MainFilterSection />
            <ServerSection /> */}
        </main>
    )
}