let contador = 0;
let input = document.getElementById('inputTarefas');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefas(){
    //PEGAR O VALOR DIGITADO NO INPUT
    let valorInput = input.value;

    // SE NAO FOR VAZIO, NEM NULO, NEM INDEFINIDO 
    if((valorInput !== "") && (valorInput !== null) && (valorInput !==undefined)){

    ++contador;

    let novoItem = `<div id="${contador}"class="item clicado"> 
        <div onclick="marcarTarefas(${contador})" class="item-icone">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" id="icone_${contador}"class="bi bi-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
              </svg> 

        </div> 
        <div onclick="marcarTarefa(${contador})"class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})"class="delete"><svg width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
              </svg>Deletar</button>
        </div></div>`;

        //add novo item no main
        main.innerHTML += novoItem;

        //zerar os campinhos 
        input.value ="";
        input.focus();
    }
}

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('classe');
    console.log(classe);

    if(classe=="item"){
        item.classList.add('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('bi bi-circle');
        icone.classList.add('bi-check-circle-fill');

        item.parentNode.appendChild(item);

    }else{
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('bi-check-circle-fill');
        icone.classList.add('bi-circle');
    }
}

input.addEventListener("keyup",function(event){
    // se teclou enter (13)
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})