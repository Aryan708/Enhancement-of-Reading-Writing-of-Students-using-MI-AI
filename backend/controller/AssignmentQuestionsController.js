import AssignmentQuestions from "../model/AssignmentQuestions.js";

export const addAssignmentQuestions = async (req, res) => {
  try {
    // const questionExist = await AssignmentQuestions.findOne({ question: req.body.question });
    // if (questionExist)
    //   return res.status(400).send({ msg: "Question already exists" });
    if (req.file) {
      req.body.image = req.file.filename;
      const question = await AssignmentQuestions.create(req.body);

      return res.status(201).send({ question });
    } else {
      const question = await AssignmentQuestions.create(req.body);

      return res.status(201).send({ question });
    }
  } catch (err) {
    return res.status(500).send(err);
  }
};

export const getAllQuestions = async (req, res) => {
  try {
    const sort = req.query.sort;
    const order = req.query.order;
    if (sort === "createdAt") {
      const question = await AssignmentQuestions.find();

      question.sort((a, b) => {
        if (order === "desc") {
          return b.createdAt - a.createdAt;
        }
      });

      return res.status(200).send(question);
    }
  } catch (err) {
    return res.status(500).send(err);
  }
};

export const getQuestion = async (req, res) => {
  try {
    const id = req.params.id;
    const question = await AssignmentQuestions.findById(id);
    if (!question) {
      return res
        .status(404)
        .send({ msg: "Question with requested id not found" });
    }
    return res.status(200).send(question);
  } catch (err) {
    return res.status(500).send(err);
  }
};

export const update = async (req, res) => {
  try {
    const id = req.params.id;

    const question = await AssignmentQuestions.findById(id);
    if (!question) {
      return res
        .status(404)
        .send({ msg: "Question with requested id not found" });
    }
    const updatedQuestions = await AssignmentQuestions.findByIdAndUpdate(
      id,
      req.body
    );
    return res.status(200).send(updatedQuestions);
  } catch (err) {
    return res.status(500).send(err);
  }
};

export const deleteQuestion = async (req, res) => {
  try {
    const id = req.params.id;

    const question = await AssignmentQuestions.findById(id);
    if (!question) {
      return res
        .status(404)
        .send({ msg: "Questions with requested id not found" });
    }
    const deletedQuestions = await AssignmentQuestions.findByIdAndDelete(
      id,
      req.body
    );
    return res.status(200).send(deletedQuestions);
  } catch (err) {
    return res.status(500).send(err);
  }
};
