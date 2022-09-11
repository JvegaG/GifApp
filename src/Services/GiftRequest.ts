import { HttpClient } from "./HttpClient";

export interface ResponseProps {
    data: any;
    pagination: any;
    meta: any
}

const GiftApiKey = 'CQMNnIQSQ0Qu4ni6z4rB1KuR66Mz9KK7';
const httpClient = new HttpClient();

export const getGiftBySearch = async (search: string, limit: number = 10) => {

    try {

        const url: string = `https://api.giphy.com/v1/gifs/search?api_key=${GiftApiKey}&q=${search}&limit=${limit}`;
        const { data, pagination, meta } = await httpClient.getHttp(url);

        return data;

    } catch (error) {
        console.log(error);
    }

}