import React, { useState } from "react";
import { deleteArticles } from "../../actions/ApiArticles";
import Header from "../../components/modules/header/Header";

const ExcluirArtigo = () => {
  const [id, setId] = useState("");

  async function deleteA() {
    try {
      const resp = await deleteArticles(id);
      alert(resp.message);
    } catch (err) {
      console.log("erro");
    }
    setId('')
  }

  const deletarArtigo = () => {
    deleteA();
  };

  return (
    <>
      <Header />
      <h1>Excluir Artigo</h1>
      <div className="box">
        <div>
          <input
            placeholder="Id do Artigo"
            className="input-msg"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button onClick={deletarArtigo}>Excluir Artigo</button>
        </div>
      </div>
    </>
  );
};

export default ExcluirArtigo;
