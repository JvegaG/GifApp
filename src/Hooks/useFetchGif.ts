import { useEffect, useState } from "react";
import { gifAdapterBySearch } from "../Adapters/GifAdapters";
import { ImagesProps } from "../Models/GifModels";


export const useFetchGif = (search: string) => {

    const [imagesData, setImagesData] = useState<ImagesProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const requestCategories = async () => {
        const images: ImagesProps[] = await gifAdapterBySearch(search);
        setImagesData(images);
        setIsLoading(false);
    }

    useEffect(() => {
        requestCategories();
    }, [])


    return{
        imagesData,
        isLoading
    }
}