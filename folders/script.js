document.getElementById("btn_donwload_curriculo").addEventListener("click", function() {
    var link = document.createElement("a");
    link.href = "/folders/arquivos/Curriculo_Nathan_Thomaz.pdf"; // Caminho do currículo
    link.download = "Curriculo_Nathan_Thomaz.pdf"; // Nome do arquivo
    link.click();
});
