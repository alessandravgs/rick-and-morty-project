import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import {
    PersonagemCard,
    Pagination,
    SectionCard,
    ErrorPage,
} from "../../components";
import * as service from "../../service";

export const Personagem = () => {
    const [characters, setCharacters] = useState([]);
    const [numPage, setNumPage] = useState(
        parseInt(localStorage.getItem("RMnumPage") || "1"),
    );
    const [numOfPages, setNumOfPages] = useState(1);
    const [erro, deuErro] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const data = await service.getPersonagens(numPage);
                setCharacters(data.results);
                setNumOfPages(data.info.pages);
            } catch (error) {
                console.error(error);
                setErrorMessage("Não foi possível carregar os personagens.");
                deuErro(true);
            } 
        };
        localStorage.setItem("RMnumPage", numPage.toString());
        fetchCharacters();
    }, [numPage]);

    return (
        <Container>
            {(erro && <ErrorPage errorMessage= {errorMessage} />) || (
                <>
                    <h1 className="titulo">Personagens</h1>
                    <SectionCard>
                        {characters?.map((character, index) => (
                            <PersonagemCard key={index} character={character} />
                            ))}
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
