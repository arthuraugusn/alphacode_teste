const url = "http://127.0.0.1/";

const getContacts = async () => {
  const response = await fetch(url);

  const contacts = response.json();

  return contacts;
};

const getContact = async (id) => {
  let linkGet = url + `?id=${id}`;

  const response = await fetch(linkGet);

  const contact = response.json();

  localStorage.setItem("check_wpp", contact.check_wpp);

  return contact;
};

const deleteContact = async (id) => {
  let linkDelete = url + `?id=${id}`;

  const init = {
    method: "DELETE",
  };

  const response = await fetch(linkDelete, init);

  return response.status;
};

const postContact = async (contact) => {
  const init = {
    method: "POST",
    body: JSON.stringify(contact),
    headers: {
      "content-type": "application/json",
    },
  };

  const response = await fetch(url, init);

  return response.status;
};

const updateContact = async (contact, id) => {
  const init = {
    method: "PUT",
    body: JSON.stringify(contact),
    headers: {
      "content-type": "application/json",
    },
  };

  let linkUpdate = url + `?id=${id}`;

  const response = await fetch(linkUpdate, init);

  return response.status;
};

export { getContacts, deleteContact, postContact, getContact, updateContact };
