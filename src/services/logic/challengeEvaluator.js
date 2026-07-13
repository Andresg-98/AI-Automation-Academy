export function evaluateChallenge(challenge, code) {

  if (!code.trim()) {

    return {

      success: false,

      score: 0,

      message: "Escribe una solución antes de evaluarla."

    };

  }

  const solution = challenge.solution
    .replace(/\s+/g, "")
    .toLowerCase();

  const userCode = code
    .replace(/\s+/g, "")
    .toLowerCase();

  if (solution === userCode) {

    return {

      success: true,

      score: 100,

      message:
        "🎉 Excelente. Tu solución coincide completamente con la solución esperada."

    };

  }

  if (userCode.length >= solution.length * 0.6) {

    return {

      success: false,

      score: 60,

      message:
        "👍 Vas por buen camino, pero todavía hay diferencias con la solución esperada."

    };

  }

  return {

    success: false,

    score: 20,

    message:
      "❌ La solución aún está incompleta. Revisa la pista o intenta nuevamente."

  };

}