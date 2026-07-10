import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

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

  }

};

function UserProvider({ children }) {

  const [user, setUser] = useState(() => {

    const savedUser = localStorage.getItem("academy-user");

    return savedUser ? JSON.parse(savedUser) : initialUser;

  });

  useEffect(() => {

    localStorage.setItem(

      "academy-user",

      JSON.stringify(user)

    );

  }, [user]);

  function completeLesson(courseId, xpReward) {

    setUser((prev) => {

      if (prev.completedCourses.includes(courseId)) {

        return prev;

      }

      const progresoActual = prev.progress[courseId];

      const nuevoProgreso = Math.min(

        progresoActual + 20,

        100

      );

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