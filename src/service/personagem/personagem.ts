import api from "../api";

export const getPersonagens = async (page: number) => {
    const { data } = await api.get(`character/?page=${page}`);
    return data;
};

export const getPersonagem = async (id: string) => {
    const { data } = await api.get(`character/${id}`);
    return data;
};

export const getPersonagemPath = async (pathURL: string) => {
    const { data } = await api.get(`${pathURL}`);
    return data;
};
