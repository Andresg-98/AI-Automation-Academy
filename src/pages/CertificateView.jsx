import { useContext } from "react";
import { useParams } from "react-router-dom";

import { UserContext } from "../context/UserContext";

import certificates from "../data/certificates";

import CertificatePreview from "../components/CertificatePreview";

import {
  generateCertificateCode
} from "../services/utils/certificateUtils";

function CertificateView() {

  const { id } = useParams();

  const { user } = useContext(UserContext);

  const certificate = certificates.find(

    (item) => item.id === id

  );

  if (!certificate) {

    return (

      <div className="p-10">

        <h1 className="text-3xl font-bold">

          Certificado no encontrado

        </h1>

      </div>

    );

  }

  const code = generateCertificateCode(id);

  return (

    <div className="p-10 bg-slate-900 min-h-screen">

      <CertificatePreview

        user={user}

        certificate={certificate}

        code={code}

      />

    </div>

  );

}

export default CertificateView;