import { getTodayDate } from "../services/utils/certificateUtils";

function CertificatePreview({

  user,

  certificate,

  code

}) {

  return (

    <div className="bg-white text-slate-900 rounded-2xl shadow-xl p-12 max-w-5xl mx-auto border-8 border-blue-700">

      <h1 className="text-5xl font-bold text-center text-blue-700">

        AI Academy

      </h1>

      <p className="text-center text-xl mt-6 tracking-widest">

        CERTIFICADO DE FINALIZACIÓN

      </p>

      <p className="text-center mt-12 text-lg">

        Se certifica que

      </p>

      <h2 className="text-center text-5xl font-bold mt-4">

        {user.name}

      </h2>

      <p className="text-center mt-10 text-lg">

        ha completado satisfactoriamente el curso

      </p>

      <h3 className="text-center text-4xl font-bold text-blue-700 mt-4">

        {certificate.title}

      </h3>

      <div className="grid md:grid-cols-2 gap-8 mt-14">

        <div>

          <p>

            <strong>Instructor:</strong>

            {" "}

            {certificate.instructor}

          </p>

          <p className="mt-2">

            <strong>Duración:</strong>

            {" "}

            {certificate.duration}

          </p>

        </div>

        <div>

          <p>

            <strong>Fecha:</strong>

            {" "}

            {getTodayDate()}

          </p>

          <p className="mt-2 break-all">

            <strong>Código:</strong>

            {" "}

            {code}

          </p>

        </div>

      </div>

    </div>

  );

}

export default CertificatePreview;