import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

import {
    BtnVoltar,
    PersonagemDetalhe,
    ITypeCharacterDetail,
    ITypeEpisode,
    ErrorPage,

} from "../../components";
import * as service from "../../service";

export const PersonagemDetalhes = () => {
    const [character, setCharacter] = useState<ITypeCharacterDetail>();
    const [episodes, setEpisodes] = useState<ITypeEpisode[]>([]);

    const [erro, deuErro] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const { id } = useParams();

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const data = await service.getPersonagem(id as string);
                setCharacter(data);
                const pathUrl = data.episode.map((url: string) =>
                    url.slice(32),
                );
                const fetchEpisode = pathUrl.map(async (url: string) => {
                    const dataEpisode = await service.getEpisodioPath(url);
                    return dataEpisode;
                });
                const allEpisodes: ITypeEpisode[] =
                    await Promise.all(fetchEpisode);
                setEpisodes(allEpisodes);
            } catch (error) {
                console.error(error);
                setErrorMessage("Não foi possível carregar o episódio.");
                deuErro(true);
            } 
        };
        fetchCharacter();
    }, []);

    return (
        <Container>
            {(erro && <ErrorPage errorMessage= {errorMessage} />) || (
                <>
                    <BtnVoltar />
                    {character && (
                        <PersonagemDetalhe
                            character={character}
                            episodes={episodes}
                        />
                    )}
                </>
            )}
        </Container>
    );
};
