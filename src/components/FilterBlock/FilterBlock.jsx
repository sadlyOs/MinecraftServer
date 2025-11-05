import FilterButton from "@/components/ui/FilterButton/FilterButton"

export default function FilterBlock({ title, tags, selected, onToggle, textCenter="none" }) {
    return (
        <div className={`text-white pb-3 not-last:border-b not-last:border-b-white-light ${textCenter == "center" && 'text-center'}`}>
            <h3 className={`${textCenter == "center" && 'py-3'}`}>{title}</h3>
            <div className={`flex flex-wrap gap-2 ${textCenter == "center" && 'justify-center'}`}>
                {tags.map((tag) => (
                    <FilterButton key={tag.value} tag={tag} onToggle={onToggle} selected={selected}/>
                ))}
            </div>
        </div>
    )
}