export function generateCertificateCode(courseId) {

  const random = Math.random()

    .toString(36)

    .substring(2, 10)

    .toUpperCase();

  return `AIA-${courseId.toUpperCase()}-${random}`;

}

export function getTodayDate() {

  return new Date().toLocaleDateString("es-CO");

}