import api from "../api";

export const getArticles = async () => {
    let summary = [];
    try {
      const { data } = await api.get("/artigo");
      summary = data;
    } catch (error) {
      alert("Ocorreu um erro ao buscar os items");
    }
    return summary;
  }

  export const createArticles = async (params) => {
    let summary = [];
    const obj = {
      titulo: params.titulo,
      conteudo: params.conteudo
    }
    try {
      const { data } = await api.post("/artigo", JSON.stringify(obj), { headers: { 'Content-Type': 'application/json' } });
      summary = data;
    } catch (error) {
      alert("Ocorreu um erro ao cadastrar os items");
    }
    return summary;
  }

  export const editArticles = async () => {
    let summary = [];
    try {
      const { data } = await api.put("/artigo");
      summary = data;
    } catch (error) {
      alert("Ocorreu um erro ao buscar os items");
    }
    return summary;
  }

  export const getUniqueArticle = async () => {
    let summary = [];
    try {
      const { data } = await api.post("/artigo");
      summary = data;
    } catch (error) {
      alert("Ocorreu um erro ao buscar os items");
    }
    return summary;
  }