import api from "../api";

export const buscarLocalizacoes = async (page: number) => {
    const { data } = await api.get(`location/?page=${page}`);
    return data;
};

export const getLocalizacao = async (id: string) => {
    const { data } = await api.get(`location/${id}`);
    return data;
};

export const getLocalizacaoPath = async (pathURL: string) => {
    const { data } = await api.get(`${pathURL}`);
    return data;
};
