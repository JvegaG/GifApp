import { ResponseProps } from "../Models/GifModels";


abstract class HttpMethods {
    abstract getHttp(url: string): Promise<ResponseProps>
    abstract postHttp(url: string, body?: any | undefined): Promise<ResponseProps>
    abstract putHttp(url: string, body?: any | undefined): Promise<ResponseProps>
}

export class HttpClient implements HttpMethods {

    private body?: any

    private GetOptions = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    }

    private PostOptions = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(this.body)
    }

    private PutOptions = {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(this.body)
    }

    async getHttp(url: string): Promise<ResponseProps> {
        const response = await fetch(url, this.GetOptions);
        const data = await response.json();

        return data;
    }

    async postHttp(url: string, body?: any | undefined): Promise<ResponseProps> {
        this.body = body;

        const response = await fetch(url, this.PostOptions);
        const data = await response.json();

        return data;
    }

    async putHttp(url: string, body?: any | undefined): Promise<ResponseProps> {
        this.body = body;

        const response = await fetch(url, this.PutOptions);
        const data = await response.json();

        return data;
    }
}