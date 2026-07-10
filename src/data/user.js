const initialUser = {

  name: "Andrés",

  xp: 300,

  streak: 4,

  completedCourses: [],

  progress: {

    react: 80,

    javascript: 35,

    n8n: 0,

    python: 0

  },

  currentLesson: {

    react: 0,

    javascript: 0,

    n8n: 0,

    python: 0

  },

  premium: false,

  avatar:
    "https://ui-avatars.com/api/?name=Andres",

  notifications: [],

  createdAt: new Date().toISOString()

};

export default initialUser;