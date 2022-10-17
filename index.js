let empregados = [];
let f = 0
let qtdDelete = 0
let edit = false
let controle = false;

function consulta() {
    let resposta = ''
    //percorrer a variavel dados
    empregados.map(empregados => {
        resposta += `<tr><td>${empregados.id}</td><td>${empregados.nome}</td> <td>${empregados.funcao}</td> <td>${empregados.salario}</td>
        <td> <button onClick="atualiza(${empregados.id},'${empregados.nome}','${empregados.funcao}','${empregados.salario}')"> Editar </button> </td>
        <td> <button onClick="deletar2(${empregados.id})"> Deletar </button>
        </tr>`
    })
    //colocar a resposta no body da tabela
    document.getElementById("conteudoTabela").innerHTML = resposta
}

// C //

function cadastrar() {
    //new instructor
    if (edit == true) {
        const attEmpregado = {
            id: Number(document.getElementById("id").value),
            nome: document.getElementById("nome").value,
            funcao: document.getElementById("funcao").value,
            salario: document.getElementById("salario").value,
        }
        controle = true;
        deletar2(Number(document.getElementById("id").value));
        controle = false;

        //adiciona vetor atualizado
        empregados.push(attEmpregado);

        console.log(empregados)
        console.log("Atualizou e Ordenou")

        bubbleSort(empregados, (elem1, elem2) => {
            if(elem1.id === elem2.id) {     
                 return elem1.nome > elem2.nome    } 
                else return elem1.id > elem2.id})

        console.log(empregados)

        edit = false
        limpa();
        consulta();
    }
    else {
        const novoEmpregado = {
            id: f + 1,
            nome: document.getElementById("nome").value,
            funcao: document.getElementById("funcao").value,
            salario: document.getElementById("salario").value,
        }
        //adding new intructor
        empregados.push(novoEmpregado);
        f++
        consulta();
        console.log(empregados)
        let a = 0
        if (a == 0) {
            document.getElementById("id").innerHTML = f
            a++
        }
        console.log("Cadastrou")
    }
}

// U //

function atualiza(id, nome, funcao, salario) {
    document.getElementById("id").value = Number(id)
    document.getElementById("nome").value = nome
    document.getElementById("funcao").value = funcao
    document.getElementById("salario").value = salario
    edit = true
}

// D // 
function deletar() {
    //delete a element
    console.log("Id:", document.getElementById("id").value)
    let num2= empregados.findIndex(x => x = document.getElementById("id").value)
    console.log("Comando delete:", num2)
    empregados.splice(num2, 1)  
    console.log(empregados)
    if (controle == false) {
        //qtdDelete++
    }
}

function deletar2(id) {
    //delete a element
    console.log("Id:", id)
    let num2 = empregados.map(object => object.id).indexOf(id)
    console.log("Comando delete:", num2)
    empregados.splice(num2, 1)
    consulta();
    console.log(empregados)
    if (controle == false) {
        //qtdDelete++
    }
}

function limpa() {
    document.getElementById("id").value = ""
    document.getElementById("nome").value = ""
    document.getElementById("funcao").value = ""
    document.getElementById("salario").value = ""
    edit = false
}


function bubbleSort(vetor, fnComp){
    pass = 0, comps = 0, trocas = 0
    let trocou

    do{
        pass++
        trocou = false

        //Percurso for tradicional até a PENÚLTIMA posição do vetor
        for (let i = 0; i < vetor.length - 1; i++){
            comps++
            if(fnComp(vetor[i], vetor[i+1])){

                [vetor[i], vetor [i+1]] = [vetor [i+1], vetor[i]]
                trocou = true
                trocas++
            }
        }

    } while (trocou)
}