import { useContext } from "react";

import { UserContext } from "../context/UserContext";

import certificates from "../data/certificates";

import CertificateCard from "../components/CertificateCard";

function Certificados() {

  const { user } = useContext(UserContext);

  const disponibles = certificates.filter(

    (certificate) =>

      user.completedCourses.includes(certificate.id)

  );

  return (

    <div className="p-10">

      <h1 className="text-4xl font-bold">

        🏆 Mis Certificados

      </h1>

      <p className="text-slate-400 mt-3">

        Aquí aparecerán todos los certificados obtenidos.

      </p>

      {

        disponibles.length === 0 ? (

          <div className="bg-slate-800 rounded-xl p-8 mt-10">

            <p>

              Aún no has completado ningún curso.

            </p>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            {

              disponibles.map((certificate) => (

                <CertificateCard

                  key={certificate.id}

                  certificate={certificate}

                />

              ))

            }

          </div>

        )

      }

    </div>

  );

}

export default Certificados;