import MyProjectBlock from "@/components/ui/MyProjectBlock/MyProjectBlock"


export default function MyProjectsPage() {
    return (
        <div className="container mx-auto px-4 flex flex-col gap-4">
            {['1','2','3'].map((_, index) => (
                <MyProjectBlock id={index}/>
            ))}
        </div>
    )
}