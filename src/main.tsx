import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.tsx";
import {
    Episodios,
    EpisodioDetalhes,
    Localizacao,
    LocalizacaoDetalhes,
    Personagem,
    PersonagemDetalhes,
} from "./pages/index.ts";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route path="/" element={<Personagem />} />
                    <Route path="/personagem/:id" element={<PersonagemDetalhes />}/>
                    <Route path="/episodio" element={<Episodios />} />
                    <Route path="/episodio/:id" element={<EpisodioDetalhes />} />
                    <Route path="/localizacao" element={<Localizacao />} />
                    <Route path="/localizacao/:id" element={<LocalizacaoDetalhes />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);
