import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {

  const [user, setUser] = useState({

    name: "Andrés",

    xp: 300,

    streak: 4,

    completedCourses: [],

    progress: {

      react: 80,

      javascript: 35,

      n8n: 0,

      python: 0

    }

  });

  function completeLesson(courseId, xpReward) {

    setUser((prev) => {

      // Si ya completó el curso, no hacer nada
      if (prev.completedCourses.includes(courseId)) {
        return prev;
      }

      const progresoActual = prev.progress[courseId];

      const nuevoProgreso = Math.min(progresoActual + 20, 100);

      return {

        ...prev,

        xp: prev.xp + xpReward,

        completedCourses: [

          ...prev.completedCourses,

          courseId

        ],

        progress: {

          ...prev.progress,

          [courseId]: nuevoProgreso

        }

      };

    });

  }

  return (

    <UserContext.Provider

      value={{

        user,

        completeLesson

      }}

    >

      {children}

    </UserContext.Provider>

  );

}

export default UserProvider;