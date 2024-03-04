import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import {
    EpisodioCard,
    Pagination,
    SectionCard,
    ErrorPage,
} from "../../components";
import * as service from "../../service";

export const Episodios = () => {
    const [episodes, setEpisodes] = useState([]);
    const [numPage, setNumPage] = useState(
        parseInt(localStorage.getItem("RMnumPage") || "1"),
    );
    const [numOfPages, setNumOfPages] = useState(1);
    const [erro, deuErro] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");


    useEffect(() => {
        const fetchEpisodes = async () => {
            try {
                const data = await service.getEpisodios(numPage);
                setEpisodes(data.results);
                setNumOfPages(data.info.pages);
            } catch (error) {
                console.error(error);
                setErrorMessage("Não foi possível carregar os episódios.");
                deuErro(true);
            }
        };
        localStorage.setItem("RMnumPage", numPage.toString());
        fetchEpisodes();
    }, [numPage]);

    return (
        <Container>
            {(erro && <ErrorPage errorMessage= {errorMessage} />) || (
                <>
                    <h1 className="titulo">Episódios</h1>
                    <SectionCard>
                        {episodes?.map((episode, index) => {
                            return (
                                <EpisodioCard key={index} episode={episode} />
                                );
                            })}
                    </SectionCard>
                    <Pagination
                        setPage={setNumPage}
                        numPage={numPage}
                        numOfPages={numOfPages}
                    />
                </>
            )}
        </Container>
    );
};
