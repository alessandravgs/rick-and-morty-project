import { PersonagemCard, IPropsLocationDetail } from "..";
import { Card } from "react-bootstrap";

export const LocalizacaoDetalhe = ({
    location,
    residents,
}: IPropsLocationDetail) => {
    return (
        <section className="my-4">
            <h1 className="titulo mt-2 text-center">Detalhes da Localização</h1>
            <Card className="my-4 p-4 d-flex flex-lg-row justify-content-evenly align-items-center">
                <div className="d-flex flex-column justify-content-evenly">
                    <div className="fs-1 fw-bold">{location?.name}</div>
                    <p>
                        <br />
                        <span className="info">Tipo:</span>{" "} {location?.type}
                    </p>
                    <p>
                        <span className="info">Dimensão:</span>{" "} {location?.dimension}
                    </p>
                </div>
            </Card>
            <Card className="my-4 p-4">
                <h1 className="titulo mt-2 text-center">Residentes</h1>
            </Card>
            <div className="row">
                {Object.values(residents)?.map((resident, index) => (
                    <PersonagemCard key={index} character={resident} />
                ))}
            </div>
        </section>
    );
};
