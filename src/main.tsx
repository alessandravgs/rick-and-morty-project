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
                    <Route path="/rick-and-morty-project" element={<Personagem />} />
                    <Route path="/rick-and-morty-project/personagem/:id" element={<PersonagemDetalhes />}/>
                    <Route path="/rick-and-morty-project/episodio" element={<Episodios />} />
                    <Route path="/rick-and-morty-project/episodio/:id" element={<EpisodioDetalhes />} />
                    <Route path="/rick-and-morty-project/localizacao" element={<Localizacao />} />
                    <Route path="/rick-and-morty-project/localizacao/:id" element={<LocalizacaoDetalhes />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);
