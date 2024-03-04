import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

import {
    BtnVoltar,
    ITypeCharacterCard,
    ITypeLocation,
    LocalizacaoDetalhe,
    ErrorPage
} from "../../components";
import * as service from "../../service";

export const LocalizacaoDetalhes = () => {
    const [location, setLocation] = useState<ITypeLocation>();
    const [residents, setResidents] = useState<ITypeCharacterCard[]>([]);
    const [erro, deuErro] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const { id } = useParams();

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const data = await service.getLocalizacao(id as string);
                setLocation(data);

                const urlPath = data.residents.map((url: string) =>
                    url.slice(32),
                );
                const fetchCharacter = urlPath.map(async (url: string) => {
                    const dataCharacter = await service.getPersonagemPath(url);
                    return dataCharacter;
                });
                const allCharacter = await Promise.all(fetchCharacter);
                setResidents(allCharacter);
            } catch (error) {
                setErrorMessage("Não foi possível carregar o episódio.");
                deuErro(true);
                console.error(error);
            } 
        };
        fetchLocation();
    }, []);

    return (
        <Container>
            {(erro && <ErrorPage errorMessage= {errorMessage} />) || (
                <>
                    <BtnVoltar />
                    {location && (
                        <LocalizacaoDetalhe
                            location={location}
                            residents={residents}
                        />
                    )}
                </>
            )}
        </Container>
    );
};
