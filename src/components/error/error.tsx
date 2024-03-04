interface ErrorPageProps {
    errorMessage: string;
}

export const ErrorPage = ({ errorMessage }: ErrorPageProps) => {
    return (
        <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ height: "85vh" }}
        >
            <h1>Erro!</h1>
            <h2>{errorMessage}</h2>
            <p>Por favor, tente novamente mais tarde.</p>
        </div>
    );
};
