export function getNextRecommendedCourse(user, courses) {

  const completed = user.completedCourses || [];

  const nextCourse = courses.find(
    (course) => !completed.includes(course.id)
  );

  return nextCourse || null;

}