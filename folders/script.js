document.getElementById("botao_curriculo").addEventListener("click", function() {
    // Criar um link temporário
    var link = document.createElement("a");
    // Adicionar atributos ao link
    link.href = "./folders/arquivos/Curriculo_Nathan_Thomaz.pdf"; // Substitua pelo caminho real do seu currículo
    link.download = "Curriculo_Nathan_Thomaz.pdf"; // Nome do arquivo a ser baixado
    // Simular um clique no link
    link.click();
});
