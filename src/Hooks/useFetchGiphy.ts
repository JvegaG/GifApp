import { useEffect, useState } from "react";
import { gifAdapterBySearch, stickerAdapterBySearch } from "../Adapters/GiphyAdapters";
import { OptionEnum } from "../Components/_Component.index";
import { ImagesProps, PaginationModel } from "../Models/GifModels";
import { searchRequestOptions } from "../Services/GiphyRequest";


export const useFetchGiphy = (search: string, option: OptionEnum, offset: number) => {

    const [imagesData, setImagesData] = useState<ImagesProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [pagination, setPagination] = useState<PaginationModel>();

    const requestData = async () => {
        const { data } = await fetchData();
        const images: ImagesProps[] = data;
        setImagesData(images);
        setIsLoading(false);
        setPagination(pagination);
    }

    const fetchData = async (): Promise<{ data: ImagesProps[], pagination: PaginationModel }> => {
        try {
            const requestOption: searchRequestOptions = {
                search,
                limit: 10,
                offset
            }

            if (option === OptionEnum.GIF) {
                const { gifs, pagination } = await gifAdapterBySearch(requestOption);
                return { data: gifs, pagination };
            }

            const { stickers, pagination } = await stickerAdapterBySearch(requestOption);
            return { data: stickers, pagination };

        } catch (error) {
            throw error;
        }

    }

    useEffect(() => {
        requestData();
    }, [search, option])


    return {
        imagesData,
        isLoading,
        pagination
    }
}