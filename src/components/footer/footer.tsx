import { Container } from "react-bootstrap";
import { FaGithub} from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="mt-5 py-3 bg-light text-dark">
            <Container>
                <div className="d-flex justify-content-center">
                    <a className="me-3 text-dark" href="https://github.com/alessandravgs" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={24} />
                    </a>
                </div>
                <div className="text-center mt-3">
                    &copy; {new Date().getFullYear()} Alessandra Gonçalves
                </div>
            </Container>
        </footer>
    );
};
