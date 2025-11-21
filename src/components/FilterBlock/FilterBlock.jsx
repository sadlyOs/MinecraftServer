import FilterButton from "@/components/ui/FilterButton/FilterButton"

export default function FilterBlock({ title, tags, selected, onToggle, textCenter="none" }) {
    return (
        <div className={`text-white pb-6 not-last:border-b not-last:border-b-white-light ${textCenter == "center" && 'text-center'}`}>
            <h3 className={`pb-3 text-xl`}>{title}</h3>
            <div className={`flex flex-wrap gap-1.5 ${textCenter == "center" && 'justify-center'}`}>
                {tags.map((tag) => (
                    <FilterButton key={tag.value} tag={tag} onToggle={onToggle} selected={selected}/>
                ))}
            </div>
        </div>
    )
}