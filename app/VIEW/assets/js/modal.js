"use strict";

import { getContact } from "./contact.js";
import { mascaras } from "./mask.js";

const tableModal = async () => {
  const modal = document.querySelector(".modal-body");

  modal.innerHTML = "";

  const contact = await getContact(localStorage.getItem("id")).then((value) => {
    if (value.check_wpp == 0) {
      modal.innerHTML += `<div class="container">
    <form class="form">
      <div class="form-one">
        <div class="form-group">
          <label for="nome">Nome completo</label>
          <input
            type="text"
            class="form-control"
            id="nome_edit"
            name="nome_edit"
            placeholder="Ex: ${value.name}"
          />
        </div>
        <div class="form-group">
          <label for="email">E-mail</label>
          <input
            type="email"
            class="form-control"
            id="email_edit"
            name="email_edit"
            placeholder="Ex: ${value.email}"
          />
        </div>
        <div class="form-group">
          <label for="telefone">Telefone para contato</label>
          <input
            type="text"
            class="form-control"
            id="telefone_edit"
            name="telefone_edit"
            placeholder="Ex: ${value.phone}"
          />
        </div>
  
        <div class="container-checkbox">
          <div class="checkbox">
            <input
              type="checkbox"
              class="form-check-input"
              id="notificacoes_wpp_edit"
              name="notificacoes_wpp_edit"
            />
            <label class="form-check-label" for="notificacoes_wpp"
              >Número de celular possui Whatsapp</label
            >
          </div>
          <div>
            <input
              type="checkbox"
              class="form-check-input"
              id="notificacoes_sms_edit"
              name="notificacoes_sms_edit"
            />
            <label class="form-check-label" for="notificacoes_sms"
              >Enviar notificações por SMS</label
            >
          </div>
        </div>
      </div>
      <div class="form-one">
        <div class="form-group">
          <label for="data_nascimento">Data de nascimento</label>
          <input
            type="date"
            class="form-control"
            id="data_nascimento_edit"
            name="data_nascimento_edit"
          />
        </div>
        <div class="form-group">
          <label for="profissao">Profissão</label>
          <input
            type="text"
            class="form-control"
            id="profissao_edit"
            name="profissao_edit"
            placeholder="Ex: ${value.profession}"
          />
        </div>
        <div class="form-group">
          <label for="celular_contato">Celular para contato</label>
          <input
            type="text"
            class="form-control"
            id="celular_contato_edit"
            name="celular_contato_edit"
            placeholder="Ex: ${value.cellphone}"
          />
        </div>
        <div class="container-checkbox">
          <div class="checkbox">
            <input
              type="checkbox"
              class="form-check-input"
              id="notificacoes_email_edit"
              name="notificacoes_email_edit"
            />
  
            <label class="form-check-label" for="notificacoes_email"
              >Receber notificações por E-mail</label
            >
          </div>
        </div>
      </div>
    </form>
  </div>`;
    } else {
      modal.innerHTML += `<div class="container">
    <form class="form">
      <div class="form-one">
        <div class="form-group">
          <label for="nome">Nome completo</label>
          <input
            type="text"
            class="form-control"
            id="nome_edit"
            name="nome_edit"
            placeholder="Ex: ${value.name}"
          />
        </div>
        <div class="form-group">
          <label for="email">E-mail</label>
          <input
            type="email"
            class="form-control"
            id="email_edit"
            name="email_edit"
            placeholder="Ex: ${value.email}"
          />
        </div>
        <div class="form-group">
          <label for="telefone">Telefone para contato</label>
          <input
            type="text"
            class="form-control"
            id="telefone_edit"
            name="telefone_edit"
            placeholder="Ex: ${value.phone}"
          />
        </div>
  
        <div class="container-checkbox">
          <div class="checkbox">
            <input
              type="checkbox"
              class="form-check-input"
              id="notificacoes_wpp_edit"
              name="notificacoes_wpp_edit"
              checked="true"
            />
            <label class="form-check-label" for="notificacoes_wpp"
              >Número de celular possui Whatsapp</label
            >
          </div>
          <div>
            <input
              type="checkbox"
              checked="true"
              class="form-check-input"
              id="notificacoes_sms_edit"
              name="notificacoes_sms_edit"
            />
            <label class="form-check-label" for="notificacoes_sms"
              >Enviar notificações por SMS</label
            >
          </div>
        </div>
      </div>
      <div class="form-one">
        <div class="form-group">
          <label for="data_nascimento">Data de nascimento</label>
          <input
            type="date"
            class="form-control"
            id="data_nascimento_edit"
            name="data_nascimento_edit"
          />
        </div>
        <div class="form-group">
          <label for="profissao">Profissão</label>
          <input
            type="text"
            class="form-control"
            id="profissao_edit"
            name="profissao_edit"
            placeholder="Ex: ${value.profession}"
          />
        </div>
        <div class="form-group">
          <label for="celular_contato">Celular para contato</label>
          <input
            type="text"
            class="form-control"
            id="celular_contato_edit"
            name="celular_contato_edit"
            placeholder="Ex: ${value.cellphone}"
          />
        </div>
        <div class="container-checkbox">
          <div class="checkbox">
            <input
              type="checkbox"
              class="form-check-input"
              id="notificacoes_email_edit"
              name="notificacoes_email_edit"
              checked="true"
            />
  
            <label class="form-check-label" for="notificacoes_email"
              >Receber notificações por E-mail</label
            >
          </div>
        </div>
      </div>
    </form>
  </div>`;
    }
  });

  mascaras();
};

export { tableModal };
