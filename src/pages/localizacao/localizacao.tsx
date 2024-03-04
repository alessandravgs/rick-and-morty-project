import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { Pagination, SectionCard, ErrorPage, LocalizacaoCard } from "../../components";
import * as service from "../../service";

export const Localizacao = () => {
    const [locations, setLocations] = useState([]);
    const [numPage, setNumPage] = useState(
        parseInt(localStorage.getItem("RMnumPage") || "1"),
    );
    const [numOfPages, setNumOfPages] = useState(1);
    const [erro, deuErro] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");


    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const data = await service.buscarLocalizacoes(numPage);
                setLocations(data.results);
                setNumOfPages(data.info.pages);
            } catch (error) {
                setErrorMessage("Não foi possível carregar as localizações.");
                deuErro(true);
                console.error(error);
            } 
        };
        localStorage.setItem("RMnumPage", numPage.toString());
        fetchLocations();
    }, [numPage]);

    return (
        <Container>
            {(erro && <ErrorPage errorMessage= {errorMessage} />) || (
                <>
                    <h1 className="titulo">Localizações</h1>
                    <SectionCard>
                        {locations?.map((location, index) => {
                            return (
                                <LocalizacaoCard key={index} location={location} />
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
