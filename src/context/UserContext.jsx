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

  },

  currentLesson: {

    react: 0,

    javascript: 0,

    n8n: 0,

    python: 0

  }

};

function UserProvider({ children }) {

  const [user, setUser] = useState(() => {

    const savedUser =
      localStorage.getItem("academy-user");

    return savedUser
      ? JSON.parse(savedUser)
      : initialUser;

  });

  useEffect(() => {

    localStorage.setItem(

      "academy-user",

      JSON.stringify(user)

    );

  }, [user]);

  function updateCurrentLesson(courseId, lessonIndex) {

    setUser((prev) => ({

      ...prev,

      currentLesson: {

        ...prev.currentLesson,

        [courseId]: lessonIndex

      }

    }));

  }

  function completeCourse(courseId) {

    setUser((prev) => {

      if (
        prev.completedCourses.includes(courseId)
      ) {

        return prev;

      }

      return {

        ...prev,

        xp: prev.xp + 100,

        completedCourses: [

          ...prev.completedCourses,

          courseId

        ],

        progress: {

          ...prev.progress,

          [courseId]: 100

        }

      };

    });

  }

  return (

    <UserContext.Provider

      value={{

        user,

        updateCurrentLesson,

        completeCourse

      }}

    >

      {children}

    </UserContext.Provider>

  );

}

export default UserProvider;