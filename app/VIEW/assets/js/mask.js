const mascaras = () => {
  $(document).ready(function () {
    $("#telefone").mask("(99) 9999-9999");
    $("#celular_contato").mask("(00) 00000-0000");
    $("#telefone_edit").mask("(99) 9999-9999");
    $("#celular_contato_edit").mask("(00) 00000-0000");
  });

  function removeCharacters(phone) {
    return phone.replace(/\D/g, "");
  }
};

const dataFormatada = (data) => {
  var vetData = data.split("-");
  const date = new Date(vetData[0], vetData[1] - 1, vetData[2]);

  var dia = date.getDate();
  var mes = date.getMonth() + 1;
  var ano = date.getFullYear();

  if (dia.toString().length == 1) dia = "0" + dia;
  if (mes.toString().length == 1) mes = "0" + mes;

  const dataFormat = dia + "/" + mes + "/" + ano;

  return dataFormat;
};

export { mascaras, dataFormatada };
