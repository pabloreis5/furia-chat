import axios from 'axios';

const api = axios.create({
  baseURL: 'https://furia-chat-zyek.onrender.com'
});

export const getElenco = async () => {
  try {
    const response = await api.get('/elenco');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar elenco:', error);
    return [];
  }
};

export const getJogos = async () => {
  try {
    const response = await api.get('/jogos');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar jogos:', error);
    return [];
  }
};

export const getResultado = async () => {
  try {
    const response = await api.get('/resultados');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar resultados:', error);
    return [];
  }
};

export const getCuriosidade = async () => {
  try {
    const response = await api.get('/curiosidades');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar curiosidades:', error);
    return "FURIA é pura bala. 😎";
  }
};
