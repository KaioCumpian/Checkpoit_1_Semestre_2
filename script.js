class Tarefa {
    constructor(descricao, autor, departamento, importancia) {
      this.descricao = descricao;
      this.autor = autor;
      this.departamento = departamento;
      this.importancia = importancia;
      this.valor = null;
      this.duracao = null;
    }
  
    getPrioridade() {
      if (this.importancia >= 1 && this.importancia <= 3) {
        return "baixa";
      } else if (this.importancia <= 6) {
        return "mediana";
      } else if (this.importancia <= 8) {
        return "alta";
      } else {
        return "urgente";
      }
    }
  }
  
  const listaDeTarefas = [];
  
  function adicionarTarefa(descricao, autor, departamento, importancia) {
    const novaTarefa = new Tarefa(descricao, autor, departamento, importancia);
    listaDeTarefas.push(novaTarefa);
  }
  
  function excluirTarefaConcluida(indice) {
    listaDeTarefas.splice(indice, 1);
  }
  
  function adicionarValorATarefa(indice, valor) {
    listaDeTarefas[indice].valor = valor;
  }
  
  function adicionarDuracaoATarefa(indice, duracao) {
    listaDeTarefas[indice].duracao = duracao;
  }
  
  function ordenarPorPrioridade() {
    const tarefasOrdenadas = listaDeTarefas.slice().sort((a, b) => a.importancia - b.importancia);
    return tarefasOrdenadas;
  }
  
  adicionarTarefa("Fazer relatório mensal", "João", "Contabilidade", 3);
  adicionarTarefa("Revisar documento", "Maria", "Jurídico", 6);
  adicionarTarefa("Atualizar site", "Carlos", "Tecnologia", 8);
  adicionarTarefa("Resolver problema crítico", "Ana", "Suporte", 10);
  
  const tarefasOrdenadasPorPrioridade = ordenarPorPrioridade();
  
  console.log("Tarefas ordenadas por prioridade:");
  tarefasOrdenadasPorPrioridade.forEach(tarefa => {
    console.log(`${tarefa.descricao} - Prioridade: ${tarefa.getPrioridade()}`);
  });