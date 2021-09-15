export default function TagsContainers({ tags, onSelect }) {    
    return (
        <div class="flex justify-center mt-5">
            { tags.map((tag) => {
                var style = "mx-4 py-2 px-4 border-4 cursor-pointer"
                style += tag.selected ? " bg-primary" : " bg-white"
               return (<div key={tag.key} class={style} onClick={() => onSelect(tag)}>{tag.text}</div>)
            })}
        </div>
    )

}