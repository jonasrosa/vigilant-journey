Teste de Programação - Desenvolvedor Júnior
    Este repositório contém a solução para o teste de programação para a posição de Desenvolvedor Júnior. O projeto foi desenvolvido utilizando React e Typescript para a construção de um componente de lista de tarefas, além da implementação de diversas funções de manipulação de arrays e objetos.

Tecnologias Utilizadas:
React,TypeScript.

Parte 1: Lógica de Programação - TypeScript

    Parte 1: Lógica de Programação
        Nesta seção, estão implementadas várias funções de manipulação de arrays e objetos. Cada função está localizada no arquivo src/functions.js e foi desenvolvida conforme as instruções fornecidas.

    Tarefa 1: Manipulação de Arrays e Objetos
        Função: transformData
        Descrição: Filtra e transforma um array de objetos, retornando apenas os usuários ativos com as propriedades id e name, ordenados alfabeticamente.
        Arquivo: src\util\transformData.ts

    Tarefa 2: Função Assíncrona
        Função: fetchUserData
        Descrição: Realiza uma requisição GET para uma API fictícia e filtra os usuários cujo username começa com a letra "C".
        Arquivo: src\api\fetchUserData.ts

    Tarefa 3: Contagem de Ocorrências
        Função: countOccurrences
        Descrição: Conta o número de vezes que cada string aparece em um array, retornando um objeto com essas contagens.
        Arquivo: src\util\countOccurrences.ts

    Tarefa 4: Agrupamento de Objetos
        Função: groupByCategory
        Descrição: Agrupa objetos de um array com base em sua category, retornando um objeto com arrays de itens agrupados.
        Arquivo: src\util\groupByCategory.ts

    Tarefa 5: Mesclar Arrays de Objetos
        Função: mergeArrays
        Descrição: Mescla dois arrays de objetos com base em uma chave id, combinando as propriedades de objetos com o mesmo id.
        Arquivo: src\util\mergeArrays.ts

Parte 2: Componente React
    O componente React desenvolvido nesta parte está localizado no arquivo src/components/TaskList.js.

Tarefa 1: Componente de Lista de Tarefas
    Componente: TaskList
    Descrição: Um componente React que exibe uma lista de tarefas com funcionalidades de adicionar, marcar como concluída/não concluída e filtrar tarefas concluídas.
    Hooks Utilizados: useState para gerenciar o estado das tarefas.
    arquivo:src\components\TaskList.tsx


Instruções para Rodar o Projeto
Clone o repositório:

git clone https://github.com/seu-usuario/nome-do-repositorio.git
Instale as dependências:

cd nome-do-repositorio
npm install
Inicie o servidor de desenvolvimento:

npm start
Abra o projeto no navegador:

O servidor será iniciado em http://localhost:3000.

Conclusão
Este projeto foi desenvolvido seguindo as especificações fornecidas para o teste de programação. As funções de lógica de programação foram implementadas com foco em eficiência e clareza, enquanto o componente React foi desenvolvido seguindo as especificações com estilizações basica.



