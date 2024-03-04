import api from "../api";

export const getEpisodios = async (page: number) => {
    const { data } = await api.get(`episode/?page=${page}`);
    return data;
};

export const getEpisodio = async (id: string) => {
    const { data } = await api.get(`episode/${id}`);
    return data;
};

export const getEpisodioPath = async (pathURL: string) => {
    const { data } = await api.get(`${pathURL}`);
    return data;
};
