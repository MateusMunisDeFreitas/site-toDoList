/* Entradas de variaveis */
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const boxTarefa = document.querySelector('.box-tarefa');

/*  Funções */
const addTarefa = (texto) => {
    if(texto){
        let tarefa = document.createElement('div');
        tarefa.classList.add('tarefa');

        let h4 = document.createElement('h4');
        h4.classList.add('descricao-tarefa');
        h4.innerText = texto;
        tarefa.appendChild(h4);

        let button = document.createElement('button');
        button.classList.add('btn-excluir');
        button.innerHTML = '<i class="fa-solid fa-trash" id="excluir"></i>';
        tarefa.appendChild(button);

        boxTarefa.appendChild(tarefa);
        input.value = '';
    }
}

/* Eventos */
document.addEventListener('click', (e) =>{
    e.preventDefault();
    let targetElem = e.target;
    let parent = targetElem.closest('div');

    if(targetElem.classList.contains('btn-add')){
        addTarefa(input.value);   
        input.focus();
    }
    if(targetElem.classList.contains('descricao-tarefa')){
        targetElem.classList.toggle('check');
    }
    if(targetElem.classList.contains('btn-excluir')){
        parent.remove();
    }
})