import Story from "../model/Story.js";

export const addStory = async (req, res) => {
  try {
    if (req.file) {
      req.body.image = req.file.filename;
      const story = await Story.create(req.body);

      return res.status(201).send({ story });
    } else {
      const story = await Story.create(req.body);

      return res.status(201).send({ story });
    }
  } catch (err) {
    return res.status(500).send(err);
  }
};

export const getAllStories = async (req, res) => {
  try {
    const sort = req.query.sort;
    const order = req.query.order;
    if (sort === "createdAt") {
      const story = await Story.find();

      story.sort((a, b) => {
        if (order === "desc") {
          return b.createdAt - a.createdAt;
        }
      });
      return res.status(200).send(story);
    }
  } catch (err) {
    return res.status(500).send(err);
  }
};

export const getStory = async (req, res) => {
  try {
    const id = req.params.id;
    const story = await Story.findById(id);
    if (!story) {
      return res.status(404).send({ msg: "Story with requested id not found" });
    }
    return res.status(200).send(story);
  } catch (err) {
    return res.status(500).send(err);
  }
};

export const update = async (req, res) => {
  try {
    const id = req.params.id;

    const story = await Story.findById(id);
    if (!story) {
      return res.status(404).send({ msg: "Story with requested id not found" });
    }
    const updatedStory = await Story.findByIdAndUpdate(id, req.body);
    return res.status(200).send(updatedStory);
  } catch (err) {
    return res.status(500).send(err);
  }
};

export const deleteStory = async (req, res) => {
  try {
    const id = req.params.id;

    const story = await Story.findById(id);
    if (!story) {
      return res.status(404).send({ msg: "Story with requested id not found" });
    }
    const deletedStory = await Story.findByIdAndDelete(id, req.body);
    return res.status(200).send(deletedStory);
  } catch (err) {
    return res.status(500).send(err);
  }
};
