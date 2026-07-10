function calculateProgress(totalLessons, currentLesson) {

  if (totalLessons === 0) {

    return 0;

  }

  return Math.round(

    ((currentLesson + 1) / totalLessons) * 100

  );

}

function isLastLesson(totalLessons, currentLesson) {

  return currentLesson === totalLessons - 1;

}

export {

  calculateProgress,

  isLastLesson

};