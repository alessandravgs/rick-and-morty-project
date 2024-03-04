import { Card } from "react-bootstrap";
import { PersonagemCard, IPropsEpisodeDetail } from "..";

export const EpisodioDetalhe = ({ episode, characters }: IPropsEpisodeDetail) => {
    return (
        <section className="my-4">
            <h1 className="titulo mt-2 text-center">Detalhes do Episódio</h1>
            <Card className="my-4 p-4 d-flex flex-lg-row justify-content-evenly align-items-center">
                <div className="d-flex flex-column justify-content-evenly">
                    <div className="fs-1 fw-bold">{episode?.name}</div>
                    <span>
                        <br />
                        <span className="info">Temporada:</span>{" "} {episode?.episode}
                    </span>
                    <p>
                        <span className="info">Data de Exibição:</span>{" "} {episode?.air_date}
                    </p>
                </div>
            </Card>
            <Card className="my-4 p-4">
                <h1 className="titulo mt-2 text-center">Personagens</h1>
            </Card>
            <div className="row">
                {Object.values(characters)?.map((character, index) => (
                    <PersonagemCard key={index} character={character} />
                ))}
            </div>
        </section>
    );
};
