import Teachers from "../model/Teachers.js";

export const addTeachers = async (req, res) => {
  try {
    const emailExist = await Teachers.findOne({ email: req.body.email });
    if (emailExist)
      return res.status(400).send({ msg: "Email already exists" });

    const phoneExist = await Teachers.findOne({
      phoneNumber: req.body.phoneNumber,
    });
    if (phoneExist)
      return res.status(400).send({ msg: "Phone Number already exists" });

    const teachers = await Teachers.create(req.body);

    return res.status(201).send({ teachers });
  } catch (err) {
    return res.status(500).send(err);
  }
};

export const getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teachers.find();
    return res.status(200).send(teachers);
  } catch (err) {
    return res.status(500).send(err);
  }
};

export const getTeacher = async (req, res) => {
  try {
    const id = req.params.id;
    const teacher = await Teachers.findById(id);
    if (!teacher) {
      return res
        .status(404)
        .send({ msg: "Teacher with requested id not found" });
    }
    return res.status(200).send(teacher);
  } catch (err) {
    return res.status(500).send(err);
  }
};

export const updateTeacher = async (req, res) => {
  try {
    const id = req.params.id;

    const teacher = await Teachers.findById(id);
    if (!teacher) {
      return res
        .status(404)
        .send({ msg: "Teacher with requested id not found" });
    }
    const updatedTeacher = await Teachers.findByIdAndUpdate(id, req.body);
    return res.status(200).send(updatedTeacher);
  } catch (err) {
    return res.status(500).send(err);
  }
};

export const deleteTeacher = async (req, res) => {
  try {
    const id = req.params.id;

    const teacher = await Teachers.findById(id);
    if (!teacher) {
      return res
        .status(404)
        .send({ msg: "Teacher with requested id not found" });
    }
    const deletedTeacher = await Teachers.findByIdAndDelete(id, req.body);
    return res.status(200).send(deletedTeacher);
  } catch (err) {
    return res.status(500).send(err);
  }
};

// Teachers Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if Email is correct
    const teacher = await Teachers.findOne({ email });
    if (!teacher) return res.status(400).send({ msg: "Invalid Email" });

    // Check if password is correct
    if (password !== teacher.password)
      return res.status(400).send({ msg: "Invalid password" });

    return res.status(200).json({ id: teacher._id, name: teacher.firstName });
  } catch (err) {
    return res.status(500).send(err);
  }
};

// Change Password
export const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const teacher = await Teachers.findById(req.body._id);
    if (!teacher) return res.status(404).json({ msg: "Teachers not found" });
    if (oldPassword !== teacher.password)
      return res.status(404).json({ msg: "Invalid Old password" });
    teacher.password = newPassword;
    await teacher.save();
    res.status(200).json(teacher);
  } catch (err) {
    return res.status(500).json({ msg: err.msg });
  }
};
