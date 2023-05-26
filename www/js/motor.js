// This is a JavaScript file
alert("funcionou!")

var nome
var selecao
var selecaodisciplina
var selecaodisciplina

function Cadastrar() 
{
    nome = document.getElementById('inputnome').value 
    document.getElementById('nomealuno').textContent = nome 

    selecao = document.getElementById('disciplina')
    selecaodisciplina = selecao.options[selecao.SelectedIndex].value 

    selecao = document.getElementById('mencao')
    selecaomencao = selecao.options[selecao.SelectedIndex].value 

    localStorage.sertItem(selecaodisciplina, selecaomencao)

    function listar() {

        var exibirmencao

        selecao = document.getElementById('disciplina')
        selecao = document.getElementById('mencao')

        exibirmencao = localStorage.getItem(selecaodisciplina)

        document.getElementById('exibirdisciplina').text.textContent = selecaodisciplina
        document.getElementById('exibirmencao').text.textContent = exibirmencao
        
    }
}


