import { MouseEvent, FC, useState, useEffect } from "react";
import { PaginationModel } from "../Models/GifModels";

interface paginationProps {
    data: PaginationModel | undefined;
    received: Function
}

export const PageComponent: FC<paginationProps> = ({ data, received }) => {

    const [index, setIndex] = useState(1);
    const [isFirstPage, setIsFirstPage] = useState(true);
    const [isLastPage, setIsLastPage] = useState(false);

    const [isFirstActive, setIsFirstActive] = useState(true);
    const [isSecondActive, setIsSecondActive] = useState(false);
    const [isThirdActive, setIsThirdActive] = useState(false)

    const handleOnClickPage = (event: MouseEvent<HTMLAnchorElement>) => {
        if(!data) return;

        let newPage = data.offset;
        switch (event.currentTarget.id) {
            case "previous":
                newPage -= 10;
                setIndex(item => item - 1);
                break;
            case "second":
                newPage += 10;
                break;
            case "third":
                newPage += 20;
                break;
            case "next":
                newPage += 30;
                setIndex(item => item + 1);
                break;
        }

    }

    useEffect(() => {
        console.log("data", data);
    }, [data]);

    return (
        <>
            <nav aria-label="...">
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${isFirstPage ? 'disabled' : ''}`}>
                        <a className="page-link" id="previous" onClick={handleOnClickPage}>Previous</a>
                    </li>
                    <li className={`page-item ${isFirstActive ? 'active' : ''}`}>
                        <a className="page-link" id="first" onClick={handleOnClickPage}>{index}</a>
                    </li>
                    <li className={`page-item ${isSecondActive ? 'active' : ''}`}>
                        <a className="page-link" id="second" onClick={handleOnClickPage}>{index + 1}</a>
                    </li>
                    <li className={`page-item ${isThirdActive ? 'active' : ''}`}>
                        <a className="page-link" id="third" onClick={handleOnClickPage}>{index + 2}</a>
                    </li>
                    <li className={`page-item ${isLastPage ? 'disabled' : ''}`}>
                        <a className="page-link" id="next" onClick={handleOnClickPage}>Next</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
