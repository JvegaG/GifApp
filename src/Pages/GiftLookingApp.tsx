import { MouseEvent, useState } from "react";
import { AddCategory } from "../Components/AddCategory";

const GiftLookingApp = () => {

    const [categories, setCategories] = useState<string[]>(['One Punch', 'Dragon ball']);

    // const onAddCategory = (event: MouseEvent<HTMLButtonElement> ) => {
    //     console.log(event)

    //     const newItem = "Twitch"
    //     setCategories([...categories, newItem]);
    // }

    const addCategoy = (newItem: string) => {
        if(categories.includes(newItem)) return;
        setCategories([...categories, newItem]);
    }

    return (
        <>
            <h1>GiftLookingApp</h1>

            <AddCategory
                // currentCategories={categories}
                // onAddCategory={setCategories}
                onAddCategory={(value: string) => addCategoy(value)}
            />

            {/* <button
                className="btn btn-primary mb-2"
                onClick={onAddCategory}
            >Add</button> */}

            <ol>
                {categories.map((item: string, index: number) => {
                    return <li key={item}>{`${item}`}</li>
                })}
            </ol>
        </>
    )
}

export default GiftLookingApp;