const challenges = {

  react: [

    {
      lesson: 1,

      title: "Primer componente",

      description:
        "Crea un componente llamado App que retorne un <h1> con el texto Hola React.",

      hint:
        "Recuerda utilizar una función y exportarla por defecto.",

      solution:
`function App() {

  return (
    <h1>Hola React</h1>
  );

}

export default App;`
    }

  ],

  javascript: [

    {
      lesson: 1,

      title: "Declarar una constante",

      description:
        "Declara una constante llamada nombre con tu nombre.",

      hint:
        "Utiliza la palabra reservada const.",

      solution:
`const nombre = "Andrés";`
    }

  ],

  python: [

    {
      lesson: 1,

      title: "Hola Mundo",

      description:
        "Imprime el texto Hola Mundo.",

      hint:
        "Utiliza la función print().",

      solution:
`print("Hola Mundo")`
    }

  ]

};

export default challenges;