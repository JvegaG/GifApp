import { ImagesProps } from "../Models/GiftModels";
import { getGiftBySearch } from "../Services/GiftRequest";


export const giftAdapterBySearch = async (searchText: string) => {
    const request = await getGiftBySearch(searchText);
    const data: ImagesProps[] = request.map((item: any) => ({
        id: item.id,
        imageUrl: item.images.downsized_medium.url,
        title: item.title
    }))

    return data;
}