import { useNavigate } from "react-router-dom";

import { Card, Button } from "../ui";

function CertificateCard({ certificate }) {

  const navigate = useNavigate();

  return (

    <Card className="hover:border-green-500 transition-all duration-300">

      <h2 className="text-2xl font-bold">

        🏆 {certificate.title}

      </h2>

      <p className="text-slate-400 mt-3">

        Instructor: {certificate.instructor}

      </p>

      <p className="text-slate-400">

        Duración: {certificate.duration}

      </p>

      <Button

        variant="success"

        className="mt-6"

        onClick={() =>

          navigate(`/certificado/${certificate.id}`)

        }

      >

        Ver certificado

      </Button>

    </Card>

  );

}

export default CertificateCard;