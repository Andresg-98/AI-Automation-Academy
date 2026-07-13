export function getDashboardInsights(user, courses, achievements) {

  const xpPorNivel = 300;

  const nivel = Math.floor(user.xp / xpPorNivel) + 1;

  const xpActual = user.xp % xpPorNivel;

  const porcentaje = (xpActual / xpPorNivel) * 100;

  const xpRestante = xpPorNivel - xpActual;

  const cursosCompletados = user.completedCourses.length;

  const siguienteCurso = courses.find(

    (course) =>

      !user.completedCourses.includes(course.id)

  );

  const logrosDesbloqueados = achievements.filter(

    (achievement) =>

      cursosCompletados >= achievement.requirement

  ).length;

  return {

    nivel,

    porcentaje,

    xpActual,

    xpRestante,

    siguienteCurso,

    logrosDesbloqueados

  };

}