import courses from "../../data/courses";

function getCourses() {

  return courses;

}

function getCourseById(id) {

  return courses.find(

    (course) => course.id === id

  );

}

export {

  getCourses,

  getCourseById

};