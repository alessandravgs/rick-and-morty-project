import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { IPropsLocationCard } from "..";

export const LocalizacaoCard = ({ location }: IPropsLocationCard) => {
    return (
        <div className="wrap-card col col-md-4 col-xl-3 mb-4">
            <Link
                className="card text-decoration-none pointer"
                to={`/localizacao/${location.id}`}
            >
                <Card
                    className="card-card card-card-episode"
                    style={{ minWidth: "15rem" }}
                >
                    <Card.Body>
                        <Card.Title className="mb-0">
                            {location.name}
                        </Card.Title>
                        <Card.Text>
                            <br />
                            <span className="info">
                                Tipo:&nbsp;  
                            </span> 
                            {location.type}
                        </Card.Text>
                        <Card.Text>
                            <span className="info">
                                Dimensão:&nbsp;  
                            </span> 
                            {location.dimension}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};
