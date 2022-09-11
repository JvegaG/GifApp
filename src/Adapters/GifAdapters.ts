import { ImagesProps } from "../Models/GifModels";
import { getGiftBySearch } from "../Services/GifRequest";


export const gifAdapterBySearch = async (searchText: string) => {
    const request = await getGiftBySearch(searchText);
    const data: ImagesProps[] = request.map((item: any) => ({
        id: item.id,
        imageUrl: item.images.downsized_medium.url,
        title: item.title
    }))

    return data;
}