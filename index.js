const listaCompromissos = document.getElementById("listaCompromissos");

fetch("https://api-agenda.bohr.io/api/compromisso")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((compromisso) => {
      const div = document.createElement("div");
      const pId = document.createElement("p");
      const pDescricao = document.createElement("p");
      const pData = document.createElement("p");
      const pHora = document.createElement("p");

      div.appendChild(pId);
      div.appendChild(pDescricao);
      div.appendChild(pData);
      div.appendChild(pHora);

      listaCompromissos.appendChild(div);

      pId.textContent = compromisso.ID_COMPROMISSO;
      pDescricao.textContent = compromisso.DESCRICAO_COMPROMISSO;
      pData.textContent = compromisso.DATA_COMPROMISSO;
      pHora.textContent = compromisso.HORA_COMPROMISSO;
    });
  });
