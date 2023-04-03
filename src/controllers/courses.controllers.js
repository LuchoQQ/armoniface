import Course from "../models/Course.js";

export const getCoursesFromDB = async (req, res) => {
  try {
    const courses = await Course.find();
    return res.status(200).json(courses);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCourseById = async (req, res) => {
  const id = req.query.slug[0];
  try {
    const course = await Course.findById(id);
    if (course === null)
      return res.status(404).json({ message: "Course not found" });
    return res.status(200).json(course);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCourse = async (req, res) => {
  const { title, url, description, topic } = req.body;
  try {
    const course = await Course.create({
      title,
      url,
      topic,
      description,
    });
    return res.status(201).json({
      status: "ok",
      message: "user created sucessfull",
      ...course._doc,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteCourse = async (req, res) => {
  const id = req.query.slug[0];
  try {
    const course = await Course.findByIdAndDelete(id);
    if (course === null)
      return res.status(404).json({ message: "Course not found" });
    return res.status(200).json(course);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const addPdfToCourse = async (req, res) => {
  const { pdfTitle, pdfUrl } = req.body;
  const id = req.query.slug[0];

  try {
    const course = await Course.findById(id);
    if (course === null)
      return res.status(404).json({ message: "Course not found" });

    // add pdf to course
    course.coursePdf
      ? course.coursePdf.push({ pdfTitle, pdfUrl })
      : (course.coursePdf = [{ pdfTitle, pdfUrl }]);

    await course.save();

    const newPdf = course.coursePdf[course.coursePdf.length - 1];

    return res.status(200).json(newPdf);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const deletePdfFromCourse = async (req, res) => {
  const courseId = req.query.pdfId[0];
  const pdfId = req.query.pdfId[1];

  try {
    const course = await Course.findById(courseId);
    if (course === null)
      return res.status(404).json({ message: "Course not found" });

    // delete pdf from course
    course.coursePdf = course.coursePdf.filter((pdf) => pdf._id != pdfId);

    await course.save();

    return res.status(200).json({ message: "PDF borrado correctamente" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
