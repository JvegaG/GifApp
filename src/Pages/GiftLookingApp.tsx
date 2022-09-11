import { useState } from "react";
import { AddCategory, GiftGrid } from "../Components";

const GiftLookingApp = () => {

    const [categories, setCategories] = useState<string[]>([]);

    const addCategoy = async (newItem: string) => {
        const cleanData = categories.map(x => x.toLowerCase().trim());

        if (cleanData.includes(newItem.toLowerCase().trim())) return;
        setCategories([newItem, ...categories]);
    }

    return (
        <>
            <h3>GiftLookingApp</h3>

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
                    <GiftGrid
                        key={item}
                        searchText={item} />
                ))
            }
        </>
    )
}

export default GiftLookingApp;