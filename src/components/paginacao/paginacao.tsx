import { useState } from "react";
import * as React from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

interface IPropsPagination {
    setPage: React.Dispatch<React.SetStateAction<number>>;
    numPage: number;
    numOfPages: number;
}

export const Pagination: React.FC<IPropsPagination> = ({
    setPage,
    numOfPages,
    numPage,
}) => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const handlePageOne = () => {
        setPage(1);
        setCurrentPage(1);
    };

    const handlePrev = () => {
        setPage((n: number) => n - 1);
        setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        setPage((n: number) => n + 1);
        setCurrentPage(currentPage + 1);
    };

    return (
    <nav aria-label="Page navigation" className="text-center">
            <ul className="pagination justify-content-center align-items-center pt-4 flex-wrap gap-2">
            <section className="d-flex justify-content-center align-items-center gap-2">
                {numPage !== 1 && (
                    <>
                        <li className="page-item page-item-prev px-4">
                            <button
                                onClick={handlePageOne}
                                className="page-link"
                            >
                                <span className="fs-6 text-nowrap">
                                    Primeira Página
                                </span>
                            </button>
                        </li>
                        <li className="page-item page-item-prev">
                            <button
                                onClick={handlePrev}
                                className="page-link"
                            >
                                <GrPrevious />
                            </button>
                        </li>
                    </>
                )}
                <div className="num-pag">
                    <strong>
                        Página {currentPage} de {numOfPages}
                    </strong>
                </div>
                {numPage < numOfPages && (
                    <li className="page-item">
                        <button onClick={handleNext} className="page-link">
                            <GrNext />
                        </button>
                    </li>
                )}
            </section>
        </ul>
    </nav>    
    );
};
