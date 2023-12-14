"use strict";

import { deleteContact, postContact, updateContact } from "./contact.js";
import { tableModal } from "./modal.js";

const deleteCon = async () => {
  const botoes = document.querySelectorAll(".btn-excluir");

  botoes.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const status = await deleteContact(btn.id);
      if (status == 204) {
        window.location.reload();
      }
    });
  });
};

const editCon = async () => {
  const botoes = document.querySelectorAll(".btn-edit");
  var modal = new bootstrap.Modal(document.getElementById("meuModal"));

  botoes.forEach((btn) => {
    btn.addEventListener("click", async () => {
      modal.show();
      localStorage.setItem("id", btn.id);
      tableModal();
    });
  });
};

const postCon = async () => {
  const btn = document.getElementById("btn-submit");

  btn.addEventListener("click", async () => {
    const nome = document.getElementById("nome").value;

    const email = document.getElementById("email").value;

    const telefone = document.getElementById("telefone").value;

    const data_nascimento = document.getElementById("data_nascimento").value;

    const profissao = document.getElementById("profissao").value;

    const celular = document.getElementById("celular_contato").value;

    const notificacoes_wpp =
      document.getElementById("notificacoes_wpp").checked;

    const notificacoes_sms =
      document.getElementById("notificacoes_sms").checked;

    const notificacoes_email =
      document.getElementById("notificacoes_email").checked;

    const JSON = {
      name: nome,
      email: email,
      phone: telefone,
      birth_date: data_nascimento,
      profession: profissao,
      cellphone: celular,
      check_wpp: notificacoes_wpp,
      check_email: notificacoes_email,
      check_sms: notificacoes_sms,
    };

    if (
      nome != "" &&
      email != "" &&
      telefone != "" &&
      data_nascimento != "" &&
      profissao != "" &&
      celular != ""
    ) {
      await postContact(JSON);
    } else {
      alert("Você não preencheu todos os campos");

      window.location.reload();
    }
  });
};

const saveEditCon = async () => {
  document
    .getElementById("save-edit-btn")
    .addEventListener("click", async () => {
      const nome = document.getElementById("nome_edit").value;

      const email = document.getElementById("email_edit").value;

      const telefone = document.getElementById("telefone_edit").value;

      const data_nascimento = document.getElementById(
        "data_nascimento_edit"
      ).value;

      const profissao = document.getElementById("profissao_edit").value;

      const celular = document.getElementById("celular_contato_edit").value;

      const notificacoes_wpp = document.getElementById(
        "notificacoes_wpp_edit"
      ).checked;

      const notificacoes_sms = document.getElementById(
        "notificacoes_sms_edit"
      ).checked;

      const notificacoes_email = document.getElementById(
        "notificacoes_email_edit"
      ).checked;

      const JSON = {
        name: nome,
        email: email,
        phone: telefone,
        birth_date: data_nascimento,
        profession: profissao,
        cellphone: celular,
        check_wpp: notificacoes_wpp,
        check_email: notificacoes_email,
        check_sms: notificacoes_sms,
      };

      if (
        nome != "" &&
        email != "" &&
        telefone != "" &&
        data_nascimento != "" &&
        profissao != "" &&
        celular != ""
      ) {
        const status = await updateContact(JSON, localStorage.getItem("id"));

        if (status == 200) {
          alert("Deu tudo certo");
          window.location.reload();
        }
      } else {
        alert("Você não preencheu todos os campos");

        window.location.reload();
      }
    });
};

export { deleteCon, editCon, postCon, saveEditCon };
