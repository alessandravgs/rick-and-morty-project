import { Card } from "react-bootstrap";
import { EpisodioCard, IPropsCharacterDetail } from "..";

export const PersonagemDetalhe = ({
    character,
    episodes,
}: IPropsCharacterDetail) => {
    return (
        <section className="my-4">
            <h1 className="titulo mt-2 text-center">Detalhes do Personagem</h1>
            <Card className="my-4 p-4 d-flex flex-lg-row justify-content-evenly align-items-center">
                <div className="d-flex flex-column justify-content-evenly">
                    <div className="fs-1 fw-bold">
                        {character.name}
                        <p style={{ fontWeight: 'bold', color: getStatusColor(character.status) }}>
                            Status: {character.status}
                        </p>
                    </div>
                    <p>
                        <span className="info">Espécie:</span>{" "} {character.species}
                    </p>
                    <p>
                        <span className="info">Origem:</span>{" "} {character.origin.name}
                    </p>
                    <div>
                        <span className="info">Última localização:</span> {character.location.name}
                    </div>
                </div>
                <Card.Img
                    style={{ maxWidth: "20rem" }}
                    src={character.image}
                />
            </Card>
            <Card className="my-4 p-4">
                <p className="fs-3 fw-bold text-center">
                    {character.name} aparece nos seguintes episódios:
                </p>
            </Card>
            <div className="row">
                {Object.values(episodes)?.map((episode, index) => (
                    <EpisodioCard key={index} episode={episode} />
                ))}
            </div>
        </section>
    );
};

const getStatusColor = (status: string) => {
    switch (status) {
        case 'Alive':
            return 'green';
        case 'Dead':
            return 'red';
        default:
            return 'gray';
    }
};
