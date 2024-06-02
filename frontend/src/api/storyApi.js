import config from "./config";

// Adding Story
export const addStory = async (data) => {
  return await config.post("/story", data);
};

// Get all Story
export const getStory = async () => {
  return await config.get("/story?sort=createdAt&order=desc");
};

// Get Story By ID
export const getStoryById = async (id) => {
  return await config.get("/story/" + id);
};

// Update Story By ID
export const updateStoryById = async (id, data) => {
  return await config.put("/story/" + id, data);
};

// Delete Story BY ID
export const deleteStoryById = async (id) => {
  try {
    return await config.delete("/story/" + id);
  } catch (error) {
    return error;
  }
};
