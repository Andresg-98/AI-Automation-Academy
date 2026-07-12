import resources from "../data/resources";
import ResourceCard from "../components/ResourceCard";

function Recursos() {

  return (

    <div className="flex-1 p-10">

      <h1 className="text-4xl font-bold">

        📂 Biblioteca de Recursos

      </h1>

      <p className="text-slate-400 mt-3">

        Material complementario para todos los cursos.

      </p>

      <div className="space-y-8 mt-10">

        {

          Object.entries(resources).map(([course, files]) => (

            <div key={course}>

              <h2 className="text-2xl font-bold capitalize mb-4">

                {course}

              </h2>

              <div className="grid md:grid-cols-2 gap-5">

                {

                  files.map((resource) => (

                    <ResourceCard

                      key={resource.id}

                      resource={resource}

                    />

                  ))

                }

              </div>

            </div>

          ))

        }

      </div>

    </div>

  );

}

export default Recursos;