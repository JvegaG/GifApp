import { FC } from "react";
import { useFetchGif } from "../Hooks/useFetchGif";
import { ImagesProps } from "../Models/GifModels";
import { GifItem } from "./GifItem";

interface GiftGridProps {
    searchText: string;
}

export const GifGrid: FC<GiftGridProps> = ({ searchText }) => {

    const {imagesData, isLoading} = useFetchGif(searchText);

    return (
        <>
            <h1>{searchText}</h1>
            <hr/>
            {
                isLoading && (<p>Cargando...</p>)
            }
            <div className="card-grid">
                {
                    imagesData.map((item: ImagesProps) => (
                        <GifItem 
                            key={item.id}
                            {...item}
                            />
                    ))
                }
            </div>
        </>
    )
}
