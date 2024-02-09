const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de marcação",
        "Uma linguagem de programação",
        "Um framework popular",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador '==' em JavaScript?",
      respostas: [
        "Comparação estrita de valores e tipos",
        "Atribuição de valores",
        "Comparação de valores apenas",
      ],
      correta: 2
    },
    {
      pergunta: "Como declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variable myVar;",
        "let myVar =;",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Documento Orientado a Modelos",
        "Diretório de Operações em Módulos",
        "Modelo de Objeto do Documento",
      ],
      correta: 2
    },
    {
      pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
      respostas: [
        "print()",
        "log()",
        "console()",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma função de callback em JavaScript?",
      respostas: [
        "Uma função que chama outra função automaticamente",
        "Uma função que é passada como argumento para outra função",
        "Uma função que não pode ser chamada",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' ao declarar variáveis?",
      respostas: [
        "Não há diferença",
        "let permite reatribuição, const não",
        "const permite reatribuição, let não",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o conceito de 'escopo' em JavaScript?",
      respostas: [
        "Onde você compra café",
        "A área de código onde uma variável é válida",
        "Uma função específica em JavaScript",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador lógico 'E' em JavaScript?",
      respostas: [
        "&&",
        "||",
        "!",
      ],
      correta: 0
    },
    {
      pergunta: "O que é JSON em JavaScript?",
      respostas: [
        "Java Style Object Notation",
        "JavaScript Object Notation",
        "Just Simple Object Naming",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const MostrarTotal = document.querySelector('#acertos span')
  MostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
  
      corretas.delete(item)
      if(estaCorreta){
        corretas.add(item)
      } 
  
      MostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
  
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  
  quizItem.querySelector('dl dt').remove()
  
  
  quiz.appendChild(quizItem)
  }
  