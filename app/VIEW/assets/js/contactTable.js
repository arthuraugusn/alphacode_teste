"use strict";

import { getContacts } from "./contact.js";
import { deleteCon, editCon, postCon, saveEditCon } from "./buttons.js";
import { mascaras, dataFormatada } from "./mask.js";

const createTable = async (arrayContacts) => {
  const contact_group = document.querySelector(".contact-items");

  arrayContacts.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("contact");

    let nome = document.createElement("p");
    nome.textContent = element.name;

    let data_nascimento = document.createElement("p");
    data_nascimento.textContent = dataFormatada(element.birth_date);

    let email = document.createElement("p");
    email.textContent = element.email;

    let celular = document.createElement("p");
    celular.textContent = element.cellphone;

    let img1 = document.createElement("img");
    img1.src = "./assets/img/editar.png";
    img1.id = element.id;
    img1.classList.add("btn-edit");

    let img2 = document.createElement("img");
    img2.src = "./assets/img/excluir.png";
    img2.id = element.id;
    img2.classList.add("btn-excluir");

    let divImgs = document.createElement("div");

    div.appendChild(nome);
    div.appendChild(data_nascimento);
    div.appendChild(email);
    div.appendChild(celular);
    divImgs.appendChild(img1);
    divImgs.appendChild(img2);
    div.appendChild(divImgs);
    contact_group.appendChild(div);
    document.getElementById("contacts-section").classList.add("height");
  });

  await deleteCon();
  await editCon();
  await postCon();
  await saveEditCon();
  mascaras();

  return contact_group;
};

const contacts = await getContacts();

createTable(contacts);
