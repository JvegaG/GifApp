import { useState } from "react";
import { AddCategory, GifGrid } from "../Components";

const GifLookingApp = () => {

    const [categories, setCategories] = useState<string[]>([]);

    const addCategoy = async (newItem: string) => {
        const cleanData = categories.map(x => x.toLowerCase().trim());

        if (cleanData.includes(newItem.toLowerCase().trim())) return;
        setCategories([newItem, ...categories]);
    }

    return (
        <>
            <h3>GifLookingApp</h3>

            <AddCategory
                onAddCategory={(value: string) => addCategoy(value)}
            />
            {
                (categories.length <= 0) && (
                    <h1 className="text-center">Lista Vacia</h1>
                )
            }
            {
                categories.map((item: string) => (
                    <GifGrid
                        key={item}
                        searchText={item} />
                ))
            }
        </>
    )
}

export default GifLookingApp;