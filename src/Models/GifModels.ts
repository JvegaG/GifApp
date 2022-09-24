export interface ImagesProps {
    id: string;
    imageUrl: string;
    title: string;
}

export interface PaginationModel{
    total_count: number,
    count: number,
    offset: number,
}

export interface ResponseProps {
    data: any;
    pagination: any;
    meta: any
}