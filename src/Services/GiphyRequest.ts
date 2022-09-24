import { ResponseProps } from "../Models/GifModels";
import { HttpClient } from "./HttpClient";

const GiftApiKey = 'CQMNnIQSQ0Qu4ni6z4rB1KuR66Mz9KK7';
const httpClient = new HttpClient();

export interface searchRequestOptions{
    search: string,
    limit: number,
    offset: number
}

export const getGiftBySearch = async (searchOptions: searchRequestOptions): Promise<ResponseProps> => {
    try {
        const {search, limit, offset} = searchOptions;
        const url: string = `https://api.giphy.com/v1/gifs/search?api_key=${GiftApiKey}&q=${search}&limit=${limit}&offset=${offset}`;
        const { data, pagination, meta } = await httpClient.getHttp(url);
        
        return {data, pagination, meta};
        
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getStickersBySearch = async (searchOptions: searchRequestOptions): Promise<ResponseProps> =>{
    try {
        const {search, limit, offset} = searchOptions;
        const url: string = `https://api.giphy.com/v1/stickers/search?api_key=${GiftApiKey}&q=${search}&limit=${limit}&offset=${offset}`;
        const { data, pagination, meta } = await httpClient.getHttp(url);

        return {data, pagination, meta};

    } catch (error) {
        console.error(error);
        throw error;
    }
}