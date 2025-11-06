import { useSearchParams } from "react-router-dom"

export default function ServerPage() {
    const [searchParams, setSearchParams] = useSearchParams()
    console.log(searchParams);

    return (
        <main className="flex-1 bg-[#1F2120]">
            <div className="h-screen bg-[url(@assets/)]">

            </div>
        </main>
    )
}