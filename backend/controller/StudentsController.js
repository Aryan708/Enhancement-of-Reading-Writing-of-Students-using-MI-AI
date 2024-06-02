import Students from "../model/Students.js";

export const addStudents = async (req, res) => {
  try {
    const emailExist = await Students.findOne({ email: req.body.email });
    if (emailExist)
      return res.status(400).send({ msg: "Email already exists" });

    const phoneExist = await Students.findOne({
      phoneNumber: req.body.phoneNumber,
    });
    if (phoneExist)
      return res.status(400).send({ msg: "Phone Number already exists" });

    const students = await Students.create(req.body);

    return res.status(201).send({ students });
  } catch (err) {
    return res.status(500).send(err);
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const sort = req.query.sort;
    const order = req.query.order;
    if (sort === "createdAt") {
      const students = await Students.find();

      students.sort((a, b) => {
        if (order === "desc") {
          return b.createdAt - a.createdAt;
        }
      });
      return res.status(200).send(students);
    }
  } catch (err) {
    return res.status(500).send(err);
  }
};

export const getStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const student = await Students.findById(id);
    if (!student) {
      return res
        .status(404)
        .send({ msg: "student with requested id not found" });
    }
    return res.status(200).send(student);
  } catch (err) {
    return res.status(500).send(err);
  }
};

export const updateStudent = async (req, res) => {
  try {
    const id = req.params.id;

    const student = await Students.findById(id);
    if (!student) {
      return res
        .status(404)
        .send({ msg: "Student with requested id not found" });
    }
    const updatedStudent = await Students.findByIdAndUpdate(id, req.body);
    return res.status(200).send(updatedStudent);
  } catch (err) {
    return res.status(500).send(err);
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const id = req.params.id;

    const student = await Students.findById(id);
    if (!student) {
      return res
        .status(404)
        .send({ msg: "Student with requested id not found" });
    }
    const deletedStudent = await Students.findByIdAndDelete(id, req.body);
    return res.status(200).send(deletedStudent);
  } catch (err) {
    return res.status(500).send(err);
  }
};

// Students Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if Email is correct
    const student = await Students.findOne({ email });
    if (!student) return res.status(400).send({ msg: "Invalid Email" });

    // Check if password is correct
    if (password !== student.password)
      return res.status(400).send({ msg: "Invalid password" });

    return res.status(200).json({ id: student._id, name: student.firstName });
  } catch (err) {
    return res.status(500).send(err);
  }
};

export const studentsNormalDailyPoints = async (req, res) => {
  try {
    const student = await Students.findById(req.params.id);
    if (!student) return res.status(404).json({ msg: "Students not found" });
    const { date, normal, status } = req.body;

    student.normalQuestions.push({ date, normal, status });
    await student.save();
    res.status(200).json(student);
  } catch (err) {
    res.status(500).json({ msg: err.msg });
  }
};

export const studentAssignmentsDailyPoints = async (req, res) => {
  try {
    const student = await Students.findById(req.params.id);
    if (!student) return res.status(404).json({ msg: "Students not found" });
    const { date, assignments, status } = req.body;

    student.assignmentsQuestions.push({ date, assignments, status });
    await student.save();
    res.status(200).json(student);
  } catch (err) {
    res.status(500).json({ msg: err.msg });
  }
};

// Change Password
export const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const student = await Students.findById(req.body._id);
    if (!student) return res.status(404).json({ msg: "Students not found" });
    if (oldPassword !== student.password)
      return res.status(404).json({ msg: "Invalid Old password" });
    student.password = newPassword;
    await student.save();
    res.status(200).json(student);
  } catch (err) {
    return res.status(500).json({ msg: err.msg });
  }
};

export const getLeaderBoard = async (req, res) => {
  try {
    const sort = req.query.sort;
    const order = req.query.order;
    if (sort === "score") {
      const students = await Students.find();
      let item = [];
      for (let i of students) {
        item.push({ studentId: i._id, score: i.assignmentsQuestions.length });
      }

      item.sort((a, b) => {
        if (order === "desc") {
          return b.score - a.score;
        }
      });
      return res.status(200).send(item);
    }
  } catch (err) {
    return res.status(500).json({ msg: err.msg });
  }
};
