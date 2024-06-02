import NormalQuestions from "../model/NormalQuestions.js";

export const addNormalQuestions = async (req, res) => {
  try {
    // const questionExist = await NormalQuestions.findOne({ question: req.body.question });
    // if (questionExist)
    //   return res.status(400).send({ msg: "Question already exists" });
    if (req.file) {
      req.body.image = req.file.filename;
      const question = await NormalQuestions.create(req.body);

      return res.status(201).send({ question });
    } else {
      const question = await NormalQuestions.create(req.body);

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
      const question = await NormalQuestions.find();

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
    const question = await NormalQuestions.findById(id);
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

    const question = await NormalQuestions.findById(id);
    if (!question) {
      return res
        .status(404)
        .send({ msg: "Question with requested id not found" });
    }
    const updatedQuestions = await NormalQuestions.findByIdAndUpdate(
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

    const question = await NormalQuestions.findById(id);
    if (!question) {
      return res
        .status(404)
        .send({ msg: "Questions with requested id not found" });
    }
    const deletedQuestions = await NormalQuestions.findByIdAndDelete(
      id,
      req.body
    );
    return res.status(200).send(deletedQuestions);
  } catch (err) {
    return res.status(500).send(err);
  }
};
