const Alunos = [
    {
        nome : 'Aluno',
        nota : 7,
        turma: '1A',
    }
];

function alunosAprovados(arr, media){
    let aprovados = [];

    for(let i = 0; i < arr.length; i++){

        const {nota, nome} = arr[i];

        if(nota >= media){
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(Alunos, 7));