const lessons = {

  react: [

    {
      id: 1,
      title: "¿Qué es React?",

      blocks: [

        {
          type: "text",
          content:
            "React es una biblioteca de JavaScript creada por Meta para construir interfaces modernas mediante componentes reutilizables."
        },

        {
          type: "tip",
          content:
            "Aprender React será la base para dominar Next.js y el desarrollo moderno."
        },

        {
          type: "code",
          language: "javascript",
          content:
`function App() {

  return (
    <h1>Hola React</h1>
  );

}

export default App;`
        }

      ]

    },

    {
      id: 2,
      title: "Componentes",

      blocks: [

        {
          type: "text",
          content:
            "Los componentes permiten dividir una aplicación en piezas reutilizables."
        },

        {
          type: "tip",
          content:
            "Un componente debe tener una única responsabilidad para facilitar su mantenimiento."
        }

      ]

    },

    {
      id: 3,
      title: "Props",

      blocks: [

        {
          type: "text",
          content:
            "Las Props son datos que un componente recibe desde otro componente."
        },

        {
          type: "tip",
          content:
            "Las Props son de solo lectura y permiten comunicar componentes entre sí."
        }

      ]

    },

    {
      id: 4,
      title: "State",

      blocks: [

        {
          type: "text",
          content:
            "El State almacena información que puede cambiar durante la vida del componente."
        },

        {
          type: "tip",
          content:
            "Cada vez que cambia el State, React vuelve a renderizar el componente."
        }

      ]

    },

    {
      id: 5,
      title: "Hooks",

      blocks: [

        {
          type: "text",
          content:
            "Los Hooks permiten utilizar funcionalidades de React como useState y useEffect."
        },

        {
          type: "tip",
          content:
            "Los Hooks solo pueden utilizarse dentro de componentes funcionales o de otros Hooks."
        }

      ]

    }

  ],

  javascript: [

    {
      id: 1,
      title: "Variables",

      blocks: [

        {
          type: "text",
          content:
            "Las variables almacenan información que puede utilizarse durante la ejecución del programa."
        },

        {
          type: "tip",
          content:
            "Utiliza const por defecto y let únicamente cuando el valor vaya a cambiar."
        }

      ]

    },

    {
      id: 2,
      title: "Funciones",

      blocks: [

        {
          type: "text",
          content:
            "Las funciones permiten reutilizar código y organizar mejor una aplicación."
        },

        {
          type: "tip",
          content:
            "Las funciones pequeñas y específicas son más fáciles de probar y mantener."
        }

      ]

    }

  ],

  n8n: [

    {
      id: 1,
      title: "Introducción a n8n",

      blocks: [

        {
          type: "text",
          content:
            "n8n es una plataforma de automatización de código abierto que permite conectar aplicaciones y crear flujos de trabajo sin escribir grandes cantidades de código."
        },

        {
          type: "tip",
          content:
            "Piensa en un workflow como una cadena de tareas automáticas que se ejecutan en orden."
        }

      ]

    }

  ],

  python: [

    {
      id: 1,
      title: "Hola Mundo",

      blocks: [

        {
          type: "text",
          content:
            "Python es uno de los lenguajes más utilizados para inteligencia artificial, automatización y ciencia de datos."
        },

        {
          type: "tip",
          content:
            "Su sintaxis sencilla hace que sea uno de los mejores lenguajes para comenzar a programar."
        }

      ]

    }

  ]

};

export default lessons;