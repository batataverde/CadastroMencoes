// This is a JavaScript file
alert("funcionou!")

var nome
var selecao
var selecaodisciplina

function cadastrar() 
{
    nome = document.getElementById('inputnome').value 
    document.getElementById('nomealuno').textContent = nome 

    selecao = document.getElementById('disciplina')
    selecaodisciplina = selecao.options[selecao.SelectIndex].value 
}


