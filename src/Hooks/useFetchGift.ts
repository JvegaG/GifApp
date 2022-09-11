import { useEffect, useState } from "react";
import { giftAdapterBySearch } from "../Adapters/GiftAdapters";
import { ImagesProps } from "../Models/GiftModels";


export const useFetchGift = (search: string) => {

    const [imagesData, setImagesData] = useState<ImagesProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const requestCategories = async () => {
        const images: ImagesProps[] = await giftAdapterBySearch(search);
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