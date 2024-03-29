import { Navbar as BoostrapNavbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <BoostrapNavbar expand="sm" className="bg-body-tertiary mb-1">
            <Container className="align-items-center">
                <BoostrapNavbar.Brand href="/">
                    <div className="d-flex flex-row align-items-baseline gap-2">
                        <img
                            src="/rick-and-morty-project//Rick-And-Morty-Symbol.png"
                            width="200px"
                            alt="logo"
                        ></img>
                    </div>
                </BoostrapNavbar.Brand>
                <BoostrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BoostrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link
                            className="nav-link"
                            to="/rick-and-morty-project">
                            {" "}
                            Personagens
                        </Link>

                        <Link
                            className="nav-link"
                            to="/rick-and-morty-project/episodio">
                            {" "}
                            Episódios
                        </Link>

                        <Link
                            className="nav-link"
                            to="/rick-and-morty-project/localizacao" >
                            {" "}
                            Localizações
                        </Link>
                    </Nav>
                </BoostrapNavbar.Collapse>
            </Container>
        </BoostrapNavbar>
    );
};
