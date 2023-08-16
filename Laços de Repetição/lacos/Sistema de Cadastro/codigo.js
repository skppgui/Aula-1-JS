/* Criando a função MENU */

function menu() {

    opcao = parseInt(prompt(
        "------ Menu Principal ------\n\n" +
        "1 - Cadastro de Cliente \n" +
        "2 - Cadastro de Colaborador \n" +
        "3 - Cadastro de Produto \n" +
        "4 - Sair do Sistema"
    ));


    switch (opcao) {
        case 1:
            cadastrar_cliente();
            break;
        case 2:
            cadastrar_colaborador();
            break;
        case 3:
            cadastrar_produto();
            break;
        default:
            alert("Finalizando o Sistema de Cadastro")
            document.getElementById("relatorio").innerHTML = "<p>Obrigado!</p>"
    }
};


/* Função Cadastrar Cliente */
function cadastrar_cliente() {
    let x = "n";
    relatorio = "*- Relatório de Clientes -* <br>";

    while (x.toUpperCase() != "S")
        id = parseInt(prompt("Digite o ID do Cliente"))
    nome = prompt("Digite o Nome do Cliente")
    endereco = prompt("Digite o Endereço de Cliente")

    relatorio = relatorio + "<br>------------------------------------------+<br><br>" +
        "ID : " + id + "<br>" +
        "NOME: " + nome + "<br>" +
        "ENDEREÇO :" + endereco +
        "<br>------------------------------------------+<br><br>"

    confirme = prompt("Finalizar Cadastro S - para sim ou N para - Não ?");

    if (confirme.toUpperCase == "S") {
        x = "S";

    };

        document.getElementById("relatorio").innerHTML = "<p>" + relatorio + "</p>";









}





