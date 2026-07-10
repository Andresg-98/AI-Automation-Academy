import { createContext, useState, useEffect } from "react";

import initialUser from "../data/user";

export const UserContext = createContext();

function UserProvider({ children }) {

  const [user, setUser] = useState(() => {

    const savedUser =
      localStorage.getItem("academy-user");

    if (!savedUser) {

      return initialUser;

    }

    const parsedUser = JSON.parse(savedUser);

    return {

      ...initialUser,

      ...parsedUser,

      progress: {

        ...initialUser.progress,

        ...parsedUser.progress

      },

      currentLesson: {

        ...initialUser.currentLesson,

        ...parsedUser.currentLesson

      }

    };

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