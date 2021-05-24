import api from "../api/api";

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

  export const deleteArticles = async (params) => {
    let summary = [];
    try {
      const { data } = await api.delete(`/artigo/${params}`);
      summary = data;
    } catch (error) {
      alert("Ocorreu um erro ao excluir o artigo");
    }
    return summary;
  }

  export const editArticles = async (obj, id) => {
    let summary = [];
    const req = {
      titulo: obj.titulo,
      conteudo: obj.conteudo
    }
    try {
      const { data } = await api.put(`/artigo/${id}`, JSON.stringify(req), { headers: { 'Content-Type': 'application/json' } });
      summary = data;
    } catch (error) {
      alert("Ocorreu um erro ao buscar os items");
    }
    return summary;
  }

  export const getUniqueArticle = async (params) => {
    let summary = [];
    try {
      const { data } = await api.get(`/artigo/${params}`);
      summary = data;
    } catch (error) {
      alert("Ocorreu um erro ao buscar os items");
    }
    return summary;
  }