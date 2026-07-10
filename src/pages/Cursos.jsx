import { useState } from "react";

import SearchBar from "../components/SearchBar";
import CourseCard from "../components/CourseCard";

import courses from "../data/courses";

function Cursos() {

  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) =>

    course.title

      .toLowerCase()

      .includes(search.toLowerCase())

  );

  return (

    <div className="p-10">

      <h1 className="text-4xl font-bold">

        📚 Cursos

      </h1>

      <p className="text-slate-400 mt-2">

        Explora todos los cursos disponibles.

      </p>

      <div className="mt-8">

        <SearchBar

          value={search}

          onChange={setSearch}

        />

      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {filteredCourses.map((course) => (

          <CourseCard

            key={course.id}

            id={course.id}

            title={course.title}

            progress="0%"

          />

        ))}

      </div>

      {

        filteredCourses.length === 0 && (

          <div className="bg-slate-800 rounded-xl p-8 text-center mt-8">

            <h2 className="text-2xl font-bold">

              😕 No encontramos ese curso

            </h2>

            <p className="text-slate-400 mt-2">

              Intenta escribir otra palabra.

            </p>

          </div>

        )

      }

    </div>

  );

}

export default Cursos;