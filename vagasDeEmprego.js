// Variáveis

let jobs=[]

let option=""





// Função para Adicionar vaga

function addJob(){
    let job={}
    job.name=prompt("Digite o nome da vaga")
    job.description=prompt("Digite uma descrição para a vaga")
    job.salary=prompt("Digite o salário da vaga")
    job.dataLim=prompt("Informe a data limite para a vaga (mm/aaaa)")
    job.candidates=[]

    let conf=confirm("Deseja salvar a seguinte vaga:\n"+
    "\nNome da vaga: "+job.name+
    "\nDescrição da vaga: "+job.description+
    "\nSalário: "+job.salary+
    "\nData limite: "+job.dataLim)

    if (conf){
    jobs.push(job)
    alert("A vaga foi salva com sucesso")
    }else {
    alert("A vaga não foi salva")
    }
}
// Função para adicionar cadidato a uma vaga

function subscribeCandidate(){
   let candidate=""
   candidate=prompt("Digite o nome do candidato")
   let ind=prompt("Digite o índice da vaga para a qual o candidato deseja se inscrever")
   let work=jobs[ind]

   let confirma=confirm("Deseja realmente inscrever o candidato "+candidate+" na vaga "+"\nNome: "+work.name
   +"\nDescricao da vaga: "+work.description+"\nSalario: "+work.salary+"\nData Limite: "+work.dataLim
   )
   if(confirma){
   work.candidates.push(candidate)
   alert("O candidato "+candidate+" foi inscrito na vaga com sucesso!")
    }else{
    alert("O candidato não foi inscrito na vaga")
    }
}

//Função para deletar uma vaga 

function deleteJob(){
    let index=prompt("Digite a vaga a ser excluída")
    let conf=confirm("Deseja realmente excluir a vaga?")

    if (conf){
        jobs.splice(index,1)
        alert("Vaga excluída com sucesso.")
    }
}

// Mostrar vaga especifica

function showJob(){
    let index=prompt("Digite o índice da vaga desejada")
    let vag = alert ("\n"+"Nome da vaga: "+jobs[index].name+"\n"+
                "Descrição da vaga: "+jobs[index].description+"\n"+
                "Salario: "+jobs[index].salary+
                "\nData Limite: "+jobs[index].dataLim+
                "\nO número de candidatos inscritos nessa vaga é: "+jobs[index].candidates.length)
}





// Do while para executar a função ate o usuário escolher sair
do {
    option= prompt("Escolha uma das opções abaixo\n"+
    "\n numero de vagas: "+jobs.length+"\n"+
    "\n1- Listar vagas disponíveis no momento"+
    "\n2- Criar nova vaga"+
    "\n3- Visualizar vaga"+
    "\n4- Inscrever candidato"+
    "\n5- Excluir vaga"+
    "\n6- Sair"
    )

// Switch para as opções

    switch(option){
        case "1":
            // Listar as vagas

            for (let i=0;i<jobs.length;i++){
                alert ("Vaga: "+(i+1)+"\n"+"Nome da vaga: "+jobs[i].name+"\n"+
                "Descrição da vaga: "+jobs[i].description+"\n"+
                "Salario: "+jobs[i].salary+
                "\nData Limite: "+jobs[i].dataLim+
                "\nO numero de candidatos inscrito na vaga é: "+jobs[i].candidates.length
                )
                }
            break
        case "2":

            addJob()
            break

        case "3":
            showJob()
            break
        case "4":
            subscribeCandidate()
            break
        case "5":
            deleteJob()
            break
    }


} while (option!="6");