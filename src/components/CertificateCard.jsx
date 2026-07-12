function CertificateCard({ certificate }) {

  return (

    <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-lg hover:border-green-500 transition-all">

      <h2 className="text-2xl font-bold">

        🏆 {certificate.title}

      </h2>

      <p className="text-slate-400 mt-3">

        Instructor: {certificate.instructor}

      </p>

      <p className="text-slate-400">

        Duración: {certificate.duration}

      </p>

      <button

        className="bg-green-600 hover:bg-green-700 mt-6 px-6 py-3 rounded-xl"

      >

        Ver certificado

      </button>

    </div>

  );

}

export default CertificateCard;