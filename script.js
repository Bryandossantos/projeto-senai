function toggleOptions(optionsId, numericInputId) {
    const options = document.getElementById(optionsId);
    options.style.display = options.style.display === "block" ? "none" : "block";

    // Oculta o campo numérico quando as opções são ocultadas
    if (options.style.display === "none") {
      document.getElementById(numericInputId).style.display = "none";
    }
  }

  function selectOption(option, dropdownButtonId, numericInputId) {
    const dropdownButton = document.getElementById(dropdownButtonId);

    switch (option) {
      case 1:
        dropdownButton.textContent = "Tela selecionada";
        toggleNumericInput(numericInputId);
        break;
      case 2:
        dropdownButton.textContent = "Teclado selecionado";
        toggleNumericInput(numericInputId);
        break;
      case 3:
        dropdownButton.textContent = "Processador i5 de 6°gen selecionado";
        toggleNumericInput(numericInputId);
        break;
      case 4:
        dropdownButton.textContent = "Memória RAM 4GB selecionada";
        toggleNumericInput(numericInputId); // Chama a função para exibir o campo numérico
        break;
      default:
        dropdownButton.textContent = "Selecione uma opção";
        document.getElementById(numericInputId).style.display = "none";
    }
  }

  function toggleNumericInput(numericInputId) {
    const numericInput = document.getElementById(numericInputId);
    numericInput.style.display = numericInput.style.display === "block" ? "none" : "block";
  }

  function addSelectedOption(selectedListId, dropdownButtonId, numericInputId, numericValueId) {
    const selectedList = document.getElementById(selectedListId);
    const dropdownButton = document.getElementById(dropdownButtonId);
    const numericInput = document.getElementById(numericInputId);
    const numericValue = document.getElementById(numericValueId).value;

    const selectedOption = document.createElement("li");
    selectedOption.textContent = `${dropdownButton.textContent} - ${numericValue}`;

    selectedList.appendChild(selectedOption);

    // Limpa o conteúdo da caixa de seleção e reinicia o botão
    dropdownButton.textContent = "Selecione uma opção";
    numericInput.style.display = "none";
    document.getElementById(numericValueId).value = "";
  }