import { FC } from "react";
import { useFetchGift } from "../Hooks/useFetchGift";
import { ImagesProps } from "../Models/GiftModels";
import { GiftItem } from "./GiftItem";

interface GiftGridProps {
    searchText: string;
}

export const GiftGrid: FC<GiftGridProps> = ({ searchText }) => {

    const {imagesData, isLoading} = useFetchGift(searchText);

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
                        <GiftItem 
                            key={item.id}
                            {...item}
                            />
                    ))
                }
            </div>
        </>
    )
}
