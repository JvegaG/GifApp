import { FC, useState } from "react";
import { useFetchGiphy } from "../Hooks/useFetchGiphy";
import { ImagesProps } from "../Models/GifModels";
import { OptionEnum, GifItem } from "./_Component.index";
import { PageComponent } from "./PageComponent";

interface GiftGridProps {
    searchText: string;
    optionSearch: OptionEnum;
}

export const GifGrid: FC<GiftGridProps> = ({ searchText, optionSearch }) => {
    
    const [currentPage, setCurrentPage] = useState(0);
    const { imagesData, isLoading, pagination } = useFetchGiphy(searchText, optionSearch, currentPage);

    return (
        <>
            <h1>{searchText}</h1>
            <hr />
            {isLoading && (<p>Cargando...</p>)}
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
            <PageComponent
                data={pagination}
                received={(page: number) => setCurrentPage(page)}
            />
                
        </>
    )
}
