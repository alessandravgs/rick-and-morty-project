import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

import {
    BtnVoltar,
    EpisodioDetalhe,
    ITypeCharacterCard,
    ITypeEpisode,
    ErrorPage,
} from "../../components";
import * as service from "../../service";

export const EpisodioDetalhes = () => {
    const [episode, setEpisode] = useState<ITypeEpisode>();
    const [characters, setCharacters] = useState<ITypeCharacterCard[]>([]);

    const [erro, deuErro] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const { id } = useParams();

    useEffect(() => {
        const fecthEpisode = async () => {
            try {
                const data = await service.getEpisodio(id as string);
                setEpisode(data);

                const urlPath = data.characters.map((url: string) =>
                    url.slice(32),
                );
                const fetchCharacter = urlPath.map(async (url: string) => {
                    const dataCharacter = await service.getPersonagemPath(url);
                    return dataCharacter;
                });
                const allCharacter = await Promise.all(fetchCharacter);
                console.log(allCharacter);
                setCharacters(allCharacter);
            } catch (error) {
                console.error(error);
                setErrorMessage("Não foi possível carregar o episódio.");
                deuErro(true);
            }
        };
        fecthEpisode();
    }, []);

    return (
        <Container>
            {(erro && <ErrorPage errorMessage= {errorMessage} />) || (
                <>
                    <BtnVoltar />
                    {episode && (
                        <EpisodioDetalhe
                            episode={episode}
                            characters={characters}
                        />
                    )}
                </>
            )}
        </Container>
    );
};
