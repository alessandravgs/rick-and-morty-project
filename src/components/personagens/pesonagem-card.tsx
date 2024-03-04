import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { IPropsCharacterCard } from "..";

export const PersonagemCard = ({ character }: IPropsCharacterCard) => {
    return (
        <div className="wrap-card col col-md-4 col-xl-3 mb-4">
            <Link
                className="card text-decoration-none pointer"
                to={`/rick-and-morty-project/personagem/${character.id}`}
            >
                <Card className="card-card" style={{ minWidth: "15rem" }}>
                    <Card.Img variant="top" src={character.image} />
                    <Card.Body>
                        <Card.Title className="mb-0 text-center">
                            {character.name}
                        </Card.Title>
                        <Card.Text className="text-center">{character.species}</Card.Text>
                        <Card.Text className="text-center">
                            <p style ={{fontWeight: 'bold', color: getStatusColor(character.status)}}>
                                <span style={{ fontWeight: 'bold', color: 'grey' }}>
                                    Status:&nbsp;  
                                </span> 
                                {character.status}
                            </p>
                        </Card.Text>
                        <Card>
                        <Card.Body>
                            <Card.Text>
                                <span style={{ fontWeight: 'bold', color: 'grey' }}>
                                    Última localização:
                                </span>
                                <br />
                                {character.location.name}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Card.Body>
                </Card>
            </Link>
        </div>
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


