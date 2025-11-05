import { useState } from "react"
import FilterButton from "@/components/ui/FilterButton/FilterButton"

export default function FilterBlock({ title, tags, selected, onToggle }) {
    return (
        <div className="text-white pb-3 not-last:border-b not-last:border-b-white-light">
            <h3>{title}</h3>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <FilterButton key={tag.value} tag={tag} onToggle={onToggle} selected={selected}/>
                ))}
            </div>
        </div>
    )
}