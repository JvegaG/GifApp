import { ImagesProps } from "../Models/GifModels";
import { getGiftBySearch, getStickersBySearch, searchRequestOptions } from "../Services/GiphyRequest";


export const gifAdapterBySearch = async (requestOptions: searchRequestOptions) => {
    const {data, pagination} = await getGiftBySearch(requestOptions);
    const gifs: ImagesProps[] = data.map((item: any) => ({
        id: item.id,
        imageUrl: item.images.downsized_medium.url,
        title: item.title
    }))

    return {gifs, pagination};
}

export const stickerAdapterBySearch = async (requestOptions: searchRequestOptions) => {
    const {data, pagination} = await getStickersBySearch(requestOptions);
    const stickers: ImagesProps[] = data.map((item: any) => ({
        id: item.id,
        imageUrl: item.images.downsized_medium.url,
        title: item.title
    }))

    return {stickers, pagination};
}