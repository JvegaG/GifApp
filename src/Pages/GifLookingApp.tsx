import { useState } from "react";
import { AddCategory, GifGrid } from "../Components/_Component.index";
import { OptionEnum, SelectOptionComponent } from "../Components/SelectOption";

const GifLookingApp = () => {

    const [searchImage, setSearchImage] = useState<string>('');
    const [option, setOption] = useState<OptionEnum>(OptionEnum.GIF);

    const search = (value: string) => {
        setSearchImage(value);
    }

    return (
        <>
            <h3>GifLookingApp</h3>

            <SelectOptionComponent returnedOption={(value: OptionEnum) => setOption(value)} />

            <AddCategory onAddCategory={(value: string) => search(value)} />

            {(searchImage.length <= 0) && (<h1 className="text-center">...Empty...</h1>)}

            <GifGrid
                searchText={searchImage}
                optionSearch={option}
            />
        </>
    )
}

export default GifLookingApp;